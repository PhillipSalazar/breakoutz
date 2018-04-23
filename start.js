
Start = {

create : function(){
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

var title =  game.add.text(game.world.centerX -10, game.world.centerY -100, "BreakOutz",  {
    font: "72px Arial",
    fill: "#000000",
    align: "center"
  });
  title.anchor.setTo(0.5,0.5);
  var playGameText =  game.add.text(game.world.centerX/ 3, game.world.centerY, "play Game!",{
    font: '24px Arial',
    fill: '#0000000',
    align: "center"
  });
  playGameText.anchor.setTo(0.5,0.5);

playGameText.inputEnabled = true;
playGameText.events.onInputDown.add(this.playGame, this);
playGameText.events.onInputOver.add(this.over, this);
playGameText.events.onInputOut.add(this.out, this);

var aiPlayText =  game.add.text(game.world.centerX/ 0.65, game.world.centerY, "Let AI play!",{
  font: '24px Arial',
  fill: '#0000000',
  align: "center"
});
aiPlayText.anchor.setTo(0.5,0.5);
//tween = game.add.tween(aiPlayText.scale).to( {x:1.5, y:1.5 }, 2000, "Linear", true, 0 , -1);
/*tween.yoyo(true, 0);
if (flag === true){
  tween.resume();
//  flag = !flag;
} else {
  tween.pause();
}*/
aiPlayText.inputEnabled = true;
aiPlayText.events.onInputDown.add(this.aiGame, this);
aiPlayText.events.onInputOver.add(this.over, this);
aiPlayText.events.onInputOut.add(this.out, this);


howtoplaymenu = game.add.text(game.world.centerX / 0.55, game.world.centerY / 10, "How to Play!",  {
  font: "24px Arial",
  fill: "#000000",
  align: "center"
});
howtoplaymenu.anchor.setTo(0.5,0.5);
howtoplaymenu.inputEnabled = true;
howtoplaymenu.events.onInputUp.add(this.howToPlay, this);
},

playGame : function() {
  game.state.start('Game');
},
aiGame : function(){
game.state.start('Aiplay');
},

over: function(objectz){
  // Create our tween. This will fade the sprite to alpha 1 over the duration of 2 seconds
   tween = game.add.tween(objectz.scale).to( { x:1.5 , y:1.5 }, 2000, "Linear", true, 0, -1);
//  tween.resume(true);
  //  And this tells it to yoyo, i.e. fade back to zero again before repeating.
  //  The 3000 tells it to wait for 3 seconds before starting the fade back.
  tween.yoyo(true, 0);

//tween.stop();
 //flag = !flag;

//tween.pause();
},

out: function(objectz) {
  //tween = game.add.tween(objectz.scale).from( { x:1.5 , y:1.5 }, 2000, "Linear", true, 0, -1);
//  tween.yoyo(true, 0);
  tween.stop();
//  flag = false;
},

howToPlay : function() {
  game.state.start('Howtoplay');
},

render: function() {

}




}
