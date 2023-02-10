var gameState = "menu";

function setup() {
  createCanvas(windowWidth,windowHeight);

  //menu = new Menu;
  play = new Classic_1x1;
}

function draw() {  
  background("#1f0441");
  drawSprites()
  //play.Play();
  //play.Play();

  if(gameState == "play"){
    if(keyDown(RIGHT_ARROW)){
      Classic_1x1.player1.x = Classic_1x1.player1.x + 5;
    }
  }
  

  
 

  
}