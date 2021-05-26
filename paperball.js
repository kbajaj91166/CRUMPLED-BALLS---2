class Paper {
    constructor(x,y,r){
      var options={
          isStatic:false,
          restitution:0.8,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r=r;
      World.add(world,this.body)
      this.image=loadImage("paper.png");
    }

    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill("yellow");
      image(this.image,0,0,50,50);
      pop();
    
    }
}