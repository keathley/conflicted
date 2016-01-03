defmodule Conflicted.TweetStreamer do
  alias Conflicted.Repo
  import Ecto.Query, only: [from: 2]

  def stream(search_term) do
    ExTwitter.stream_filter(track: search_term)
    |> Stream.filter(&has_images?/1)
    |> Stream.filter(&new_tweet?/1)
    |> Stream.map(&store_tweet/1)
  end

  defp store_tweet(raw_tweet) do
    tweet =
      raw_tweet
      |> new_tweet
      |> Repo.insert!

    Conflicted.Endpoint.broadcast!("tweets:stream", "new:tweet", tweet)
  end

  defp new_tweet(tweet) do
    %Conflicted.Tweet{
      content: tweet.text,
      author: tweet.user.screen_name,
      image_url: media_url(tweet),
      source_url: source_url(tweet)
    }
  end

  defp has_images?(%ExTwitter.Model.Tweet{entities: entities}=tweet) do
    Map.has_key?(entities, :media) && Enum.any?(photos(tweet))
  end

  defp photos(%ExTwitter.Model.Tweet{entities: entities}) do
    entities.media
    |> Enum.filter(&photo?/1)
  end

  defp first_photo(tweet) do
    photos(tweet)
    |> hd
  end

  defp media_url(tweet) do
    first_photo(tweet).media_url
  end

  defp source_url(tweet) do
    first_photo(tweet).expanded_url
  end

  defp new_tweet?(tweet) do
    query = from t in Conflicted.Tweet,
      where: t.source_url == ^source_url(tweet),
      select: count(t.id)

    Conflicted.Repo.one(query) == 0
  end

  defp photo?(%{ type: "photo"}), do: true
  defp photo?(_), do: false
end
