var canvas;
var music;
var block1,block2,block3,block4,block5;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

   

    //create 4 different surfaces
    block1=createSprite(70,580,130,10);
    block1.shapeColor='pink';
    
    block2=createSprite(230,580,130,10);
    block2.shapeColor='red';
  
    block3=createSprite(380,580,130,10);
    block3.shapeColor='purple';
  
    block4=createSprite(540,580,130,10);
    block4.shapeColor='blue';

    block5=createSprite(700,580,130,10);
    block5.shapeColor='orange';


     
    //create box sprite and give velocity
    box=createSprite(random(20,750),10,20,20);
    box.shapeColor='white';
    box.velocityX=4;
    box.velocityY=5;
    
   edges=createEdgeSprites();
   
}

function draw() {
    background('green');
    
  
     box.bounceOff(edges);
    //add condition to check if box touching surface and make it box
 
    if(block1.isTouching(box)&& box.bounceOff(block1)){
        box.shapeColor = 'pink';
      //  box.velocityX=0;
      music.play();

    }

    if(block2.isTouching(box)&& box.bounceOff(block2)){
        box.shapeColor = 'red';
      //  box.velocityX=0;
      music.stop();
    }

    if(block3.isTouching(box)&& box.bounceOff(block3)){
        box.shapeColor = 'purple';
      //  box.velocityX=0;
      music.play();
    }

    if(block4.isTouching(box)&& box.bounceOff(block4)){
        box.shapeColor = 'blue';
      //  box.velocityX=0;
      music.stop();
    }

    if(block5.isTouching(box)&& box.bounceOff(block5)){
        box.shapeColor = 'orange';
      //  box.velocityX=0;
      music.play();
    }
    drawSprites();
   
}


