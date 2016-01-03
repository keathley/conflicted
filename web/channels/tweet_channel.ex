defmodule Conflicted.TweetChannel do
  use Phoenix.Channel

  def join("tweets:stream", _message, socket) do
    tweets = Conflicted.Repo.all(Conflicted.Tweet)
    {:ok, tweets, socket}
  end

  def join("tweets:" <> _private_room_id, _params, _socket) do
    {:error, %{reason: "unauthorized"}}
  end
end
