const Engine = Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var ground1,ground2,engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28;
var ball;
var joint;
//var polygonImg;

// function preload() {
// polygonImg=loadImage("polygon.png")
// }

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  ground1=new Ground(300,300,300,20);
  ground2=new Ground(600,180,300,20);
  box1=new Box(300,270,45,39);
	box2=new Box(300,260,45,39);
	box3=new Box(300,250,45,39);
	box4=new Box(300,240,45,39);
	box5=new Box(255,260,45,39);
	box6=new Box(255,250,45,39);
	box7=new Box(255,240,45,39);
	box8=new Box(345,260,45,39);
	box9=new Box(345,250,45,39);
	box10=new Box(345,240,45,39);
	box11=new Box(210,250,45,39);
	box12=new Box(210,240,45,39);
	box13=new Box(390,250,45,39);
	box14=new Box(390,240,45,39);
	box15=new Box(600,60,45,39);
	box16=new Box(600,70,45,39);
	box17=new Box(600,80,45,39);
	box18=new Box(600,90,45,39);
 	box19=new Box(555,70,45,39);
  box20=new Box(555,80,45,39);
  box21=new Box(555,90,45,39);
  box22=new Box(645,70,45,39);
  box23=new Box(645,80,45,39);
  box24=new Box(645,90,45,39);
  box25=new Box(510,80,45,39);
  box26=new Box(510,90,45,39);
  box27=new Box(690,80,45,39);
  box28=new Box(690,90,45,39);
  ball=new Polygon(50,200,20);
  joint=new Shooter(ball.body,{x:100,y:200});
}

function draw() {
  background(0);
  Engine.update(engine);
  //imgMode(CENTER);
  //image(polygonImg,polygon.position.x,position.position.y,40,40);
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  ball.display();
  joint.display();
}