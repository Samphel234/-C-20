var square1
var square2

function setup() {
  createCanvas(800,400);
  square1=createSprite(400, 200, 50, 50);
  square2=createSprite(400,300,50,50);
}


function draw() {
  background("lime");
  square1.x=mouseX
  square1.y=mouseY
  console.log(square1.x-square2.x);
  console.log(square1.width/2 + square2.width/2);
 if(square1.x-square2.x < square1.width/2 + square2.width/2 &&
  square2.x-square1.x < square1.width/2 + square2.width/2  &&
  square1.y-square2.y < square1.width/2 + square2.width/2 &&
  square2.y-square1.y < square1.width/2 + square2.width/2 )
 {
  square1.shapeColor="red"
  square2.shapeColor="red"
 }
 else{
  square1.shapeColor="blue"
  square2.shapeColor="blue"
 }
  drawSprites();
}