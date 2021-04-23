var fixedRect, movingRect, car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(200, 200, 40, 40);
  car.shapeColor = "purple";
  car.velocityX = 8;
  console.log(car.position);
  wall = createSprite(1000, 200, 40, 150);
  wall.shapeColor = "grey";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  if(isTouching(car,wall)){
    wall.shapeColor = "pink";
    car.shapeColor = "pink";
    //car.velocityX = 0;
  }
  else{
    wall.shapeColor = "grey";
    car.shapeColor = "purple";
  }
  bounceOff(car,wall);
if(car.x<180){
  car.velocityX = (-1)* car.velocityX;
}
  drawSprites();
}


function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true;
}
else {
  return false;
}
}

function bounceOff(object1,object2){
if(object1.x - object2.x < object2.width/2 + object1.width/2
  && object2.x - object1.x < object2.width/2 + object1.width/2){
    car.velocityX = (-1)* car.velocityX;
  }
  if( object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
   car.velocityY = (-1)* car.velocityY;
    }
}