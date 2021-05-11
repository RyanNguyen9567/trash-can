class Paper {
    constructor(x, y,r) {
      var options = {
          static:false,
          'restitution':0.3,
          'friction':0,
          'density':1.2
      }
    this.x=x;
		this.y=y;
		this.r=r
    this.image = loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, (this.r+10)/2, options)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("green");
      image(this.image,0,0,100,100)
      //ellipse(0, 0,this.r+20);
      pop();
    }
  };
  