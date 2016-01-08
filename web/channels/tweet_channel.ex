defmodule Conflicted.TweetChannel do
  use Phoenix.Channel

  alias Conflicted.Repo
  alias Conflicted.Tweet

  def join("tweets:stream", _message, socket) do
    tweets = Conflicted.Repo.all(Conflicted.Tweet)
    {:ok, tweets, socket}
  end

  def join("tweets:" <> _private_room_id, _params, _socket) do
    {:error, %{reason: "unauthorized"}}
  end

  def handle_in("action", %{"type" => "LIKE_TWEET", "id" => id}, socket) do
    changeset =
      Tweet
      |> Repo.get!(id)
      |> Tweet.changeset(%{"likes" => tweet.likes+1})

    case Conflicted.Repo.update(changeset) do
      {:ok, tweet} ->
        broadcast!(socket, "state", tweet)
      {:error, changeset} ->
        IO.puts "SOMETHING WENT WRONG"
        IO.inspect changeset
    end

    {:noreply, socket}
  end
end
