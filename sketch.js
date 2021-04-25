var bg, bgImg;
var cat, catImg, catWalk, catEnd;
var mouse, mouseImg, mouseCheese, mouseEnd;


function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catImg = loadAnimation("cat1.png");
    catHappy = loadAnimation("cat4.png");
    mouseImg = loadAnimation("mouse1.png");
    mouseEnd = loadAnimation("mouse2.png");
}

function setup(){
    createCanvas(1000,800);
    bg = createSprite(500, 400, 1000, 800);
    bg.addImage(bgImg);
    //create tom and jerry sprites here
    cat = createSprite(800, 600, 1000, 1000);
    cat.addAnimation("cat1", catImg);
    cat.addAnimation("cat4", catHappy);
    cat.scale = 0.2;
    mouse = createSprite(150, 600, 1000, 1000);
    mouse.addAnimation("mouse1", mouseImg);
    mouse.addAnimation("mouse2", mouseEnd);
    mouse.scale = 0.1;
}

function draw() {

    background(255);
    cat.velocityX = 0;

    //Write condition here to evalute if tom and jerry collide

    if (mouse.isTouching(cat)) {
        //movingRect.shapeColor = "red";
        //fixedRect.shapeColor = "red";
        cat.changeAnimation("cat4", catHappy);
        mouse.changeAnimation("mouse2", mouseEnd);
    }

   

    mouse.collide(cat);
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyDown("space")){
    mouse.velocityX = 8;
  }
}