var catImg1 ;
var mouseImg1;
var catImg2;
var mouseImg2;
var catImg3;
var mouseImg3;
var catImg4;
var mouseImg4;
var gardenImg;
function preload() {
    //load the images here
    catImg1 = loadImage("cat1.png");
    mouseImg1 = loadImage("mouse1.png"); 
    catImg2 = loadImage("cat2.png");
    mouseImg2 = loadImage("mouse2.png"); 
    catImg3 = loadImage("cat3.png");
    mouseImg3 = loadImage("mouse3.png"); 
    catImg4 = loadImage("cat4.png");
    mouseImg4 = loadImage("mouse4.png"); 
    gardenImg = loadImage("garden.png")
}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   tom = createSprite(200,200,500,500)
   tom.addAnimation(catImg1)
   Jerry = createSprite(100,100,200,200)
   Jerry.addAnimation(mouseImg2)

}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.isTouching(Jerry)){
    changeAnimation(catImg2)
    changeAnimation(mouseImg)
    
    }
    drawSprites();



function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
   mouse.addAnimation(mouseImg2);
   mouse.changeAnimation(mouseImg2);
   mouse.frameDelay = 25;
  }

} 
