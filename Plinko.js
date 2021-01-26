class Plinko {

    constructor(x,y){

        var options={
            
            isStatic:true,
            friction:0,
            restitution:1
        }

        this.body=Bodies.circle(x,y,10,options);
        this.radius=10;

        World.add(world,this.body);
    }

    display(){

            var pos=this.body.position;
            var angle= this.body.angle;
            push();
            rotate(angle)      ;
            translate (pos.x,pos.y);
            fill("white");
            ellipseMode(RADIUS);
            ellipse(0,0,this.radius,this.radius);
            pop();           
            
        
        
    }

}