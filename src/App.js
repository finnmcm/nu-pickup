import logo from './logo.svg';
import './App.css';
import './styles.css';
import { useState, useEffect } from 'react';
function Game(sport, title, location, date, time, creator, numTotalPlayers, players, description){
  this.sport= sport
  this.title = title
  this.location = location
  this.date = date
  this.time = time
  this.creator = creator
  this.numTotalPlayers = numTotalPlayers
  this.numPlayersNeeded = numTotalPlayers - players.length
  this.players = players
  this.description = description
  this.image = generateImage()

  function generateImage(){
    {/* get image for location*/}
  }

}
function NavBar() {
  return (
    <body>
      <header>
      <nav>
      <h1>NUPickup</h1>
      <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Profile</a></li>
            </ul>
            </nav>
            </header>
    </body>
  )
}
function GameCard(props){
  return (
  <div className="card">
      <h1>{props.sport}</h1>
      <h3><strong>Location:</strong> {props.location}</h3>
      <p><strong>Date:</strong> {props.date}</p>
      <p><strong>Time:</strong> {props.time}</p>
      <p><strong>{props.numTotalPlayers}</strong> Person Game - <strong>{props.numPlayersNeeded}</strong> Open Spots</p>
        <div style={{display: "inline-flex"}}>
            <p style={{marginRight: '5px'}}><strong>Who's Playing:</strong></p>
            {props.players.map(function(player, index){
              if(index == props.players.length - 1){
                return (
                  <div key={player.index}>
                  <p style={{marginLeft: '2px'}}>{player} </p>
                </div>
                )
              }
              else{
                return (
                  <div key={player.index}>
                  <p style={{marginLeft: '2px'}}>{player},  </p>
                </div>
                )
              }
            }
            )}
        </div>
      </div>
  )
}
function GameScrollView(props){
   {/* Edit this so that GameScrollView edits an array of games as props, and indexes each game as a separate game card
  fetching the necessary components */}

  return (
    <div className="grid-container">
      {props.currentGames.map(function(game, index){
        return (
          <button onClick={() => props.selectGame(index)}>
          <div key={game.index}>
            <GameCard sport={game.sport} location={game.location} date={game.date} time={game.time} numTotalPlayers={game.numTotalPlayers}
            players={game.players} numPlayersNeeded={game.numPlayersNeeded}></GameCard>
          </div>
          </button>
        )
      }
      )}
    </div>

  )
}
function GameInfoView(props){
  return (
  <section class="game-details">
  <img src={props.game.image} alt="Game Cover" class="cover-image"></img>
  <h2>{props.game.title}</h2>
  <p><strong>Created by:</strong> {props.game.creator}</p>
  <p class="description">
      {props.game.description}
  </p>
  <button className="join-btn">Join Game</button>
</section>
  )
}
const currentGames = [
  new Game("Basketball", "5v5 Easy runs at SPAC", "Henry Crown Sports Pavilion", "November 16", "8:00 PM", "John Doe"
  ,10, ["John", "Sally"], "Come play basketball at SPAC"),
  new Game("Volleyball", "6v6 comp runs at Blom", "Blom", "November 3", "7:30 PM", "Harry Doe"
  ,12, ["John", "Sally"], "Come play volleyball at BLOM"),
  new Game("Soccer", "World cup Tourney", "Green space behind Kemper", "November 9", "4:30 PM", "Sally Doe"
  ,20, ["Henry", "James"], "Come play soccer outside Kemper")
]
function App() {
  var [selectedGame, setGame] = useState(0);
  const selectGame = (index) => {
  setGame(index);
  console.log(index)
}
  return (
    <main>
    <NavBar></NavBar>
    <div className="container">
    <section className="scrollable-cards">
      {/* in the future this should pass an array of games to GameScrollVciew*/}
      <GameScrollView selectGame={selectGame} currentGames={currentGames}></GameScrollView>
      </section>
      <section class="game-details">
        <GameInfoView game={currentGames[selectedGame]}></GameInfoView>
        </section>
    </div>
    </main>
  );
}

export default App;
