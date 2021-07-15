class bob{

    constructor(x,y,d){
    
        var options ={
            restitution:0.8,
            friction:1,
            density:1,
         }
    this.d=d;
    this.x=x;
    this.y=y;
    
    this.body=Bodies.circle(x,y,d/2,options);
    World.add(world,this.body);
    }
     display(){
         push();
         ellipseMode(RADIUS);
         fill("red");
         ellipse(this.body.position.x,this.body.position.y,this.d,this.d);
         pop();
     }
    };