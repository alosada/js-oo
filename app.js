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
    this.player1.number = 1
    this.player2 = player2
    this.player2.number = 2
    this.bindEventListeners()
  },

  bindEventListeners: function(){
    document.addEventListener( 'keyup', this.updatePlayer )
  },

  updatePlayer: function(){
    console.log( 'derp' )
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

function View(){
}

View.prototype = {
  renderPlayer: function( player ){
    var position = player.position
    var track = document.getElementById( player.number )
    debugger
  }
}

