var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(300,300);
  ghost.addImage(ghostImg)
  ghost.scale = 0.3
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
    if(keyDown(LEFT_ARROW)){
      ghost.x = ghost.x - 3
      
    }
    if(keyDown(RIGHT_ARROW)){
      ghost.x = ghost.x + 3
    }
      if(keyDown(UP_ARROW)){
       ghost.velcityY = -5
      }
    ghost.velocityY += 0.7 
      if(ghost.y >= 600){
        background("black")
        text("Game Over :(",250,500)
        
      }
      drawSprites()
    }
  
  
  
  
  
    


