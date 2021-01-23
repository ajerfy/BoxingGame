var gameState = 0;
var punch = -10;
var bg1, bg2;
var b1,b2;
var storeBg, storeBg2;
var storeb1, storeb2;
var bg;
var health = 100;
var PFist;
var PFistStore;





function preload(){
  storeBg = loadImage("images/VSbg.png")
  storeBg2 = loadImage("images/BoxingRing.jpg")
  storeb1 = loadImage("images/Boxer.png")
  storeb2 = loadImage("images/Boxer1.png")
  PFistStore = loadImage("images/PFist.png")

}

function setup() {
  createCanvas(600,300);

  


 



}

function draw() {
  background(0); 
  




  if (gameState == 0){
     bg = createSprite(300, 150, 600, 300);
    bg.scale = 1.4;  
    bg.addImage(storeBg);
    boxer1 = createSprite(100,200,120,10)
    pc = createSprite(500,200,120,10)
    boxer1.addImage(storeb2);
    pc.addImage(storeb1)
    pc.scale = 0.6;
    
    
  }

  if(keyDown("space")){
    gameState = 1
  }

  if (gameState === 1){
    bg.addImage(storeBg2);
    pc.visible = false;
    boxer1.x = 300;
    boxer1.y= 200;
    camera.x = boxer1.x;
    
    if(keyIsDown("right")){
 boxer1.x-=20;
    }

    if(keyIsDown("left")){
     boxer1.x+=20;
    }

    if (keyWentDown("w")){
      
      PFist = createSprite(camera.x, camera.y);
      PFist.addImage(PFistStore);
        health -= 10;
        PFist.visible = true;
      }
    
      if (keyWentUp("w")){
        PFist.destroy()
        // PFist.x = 800;
        // PFist.visible = false;
      }


  }

  




  drawSprites();
  fill("black");
  text(mouseX + "," + mouseY, mouseX, mouseY)

 if(gameState===0){
  fill("black")
    textSize(25)
    text("Press 'space' to start the game", 124,20)
 }
}

