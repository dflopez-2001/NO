
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var BAD;
var NOGOAWAY;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	NOGOAWAY = loadImage("paper.png");
	BAD = createSprite(150,150,45,45);
	BAD.addImage(NOGOAWAY);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  BAD.x = mouseX
  BAD.y = mouseY

  groundObject.display();
  dustbinObj.display();

}

