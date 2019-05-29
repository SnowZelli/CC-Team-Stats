const team = {
    _players: [
      {
        firstName: 'Phillip',
        lastName: 'Fry',
        age: 21
      },
      {
        firstName: 'Turanga',
        lastName: 'Leela',
        age: 23
      },
      {
        firstName: 'Bender',
        lastName: 'Rodriguez',
        age: 21
      }
    ],
    _games: [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      },
      {
        opponent: 'Cardinals',
        teamPoints: 42,
        opponentPoints: 27
      },
      {
        opponent: 'Crimson Tide',
        teamPoints: 42,
        opponentPoints: 27
      },
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      }
      this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      }
      this.games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs','Bunny',76);
  
  console.log(team._players);
  
  team.addGame('Steelers', 45, 27);
  team.addGame('Patriots', 32, 44);
  team.addGame('Panthers', 13, 7);
  
  console.log(team._games);  