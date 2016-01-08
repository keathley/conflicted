defmodule Conflicted.Repo.Migrations.CreateTweet do
  use Ecto.Migration

  def change do
    create table(:tweets) do
      add :author, :string
      add :content, :string
      add :source_url, :string
      add :image_url, :string

      timestamps
    end

  end
end
