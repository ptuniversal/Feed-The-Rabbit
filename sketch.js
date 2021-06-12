var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var orange,orangeImg;
var banana,bananaImg

var edges

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("Orange.png");
  bananaImg = loadImage("bannana.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
  


}


function draw() {
  background(0);
    edges= createEdgeSprites();

    drawSprites();

  rabbit.collide(edges);

  
  if(keyDown("left")){
     rabbit.x-=3;
     }
  
  if(keyDown("right")){
     rabbit.x+=3;
     }
  
  if(frameCount%100===0){
  apple=createSprite(180,200,20,20);
  apple.addImage(appleImg);
  apple.scale=0.05;
  apple.velocityY=+2;
  apple.x=Math.round(random(50,350))
  if(apple.isTouching(rabbit)){
  apple.y=200;
  apple.x=200;
  }
  }
  if(frameCount%150===0){
  orange=createSprite(180,50,20,20);
  orange.addImage(orangeImg);
  orange.scale=0.05;
  orange.velocityY=+4;
  orange.x=Math.round(random(50,350))
  if(orange.isTouching(rabbit)){
  orange.y=200;
  orange.x=200;
  }
  }
  if(frameCount%50===0){
  banana=createSprite(180,150,20,20);
  banana.addImage(bananaImg);
  banana.scale=0.05;
  banana.velocityY=+3;
  banana.x=Math.round(random(50,350))
  if(banana.isTouching(rabbit)){
  banana.y=200;
  banana.x=200;
  }
  }


}