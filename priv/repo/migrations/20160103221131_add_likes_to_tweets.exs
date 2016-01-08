defmodule Conflicted.Repo.Migrations.AddLikesToTweets do
  use Ecto.Migration

  def change do
    alter table(:tweets) do
      add :likes, :integer, default: 0
    end
  end
end
