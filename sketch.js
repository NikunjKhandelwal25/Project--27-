
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);
background("white")

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  bobDiameter=100;

  bob1=new bob(300-bobDiameter*2,700,bobDiameter);
	bob2=new bob(400-bobDiameter,700,bobDiameter);
	bob3=new bob(500,700,bobDiameter);
	bob4=new bob(600+bobDiameter,700,bobDiameter);
	bob5=new bob(700+bobDiameter*2,700,bobDiameter);

roof= new roof(500,200,500,50)
fill("white")
var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1200,
    height: 700,
    wireframes: false
  }
});

rope1=new rope(bob1.body,roof.body,-bobDiameter*2, 0)

rope2=new rope(bob2.body,roof.body,-bobDiameter*1, 0)
rope3=new rope(bob3.body,roof.body,0, 0)
rope4=new rope(bob4.body,roof.body,bobDiameter*1, 0)
rope5=new rope(bob5.body,roof.body,bobDiameter*2, 0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
  if(keyCode===UP_ARROW){
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100})
 }
}



