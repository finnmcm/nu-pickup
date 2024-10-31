import logo from './logo.svg';
import './App.css';
import './styles.css';
import { useState, useEffect } from 'react';
function Game(sport, title, location, date, startTime, endTime, creator, numTotalPlayers, players, description, experienceLevel){
  this.sport= sport
  this.title = title
  this.location = location
  this.date = date
  this.startTime = startTime
  this.endTime = endTime
  this.creator = creator
  this.numTotalPlayers = numTotalPlayers
  this.numPlayersNeeded = numTotalPlayers - players.length
  this.players = players
  this.description = description
  this.experienceLevel = experienceLevel
  this.image = generateImage()

  function generateImage(){
    {/* get image for location*/}
  }

}
function NavBar() {
  return (
    <body>
      <header class="header-main">
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
  <div className="card" style={{}}>
      <h1>{props.sport}</h1>
      <h3><strong>Location:</strong> {props.location}</h3>
      <p><strong>Date:</strong> {props.date}</p>
      <p><strong>Time:</strong> {props.startTime} - {props.endTime}</p>
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
  const [color, changeColor] = useState("#FFFFF")

  const setColor = (tag, selectedGame) => {
    if(tag===selectedGame){
      changeColor("#4E2A84")
    }
    else{
      changeColor("#FFFFF")
    }
  }
  return (
    <div className="grid-container">
      {props.currentGames.map(function(game, index){
        return (
          <button onClick={() => props.selectGame(index)}>
         <div key={index}>
            <GameCard sport={game.sport} location={game.location} date={game.date} time={game.time} numTotalPlayers={game.numTotalPlayers}
            players={game.players} numPlayersNeeded={game.numPlayersNeeded} tag={index} selectedGame={props.selectedGame}></GameCard>
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
    <body>
          <div>
      <header style={{color: "#4E2A84"}}>
            <h1 style={{fontSize: 35}}>Pickup Basketball Game - {props.game.location}</h1>
            <p style={{color: "#333"}}><strong>Created by: {props.game.creator}</strong></p>
        </header>
        <section class="event-details" style={{paddingBottom: "10px"}}>
            <h2>Game Details</h2>
            <p style={{color: "#4E2A84"}} ><strong>{props.game.description}</strong></p>
            <div class="info">
                <div><strong>Date: </strong>{props.game.date}</div>
                <div><strong>Time: </strong> {props.game.startTime} - {props.game.endTime}</div>
                <div><strong>Location: </strong>{props.game.location}</div>
                <div><strong>Experience Level: </strong> {props.game.experienceLevel}</div>
            </div>
        </section>
        <button>
          Join Game
        </button>
        </div>
  </body>
  )
}
const currentGames = [
  new Game("Basketball", "5v5 Easy runs at SPAC", "Henry Crown Sports Pavilion", "November 16", "8:00 PM", "10:00PM", "John Doe"
  ,10, ["John", "Sally"], "Come play basketball at SPAC", "Intermediate"),
  new Game("Volleyball", "6v6 comp runs at Blom", "Blom", "November 3", "7:30 PM", "10:00PM", "Harry Doe"
  ,12, ["John", "Sally"], "Come play volleyball at BLOM", "High-Level"),
  new Game("Soccer", "World cup Tourney", "Green space behind Kemper", "November 9", "4:30 PM", "10:00PM", "Sally Doe"
  ,20, ["Henry", "James"], "Come play soccer outside Kemper", "Beginner-Friendly")
]
function App() {
  var [selectedGame, setGame] = useState(0);
  const selectGame = (index) => {
  setGame(index);
  }
  return (
    <main>
    <NavBar></NavBar>
    <div className="container">
    <section className="scrollable-cards">
      {/* in the future this should pass an array of games to GameScrollVciew*/}
      <GameScrollView selectGame={selectGame} currentGames={currentGames} selectedGame={selectedGame}></GameScrollView>
      </section>
      <section class="game-details">
        <GameInfoView game={currentGames[selectedGame]}></GameInfoView>
        </section>
    </div>
    </main>
  );
  }

export default App;
