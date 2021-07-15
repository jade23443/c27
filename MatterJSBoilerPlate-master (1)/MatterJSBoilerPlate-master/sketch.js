
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var b1,b2,b3,b4,b5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    b1diameter=50;
	//Create the Bodies Here.
	b1=new bob(260,500,30);
	b2=new bob(320,500,30);
	b3=new bob(380,500,30);
	b4=new bob(440,500,30);
	b5=new bob(500,500,30);
	

	brick=new roof(400,200,400,50);

	rope1=new rope(b1.body,brick.body,-160,0);
	rope2=new rope(b2.body,brick.body,-80,0);
	rope3=new rope(b3.body,brick.body,0,0);
	rope4=new rope(b4.body,brick.body,80,0);
	rope5=new rope(b5.body,brick.body,160,0);
	Engine.run(engine);
  
}


function draw() {
  
  background("lightBlue");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  brick.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 32) {
	   Matter.Body.applyForce(b5.body,b5.body.position,{x:-75,y:+75});
	   Matter.Body.applyForce(b1.body,b1.body.position,{x:+75,y:-75});
	   }
	 }