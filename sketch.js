const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world, paper1, ground, dustbin1; 
function setup() {
    createCanvas(1600,700);
    

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paper1 = new paper(700,670,50);
    ground = new Ground(800,700,1600,20);
    dustbin1 = new dustbin(1300,600, 150,150);
   
    

   
  
}

function draw() {
  
  Engine.update(engine);
  
  background(255);
  
 
    
  paper1.display();

  ground.display();

  dustbin1.display();
  

  
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 425,y: -420})
    }
  }
