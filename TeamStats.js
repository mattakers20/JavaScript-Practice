const team = {
  _players: [
    {firstName: 'Tom', lastName: 'Brady', age: 47}, 
    {firstName: 'Joe', lastName: 'Montana', age: 68},
    {firstName: 'Peyton', lastName: 'Manning', age: 48}
  ],
  _games: [
    {opponent: 'NY Giants', teamPoints: 24, opponentPoints: 14}, 
    {opponent: 'Atlanta Falcons', teamPoints: 17, opponentPoints: 21}, 
    {opponent: 'Carolina Panthers', teamPoints: 35, opponentPoints: 10}
  ], 

  get players(){
    return this._players; 
  }, 

  get games(){
    return this._games; 
  }, 

  addPlayer(newFirstName, newLastName, newAge){
    this._players.push({firstName: newFirstName, lastName: newLastName, age: newAge}); 
  }, 

  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    this._games.push({opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints});
  }
}; 

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players);

team.addGame('Titans', 100, 98);
console.log(team._games); 


