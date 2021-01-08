
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bobObject1,rope1,roofObject;
var bobObject2,rope2;
var bobObject3,rope3;
var bobObject4,rope4;
var bobObject5,rope5;
var bobDiameter;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
 
	engine = Engine.create();
  world = engine.world;
  bobDiameter=40;
	bobObject1= new bob(280,620,40);
  roofObject= new roof(280,400,300,20);
  //console.log("objectscreated");
  rope1= new rope(bobObject1.body,roofObject.body,0,0);
  bobObject2= new bob(320,620,40);
  rope2= new rope(bobObject2.body,roofObject.body,bobDiameter*1,0);
  bobObject3= new bob(360,620,40);
  rope3= new rope(bobObject3.body,roofObject.body,bobDiameter*2,0);
  bobObject4= new bob(240,620,40);
  rope4= new rope(bobObject4.body,roofObject.body,-bobDiameter*1,0);
  bobObject5= new bob(200,620,40);
  rope5= new rope(bobObject5.body,roofObject.body,-bobDiameter*2,0);
  //console.log("objectscreated");
 // console.log("rope1");
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  bobObject1.display();
  roofObject.display();
  rope1.display();
  bobObject2.display();
  rope2.display();
  bobObject3.display();
  rope3.display();
  bobObject4.display();
  rope4.display();
  bobObject5.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===LEFT_ARROW){
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
  }
}


