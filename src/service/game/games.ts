interface LobbyInterface {
  games: Map<string, unknown>;
}

class Lobby implements LobbyInterface {
  constructor(games: Array<any>) {
    games.forEach((game: any) => {
      this.games.set(game.id, game)
    });
  }

  games: Map<string, unknown> = new Map();

  get() {
    return this.games
  }
}

const lobby = new Lobby([
  { id: 1, name: 'First game', players: [] },
  { id: 2, name: 'Second game', players: [] }
])

export default lobby
