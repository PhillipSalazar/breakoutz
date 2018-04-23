var Howtoplay = {
  create: function(){
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
  howtoplayonpc = "For PC so anything that is text is clickable\n" +
                  "When you play the game sapce bar launch the ball\n" +
                  "Also the arrow key is where you move"


  var computerhtp = game.add.text(game.world.centerX, game.world.centerY/ 2, howtoplayonpc,  {
    font: "24px Arial",
    fill: "#000000",
    align: "center"
  });
  computerhtp.anchor.setTo(0.5,0.5);


  var aiplay = game.add.text(game.world.centerX, game.world.centerY/ 0.8, howtoplayonpc,  {
    font: "24px Arial",
    fill: "#000000",
    align: "center"
  });
  aiplay.anchor.setTo(0.5,0.5);

  menuz = game.add.text(game.world.centerX / 0.55, game.world.centerY / 10, "Menu!",  {
    font: "24px Arial",
    fill: "#000000",
    align: "center"
  });
  menuz.anchor.setTo(0.5,0.5);
  menuz.inputEnabled = true;
  menuz.events.onInputUp.add(this.gotoMenu, this);


},

gotoMenu : function() {
  game.state.start("Start");
}


}
