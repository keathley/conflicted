defmodule Conflicted.TweetTest do
  use Conflicted.ModelCase

  alias Conflicted.Tweet

  @valid_attrs %{author: "some content", content: "some content", image_url: "some content", source_url: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Tweet.changeset(%Tweet{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Tweet.changeset(%Tweet{}, @invalid_attrs)
    refute changeset.valid?
  end
end
