class Particle{
    constructor(x,y){

        var options ={
            setStatic:false,
            restitution:0.4
        }

        this.body = Bodies.circle(x,y,12,options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }

    display(){

        var pos=this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0,0,12,12);
        pop();
    }
}