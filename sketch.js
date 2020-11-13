
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1, box2, box3;
var crumpledBall;
var groundObject;

function setup() {
	createCanvas(850, windowHeight);
	engine = Engine.create();
	world = engine.world;

	groundObject = new Ground(420,height - 20,950,20);

	box1 = new Dustbin(700,height - 35,150,20);

	box2 = new Dustbin(620,height - 75,20,100);
	box3 = new Dustbin(780,height - 75,20,100);

	crumpledBall = new Paper(200,200,70);
     
	Engine.run(engine);
  
}


function draw() {
  background("silver");

  Engine.update(engine);

  crumpledBall.display();
  groundObject.display();

  box1.display();
  box2.display();
  box3.display();
  
}

function keyPressed()
{
	if(keyCode == UP_ARROW)
	{
      Matter.Body.applyForce(crumpledBall.body, crumpledBall.body.position, {x:55,y:-65});
	}
}
  