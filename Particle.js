class Particle extends BaseClass {
  constructor(x,y){
    super(x,y,25,25);
    this.randomnum = Math.round(random(0, 255))
    
    //this.image = loadImage("/ball.png");
    //this.smokeImage = loadImage("sprites/smoke.png");
    this.colorset =["red", "green", "blue","orange","","",];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    fill(this.randomnum)
    ellipse(this.body.position.x, this.body.position.y, 25, 25)
    super.display();
}
}