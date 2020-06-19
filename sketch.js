var c1,c1img;
var e1img,e2img,e3img,trackimg;
var score=0;

function preload(){
  c1img = loadImage( "images/car1.png");
  e1img = loadImage( "images/car2.png");
  e2img = loadImage( "images/car3.png");
  e3img = loadImage( "images/car4.png");
  trackimg = loadImage( "images/track.png");
  
}

function setup() {
  createCanvas(400, 400);
  c1 = createSprite(150,350,10,10);
  c1.addImage("c1image",c1img);
  carsGroup = new Group();
  
   ground = createSprite(200,200,400,400);
  ground.addImage("ground",trackimg);
  ground.y = ground.height /2;
  ground.velocityY = 5;
  ground.velocityY = (6 + 3*score/100);
  c1.depth = ground.depth+1;
  
}

function draw() {
  background(255);
  c1.x = mouseX;
  
  stroke(10);
   fill("yellow")
  ellipse(150,350,160,160);
  
  
  console.log(score);
  score = score + Math.round(frameCount/60);
    ground.velocityY = (6+3*score/100);
  
  if (ground.y >330){
     ground.y =200;
   }
  spawnCars();
  drawSprites();
  
  textSize(14);
textFont("Georgia");
stroke("black");
fill("yellow");
  text("Score:"+ score, 400,50);
  
  if(carsGroup.isTouching(c1)){
        background(0);
     c1.hide();
    ground.hide();
    textSize(14);
textFont("Georgia");
stroke("black");
fill("yellow");
    text("YOU LOST",200,200)
    }
}

function spawnCars() {
  if(frameCount % 90 === 0) {
    var car = createSprite(random(100,350),0,10,10);
    car.velocityY = (6+3*score/100);
    
    
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: car.addImage(e1img);
              break;
      case 2: car.addImage(e2img);
              break;
      case 3: car.addImage(e3img);
              break;
      default: break;
    }
               
    car.lifetime = 100;
    //add each obstacle to the group
    carsGroup.add(car);
  }
  
}

function reset(){
  gameOver.visible = false;
  restart.visible = false;
  
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
 
  score = 0;
 
  
}
