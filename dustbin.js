class Bin {
    constructor(x, y, width, height) {
        var options = {
            
            'friction':1.0,
            'density':1.0
        }
        this.Bbody = Bodies.rectangle(x, y, width, height, options);
        this.Lbody=Bodies.rectangle(500, 480, width, height, options);
        this.Rbody=Bodies.rectangle(500, 480, width, height, options);
        this.width = width;
        this.height = height;

        this.lwidth=10
        this.rwidth=10

        this.lheight=100
        this.rheight=100
        
        World.add(world, this.Bbody);
        World.add(world, this.Lbody);
        World.add(world, this.Rbody);

        this.image=loadImage("dustbingreen.png")
      }
      display(){
        var Bpos=this.Bbody.position;
        var Lpos=this.Lbody.position;
        var Rpos=this.Rbody.position;
     
        push();
        translate(Bpos.x, Bpos.y);
        rotate(this.Bbody.angle);
        imageMode(CENTER);
        strokeWeight(4);
        stroke("brown");
        fill(255);
        image(this.image,0, 0, this.width, this.height);
        pop();


        
      }
}