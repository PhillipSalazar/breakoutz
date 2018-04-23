//var height = window.innerHeight;
//var width = window.innerWidth;



var Game = {



preload: function() {
  game.load.image('paddle','assets/board.png');
  game.load.image('ball','assets/ball.png');
  game.load.image('ping','assets/ping.png');
},

create : function() {
//  game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
  //  game.scale.pageAlignHorizontally = Phaser.ScaleManager.SHOW_ALL;
  //  game.scale.pageAlignVertically = Phaser.ScaleManager.SHOW_ALL;
  //  game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.checkCollision.down = false;
    score = 0;
    var color = game.rnd.integerInRange(1, 4);
    if (color === 1)
    {
      game.stage.backgroundColor = '#3399ff';
  } else if (color === 2) {
      game.stage.backgroundColor = '#FF8C00';

  } else if (color === 3 ){

      game.stage.backgroundColor = '#99ff33';
  } else if (color === 4 ) {

    game.stage.backgroundColor = '#ff66cc';
  }

  score_counter = game.add.text(game.world.centerX / 10, game.world.centerY / 10, score,  {
    font: "42px Arial",
    fill: "#000000",
    align: "center"
  });
  menuz = game.add.text(game.world.centerX / 0.55, game.world.centerY / 10, "Menu!",  {
    font: "24px Arial",
    fill: "#000000",
    align: "center"
  });
  menuz.anchor.setTo(0.5,0.5);
  menuz.inputEnabled = true;
  menuz.events.onInputUp.add(this.gotoMenu, this);

  // trying to create a pause menu
/*
  pausemenu = game.add.text(game.world.centerX / 0.55, game.world.centerY / 10, "Pause!",  {
    font: "24px Arial",
    fill: "#000000",
    align: "center"
  });
  pausemenu.anchor.setTo(0.5,0.5);
  pausemenu.inputEnabled = true;
  pausemenu.events.onInputUp.add(this.pausez, this);


  unpausemenu = game.add.text(game.world.centerX / 0.55, game.world.centerY / 10 + 25, "",  {
    font: "24px Arial",
    fill: "#000000",
    align: "center"
  });
  unpausemenu.anchor.setTo(0.5,0.5);
  unpausemenu.inputEnabled = true;
  unpausemenu.events.onInputUp.add(this.unpausez, this);
*/
    player = game.add.sprite(450,700,'paddle');
    game.physics.arcade.enable(player);
    // player.body.bounce.set(0.8);
    //player.body.immovable = true;
    player.body.collideWorldBounds = true;
    player.body.immovable = true;
    //player.anchor.setTo(0.5,0.5);
    // The ball and its properties.
    ball = game.add.sprite(player.x -100, player.y - 70, 'ball');
    game.physics.arcade.enable(ball);
    ball.scale.setTo(0.75,0.75);
    ball.body.collideWorldBounds = true;
    ball.body.bounce.set(1);



  // ping group
    groupz = game.add.group();
    groupz.enableBody = true;
    groupz.physicsBodyType = Phaser.Physics.ARCADE;
    // for loop for generating the pings,
    var shape = 1 //game.rnd.integerInRange(1,2);


    if (shape === 1){
    for (var i = 0; i < 5; i++) {
      for(var j = 0; j < 5; j++) {
    ping = groupz.create(120 * i + 300, 75 * j + 50, 'ping');
    //game.physics.arcade.enable(ping);
    ping.enableBody = true
    ping.physicsBodyType = Phaser.Physics.ARCADE;
    ping.body.bounce.set(1);
    ping.body.immovable = true;
    ping.scale.setTo(0.75,0.75);
    }
  }
}
// different types of shape for thingy.
// end of for loops.
//  console.log(shape);
//}else if (shape === 2){
//  for (var i = 0; i < 5; i++) {
  //  for(var j = 0; j < 5; j++) {
/*  ping = groupz.create(120, 50 * Math.sin(3), 'ping');
  ping = groupz.create(500 , 50 * 500, 'ping');
  ping = groupz.create(120 + 300 , 50 * Math.sin(3), 'ping');
  //game.physics.arcade.enable(ping);
  ping.enableBody = true
  ping.physicsBodyType = Phaser.Physics.ARCADE;
  ping.body.bounce.set(1);
  ping.body.immovable = true;
  ping.scale.setTo(0.75,0.75);
  *///}
//} // end of for loops.
//console.log(shape);
//}

  //groupz.body.bounce.set(1);
  //groupz.body.immovable = true;

    // input for game
    game.input.enabled = true;
    button = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    button.onDown.add(function() {

      // ball random direction and speed
      /*
      var speed = game.rnd.integer(1, 2, 3);
      if (speed === 1){
      //speedx = 400;
      //speedy = -200;
      ball.body.velocity.set(400, -100);
    } else if (speed === 2) {
      //speedx = 400;
      //speedy = -400;
      ball.body.velocity.set(400, -400);
    } else if (speed === 3 ){
    //  speedx = 400;
    //  speedy = -100
    ball.body.velocity.set(400, -100);;
    }
    */
      ball.body.velocity.set(-400, -200);
    }, this);
    cursors = game.input.keyboard.createCursorKeys();
    game.input.gamepad.start();

// To listen to buttons from a specific pad listen directly on that pad game.input.gamepad.padX, where X = pad 1-4
pad1 = game.input.gamepad.pad1;
},

update : function(){
  game.physics.arcade.collide(player, ball);
//  game.physics.arcade.collide(ball, groupz);
  game.physics.arcade.collide(ball, groupz, this.hitz, null, this);

  if (game.input.gamepad.supported && game.input.gamepad.active && pad1.connected)
   {
    //   indicator.animations.frame = 0;
   }
   else
   {
       //indicator.animations.frame = 1;
   }


   // player current velocity
   player.body.velocity.x = 0;
   player.body.velocity.y = 0;

   // input for player
  if (cursors.left.isDown || pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1){
      player.body.velocity.x = -600;
  }else if (cursors.right.isDown || pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1){
    player.body.velocity.x = 600;
  }


  if (ball.body.velocity.y === 0 ){
    ball.x = player.x + 100;
  //  player.y - 70;
} else if (button.isDow) {}

if (ball.y > 720){
  ball.kill();
  game.state.restart();
  //console.log('hello');
}
// input for ball to spart
if (pad1.justPressed(Phaser.Gamepad.XBOX360_B)) {
  ball.body.velocity.set(200,200);
}

if(score === 25) {
//  game.state.restart();
var   win_banner = game.add.text(game.world.centerX, game.world.centerY -100, "you won!\nClick to go to Menu",  {
    font: "72px Arial",
    fill: "#000000",
    align: "center"
  });
  win_banner.anchor.setTo(0.5,0.5);
  win_banner.inputEnabled = true;
  win_banner.events.onInputDown.add(this.restartGame, this);
  ball.kill();
}

},

hitz: function(ball, ping) {
  //ball.body.bounce.set(1);
  ping.destroy();
  score += 1;
  score_counter.text = score;
//  console.log(score);
},

restartGame: function(item) {
  game.state.start('Start');
},
unpausez : function(){
  game.state.resumed();
 //game.gameResumed();
 //game.paused = false;
 pausemenu.text = "Pause!"
 unpausemenu.text = "";
 console.log("meni");
},

pausez : function(){


  unpausemenu.text = "Unpause!"
  pausemenu.text = "";
  game.state.pauseUpdate();
  //game.gamePaused();
  //game.paused = true;
  console.log("lolz");
  /*
  if (game.paused){
  game.paused = false;
} else {
  game.paused = true;
}
*/

},
gotoMenu : function(){
game.state.start("Start");
},

render: function(){

  //game.debug.spriteInfo(player,50,50);
  //game.debug.spriteInfo(ball,500,50);
//  game.debug.body(player);
  //game.debug.body(ball);
//  game.debug.body(ping);
}


}
