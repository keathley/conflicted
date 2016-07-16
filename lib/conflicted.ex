defmodule Conflicted do
  use Application

  # See http://elixir-lang.org/docs/stable/elixir/Application.html
  # for more information on OTP Applications
  def start(_type, _args) do
    import Supervisor.Spec, warn: false

    children = [
      # Start the endpoint when the application starts
      supervisor(Conflicted.Endpoint, []),
      # Start the Ecto repository
      worker(Conflicted.Repo, []),
      # Here you could define other workers and supervisors as children
      # worker(Task, [fn -> stream_task("elixir-lang") end], id: ElixirStreamer),
      worker(Task, [fn -> stream_task("elixirfriends,CodeStock,elixir-lang") end], id: ElixirFriendsStreamer),
      # worker(Task, [fn -> stream_task("CodeStock") end], id: CodeStockStreamer),
    ]

    # See http://elixir-lang.org/docs/stable/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Conflicted.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    Conflicted.Endpoint.config_change(changed, removed)
    :ok
  end

  defp stream_task(term) do
    Conflicted.TweetStreamer.stream(term)
    |> Enum.to_list
  end
end
