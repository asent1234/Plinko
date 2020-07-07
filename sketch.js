const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
function setup() {
  engine = Engine.create();
  world = engine.world;
  canvasx = 580
  divisions = []
  plinkos = []
  particles = []
  canvasy = 800
  createCanvas(canvasx,canvasy);
  Particle1 = new Plinko(200,200)
  ground = new Ground(canvasx/2,canvasy-10, width, 30, "white")
  divisionHeight = 300
  for(var k = 10; k <= width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2,10, divisionHeight, "white"))
  }
  for(var j = 40; j <= width; j = j + 80){
    plinkos.push(new Plinko(j, 150))
    //console.log("hello")
  }
  for(var j = 15; j <= width; j = j + 80){
    
    plinkos.push(new Plinko(j, 250))
    //console.log("hello")
  }
  for(var j = 65; j <= width; j = j + 80){
    plinkos.push(new Plinko(j, 350))
    //console.log("hello")
  }
  for(var j = 40; j <= width; j = j + 80){
    plinkos.push(new Plinko(j, 450))
    //console.log("hello")
  }
}

function draw() {
  Engine.update(engine);
  background("black");
  Particle1.display();
  ground.display();
  

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10,10))
  }
  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
    //console.log("bye")
  }
  for(var j = 0; j < particles.length; j++){
    particles[j].display();
    //console.log("bye")
  }
  //divisions.display();
}