const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;

var bobObj1,bobObj2,bobObj3,bobObj4,bobObj4

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

bobObj1=new Bob(300,350,50);
bobObj2=new Bob(350,350,50);
bobObj3=new Bob(400,350,50);
bobObj4=new Bob(450,350,50);
bobObj5=new Bob(500,350,50);

  ground1 = new Ground(400,100,300,40);

  sling1= new rope(bobObj1.body,ground1.body,-50*2,0);
  sling2= new rope(bobObj2.body,ground1.body,-25*2,0);
  sling3= new rope(bobObj3.body,ground1.body,-0*2,0);
  sling4= new rope(bobObj4.body,ground1.body,25*2,0);
  sling5= new rope(bobObj5.body,ground1.body,50*2,0);
  
	Engine.run(engine);
  
}


function draw() {
  background("lightgrey");

	
  rectMode(CENTER);
  Engine.update(engine);
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
 
  ground1.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  

  keyPressed();
  drawSprites ();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-5,y:-10}); } 
} 


