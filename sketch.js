
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, mangoObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;


function preload(){
  boy=loadImage("images/boy.png");
  tree=loadImage("images/tree.png");
  mango=loadImage("images/mango.png");
  stone=loadImage("images/stone.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 

	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
  mango12=new mango(900,160,40);
  
  attach= new Throw(stones.body,{x:100,y:465});

  treeObj=new tree(1050,580);

  tree= createSprite(775,368);
  tree.addImg(treeimg);
  tree.scale= 0.42;

  boy= createSprite(160, 550);
  boy= addImg(boyimg);
  boy.scale=0,125;

	groundObject=new ground(width/2,600,width,20);

	Engine.run(engine);
}

function draw() {

  background(230);
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  fill("black");

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  stoneObj.display();
  groundObject.display();
  
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);
}
 
    function mouseDragged(){
      Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
    }
      
    function mouseReleased(){
      attach.fly();
    }

  function detectollision(lstone,lmango){
       
      if(lstones.body.position.x- lmango.body.position.x <lmango.diameter + lstones.diameter
        && lmango.body.position.x - lstone.body.position.x<lmango.diameter + lstone.diameter
        && lstones.body.position.y- lmango.body.position.y <lmango.diameter + lstones.diameter
        && lmango.body.position.y - lstone.body.position.y<lmango.diameter + lstone.diameter){
  	  Matter.Body.setStatic(lmango.body,false);
    }
  }

       function keyPressed(){
         if(keyCode===32){
           Matter.Body.setPosition(stones.body,{x:100 , y:465});
           attach.Launch(stones.body);
         }
       }
  