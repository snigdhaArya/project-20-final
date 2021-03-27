var tom,tomImage,tom_collided,tom_running;
var jerry,jerryImage,jerry_collided,jerry_running;
var garden,gardenImage;

function preload() {
    //load the images here
    tomImage=loadAnimation("images/cat1.png");
    tom_running=loadAnimation("images/cat2.png","images/cat3.png");
    tom_collided=loadAnimation("images/cat4.png");
    jerryImage=loadAnimation("images/mouse1.png");
    jerry_running=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry_collided=loadAnimation("images/mouse4.png")
    gardenImage=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
   
   
    //create tom and jerry sprites here
     tom=createSprite(700,600,40,40);
     tom.addAnimation(tomImage);
     tom.scale=0.2;

     jerry=createSprite(100,600,40,40);
     jerry.addAnimation(jerryImage);
     jerry.scale=0.15;

}

function draw() {
    text(mouseX + ','+mouseY,10,45)

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
    //  if(tom.x =jerry.x < (tom.width=jerry.width)/2){
    //      tom.addAnimation("tom_collided",tom_collided);
    //    tom.velocityX=0;
    //    tom.x=300;
    //    tom.scale=0.2;
    //    tom.changeAnimation("tom_collided");
    //    jerry.addAnimation("jerry_collided",jerry_collided);
    //    jerry.scale=0.15;
    //    jerry.changeAnimation("jerry_collided");
    //  }
   
     
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      tom.velocityX=-5;
      tom.addAnimation("cat_running",tom_running);
      tom.changeAnimation("tom_running");
      jerry.addAnimation("jerry_running",jerry_running);
      jerry.frameDelay = 25;
      jerry.changeAnimation("jerry_running");
  }

}
