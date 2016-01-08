defmodule Conflicted.Tweet do
  use Conflicted.Web, :model

  schema "tweets" do
    field :author, :string
    field :content, :string
    field :source_url, :string
    field :image_url, :string
    field :likes, :integer, default: 0

    timestamps
  end

  @required_fields ~w(author content source_url image_url)
  @optional_fields ~w(likes)

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
  end
end

defimpl Poison.Encoder, for: Conflicted.Tweet do
  def encode(tweet, _opts) do
    tweet
    |> Map.from_struct
    |> Map.delete(:__meta__)
    |> Poison.encode!
  end
end
