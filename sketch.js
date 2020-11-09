
  const Engine=Matter.Engine;
  const World=Matter.World;
  const Bodies=Matter.Bodies;

  var particles = [];
  var balls = [];
  var division = [];

  var divisionHeight = 300;

  function setup(){
    createCanvas(480,760);

    engine=Engine.create();
    world=engine.world;

    // boundaries
    bottom=new Ground(240,755,480,10);
    up=new Ground(240,5,480,10);
    left=new Ground(5,380,10,760);
    right=new Ground(475,380,10,760);


    //console.log(division);
   // console.log(division);
  }

  function draw(){

    background(0);

    bottom.display();
    left.display();
    right.display();
    up.display();


    for(var k =  0; k <=width; k=k+80 ){
        division.push(new Division(k,height-divisionHeight/2,5,divisionHeight));
    }

    for(var k = 0; k < division.length;k++){
        division[k].display();
    }

    ///  plinkos1
    for(var k =  40; k <=width; k=k+50 ){
      balls.push(new Plinko(k,75));
    }

    for(var k = 0; k < balls.length;k++){
      balls[k].display();
    }

    ///  plinkos2
    for(var k =  50; k <=width; k=k+50 ){
      balls.push(new Plinko(k,145));
    }

    for(var k = 0; k < balls.length;k++){
      balls[k].display();
    }

    ///  plinkos3
   for(var k =  40; k <=width; k=k+50 ){
     balls.push(new Plinko(k,215));
    }
    
    for(var k = 0; k < balls.length;k++){
      balls[k].display();
    }

    ///  plinkos3
    for(var k =  50; k <=width; k=k+50 ){
      balls.push(new Plinko(k,285));
     }
     
     for(var k = 0; k < balls.length;k++){
       balls[k].display();
     }

    ///  plinko4
    for(var k =  40; k <=width; k=k+50 ){
      balls.push(new Plinko(k,355));
     }
     
     for(var k = 0; k < balls.length;k++){
       balls[k].display();
     }

   /*  ball = new Particle(100,10);
     ball.display();
     Matter.Body.setStatic(ball.body,false);
     */

     /// making the particles here 
     if(frameCount%5===0){
       particles.push(new Particle(random(width/2-10,width/2+10),10));
      }

      for(var k = 0; k < particles.length;k++){
        particles[k].display();

     }

  }