window.addEventListener('load', function(){
  game = new Game
  player1 = new Player
  player2 = new Player
  game.initialize( player1, player2 )
})

function Game(){
}

Game.prototype = {
  initialize: function( player1, player2 ){
    this.player1 =  player1
    this.player2 = player2
    console.log( this.player1, this.player2 )
  }
}

function Player(){
  this.position = 0
}

Player.prototype = {
  updatePosition: function(){
    this.position += 1
  }
}


