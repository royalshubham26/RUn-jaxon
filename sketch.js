var runnerImg, pathImg, path, left_boundary,right_boundary, 

function preload(){
runnerImg=loadAnimation("runner1.png","runner2.png");
pathImg=loadImage("path.png");

}

function setup(){
  createCanvas( 400,400);
 path=createSprite(200,200);
path.addimage(PathImg);
path.velocityY=4;
path.scale=1.2;
path.y=path.height/30;
runner=createSprite(180,340,50,170);
runner.addAnimation("runner1.png",runnerImg);

left_boundary=createSprite(0,300,100,600);
right_boundary=createSprite(390,300,80,600);
left_boundary.visible=false
right_boundary.visible=false
}

function draw() {
  background(0);
  path.velocityY=5;
  runner.x=world.mousex
  if(path.y>400) {
    path.y=height/2
  }
runner.collide(left_boundary);
runner.collide(right_boundary);
edges=createEdgeSprites()
runner.collide(edges[3])
drawSprites();
}
