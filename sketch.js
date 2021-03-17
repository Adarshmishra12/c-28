
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
	tree=loadImage("images/tree.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

     
    
	stone=new Stone(100,460,23);
	
	mango1=new Mango1(600,290,34);
	mango2=new Mango1(855,325,35);
	mango3=new Mango1(670,260,35);
	mango4=new Mango1(730,200,35);
	mango5=new Mango1(710,320,36);
	mango6=new Mango1(825,250,35);
	mango7=new Mango1(880,170,33);
	mango8=new Mango1(600,290,34);
	mango9=new Mango1(940,220,34);
	mango10=new Mango1(980,305,34);

	attach=new Throw(stones.body,{x:100,y:465});

	tree=createSprite(775,368);
	tree.addImage(treeimg);
	tree.scale=0.42;

	boy=createSprite(160,550);
	boy.addImage(boyimg);
	boy.scale=0.125;

	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

rectMode(CENTER);
  background(230);
  fill("black");
  textSize(18);

  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  detectCollision(stones,mango6);
  detectCollision(stones,mango7);
  detectCollision(stones,mango8);
  detectCollision(stones,mango9);
  detectCollision(stones,mango10);

  drawSprites();

  
  tree.display();
  stnes.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  ground.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

function detectCollision(lstones,lmangoes){
	if(lstones.body.position.x-lmangoes.body.positionx<lmangoes.diametre+lstones.diametre
        &&lmangoes.body.position.x-lstones.body-position.x<lmango.diametre+lstones.diametre
		&&lmango.body.position.y-lstones.body.position.y<lmango.diametre+lstonesdiametre){
			Matter.Body.setStatic(lmango.body.body,false);
		}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		attach.Launch(stones.body);
	}
}