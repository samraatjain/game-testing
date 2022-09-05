const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var packageSprite,packageIMG;
var packageBody,ground;
var circle;



function preload()
{
  
}

function setup() {
	createCanvas(1280, 565);
  createSprite(400, 200, 50, 50);
  speed=random(-30, -50)
  position=random(20, 510)
  frameRate(30);
  

  bullet=createSprite(1300,200,20,10);
  bullet.shapeColor="white";


	engine = Engine.create();
	world = engine.world;


	
	
  circle = createSprite(100,280,30, 50); 

	 ground = new Ground(1000, 555, 2500, 20);
	 World.add(world, ground);
   ground1 = new Ground(1000, 10, 2500, 20);
	 World.add(world, ground1);
   ground2 = new Ground(10, 282, 20, 526);
	 World.add(world, ground2);

   
	 



	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("black");  
  bullet.velocityX=speed;
 bullet.y=position;
  ground.display();
  ground1.display();
  ground2.display();
  
  
  circle.display();
  bullet.display();


  
  
  
 
}
function mouseDragged(){
  Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}






