
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var ground;
var FoodGroup, obstacleGroup;
var score;



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  
  
 
}



function setup() {
  createCanvas(600,600);
  
  monkey = createSprite(50,465,10,10);
  monkey.addAnimation("monkey animation",monkey_running);
  monkey.scale = 0.1;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  

  
}


function draw() {
  background("green");
  
  ground = createSprite(610,500,1500,10);
  ground.velocityX = -10;
  
  monkey.collide(ground); 
  
  if(keyDown("space") && monkey.y > 456){
    monkey.velocityY = -10; 
  }
  
  monkey.velocityY = monkey.velocityY + 0.9;
  
  score = Math.ceil(frameCount/frameRate());
  spawnBanana();
  spawnObstacles();
  
  drawSprites();
  
  fill(51);
  text("SURVIVAL TIME:"+score,400,100);
  
}

function spawnBanana(){
  if(frameCount % 80 === 0){
    banana =          createSprite(610,Math.round(random(350,420)),10,10);
    banana.addImage("bana",bananaImage);
    banana.velocityX = -4;
    banana.scale = 0.1; 
    banana.lifetime = 160;
    FoodGroup.add(banana);
  }
}

function spawnObstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(610,480,10,10);
    obstacle.addImage("obstacleinlive",obstacleImage);
    obstacle.velocityX = -5;
    obstacle.scale = 0.1;
    obstacle.lifetime = 160;
    obstacleGroup.add(obstacle);
  }
}





