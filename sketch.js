var ball1,ball2;
function setup() {
  createCanvas(1200,800);
  ball1=createSprite(200, 200, 50, 50);
  ball1.shapeColor="green";
  ball1.debug=true;
  ball2=createSprite(400,200,80,30);
  ball2.shapeColor="green";
  ball2.debug=true;
}

function draw() {
  background(0,0,0);  
  ball2.x=World.mouseX;
  ball2.y=World.mouseY;
  if((ball2.x-ball1.x<ball1.width/2+ball2.width/2) && (ball1.x-ball2.x<ball1.width/2+ball2.width/2) && (ball2.y-ball1.y<ball1.height/2+ball2.height/2) && (ball1.y-ball2.y<ball1.height/2+ball2.height/2) ){
    ball1.shapeColor="red";
    ball2.shapeColor="red";
  }else{
    ball1.shapeColor="green";
    ball2.shapeColor="green";
  }
  console.log(ball1.width/2+ball2.width/2);
  drawSprites();
}
