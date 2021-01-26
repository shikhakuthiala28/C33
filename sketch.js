const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  Body= Matter.Body;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var gameState="play";
var particle, count=0;

function setup() {
  createCanvas(700,700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  fill("red");
  text("Score : "+score,20,30);

  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 200 ", 160, 550);
  text(" 200 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 200 ", 400, 550);
  text(" 200 ", 480, 550);
  text(" 500 ", 560, 550);
  text(" 500 ", 640, 550);
  

  Engine.update(engine);
  ground.display();
  
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
     
  }

   if(particle!=null)
   {
      particle.display();
       
       if (particle.body.position.y>660)
       {
             if (particle.body.position.x >10
                && particle.body.position.x< 150
                || particle.body.position.x>550
                && particle.body.position.x<690) 
             {
                 score=score+500;      
                 particle=null;
                 if ( count>= 5) gameState ="end";                          
             }


             else if (particle.body.position.x >150
                && particle.body.position.x < 270
                || particle.body.position.x>370
                && particle.body.position.x<500) 
             {
                   score = score + 200;
                   particle=null;
                   if ( count>= 5) gameState ="end";

             }
             else if (particle.body.position.x > 250
                && particle.body.position.x < 370 )
             {
                   score = score + 100;
                   particle=null;
                   if ( count>= 5)  gameState ="end";

             }      
             
       }
 
     }

    for (var k = 0; k < divisions.length; k++) {
     
        divisions[k].display();
    }
  }
  function keyPressed(){
     if(keyCode==32 && gameState!=="end"){
        count++;
        particle=new Particles(random(100,650), 10, 10, 10); 
     }
}

