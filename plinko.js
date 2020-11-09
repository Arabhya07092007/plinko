class Plinko{
    constructor(x,y){

        var options ={
            setStatic:true
        }

        this.body = Bodies.circle(x,y,15,options);
        World.add(world,this.body);
    }

    display(){

        var pos=this.body.position;
        ellipseMode(CENTER);
        fill("white")
        ellipse(pos.x,pos.y,15,15)
    }
}