const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var building11,building12,building13,building14;
var building21,building22,building23,building24;
var building31,building32,building33,building34;
var ball1,slingshot;
var backgroundImg,platform;
var  slingshot,monster1;
function preload() {

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20);
    building11 = new BaseClass(400,459,80,100);
    building12 = new BaseClass(400,439,80,100);
    building13 = new BaseClass(400,419,80,100);
    building14 = new BaseClass(400,399,80,100);

    building21 = new BaseClass(500,459,80,100);
    building22 = new BaseClass(500,439,80,100);
    building23 = new BaseClass(500,419,80,100);
    building24 = new BaseClass(500,399,80,100);

    building31 = new BaseClass(600,459,80,100);
    building32 = new BaseClass(600,439,80,100);
    building33 = new BaseClass(600,419,80,100);
    building34 = new BaseClass(600,399,80,100);

    
    ball1 = new ball(120,100,150,150);
    slingshot = new SlingShot(ball1.body,{x:120,y:150});
    monster1 = new monster(800,300,120,120);
}

function draw(){
   
    background("lightblue");
    Engine.update(engine);
        ground.display();
        fill("green");
        building11.display();
        building21.display();
        building31.display();
        fill("yellow");
        building12.display();
        building22.display();
        building32.display();
        fill("red");
        building13.display();
        building23.display();
        building33.display();
        fill("pink")
        building14.display();
        building24.display();
        building34.display();
        fill("black");
        ball1.display();
        slingshot.display();
        monster1.display();
        mouseDragged();
function mouseDragged(){
        Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
    }







// async function gettime(){
// var fetchapi =await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
// var response1= await fetchapi.json() 
// // console.log(response1.datetime);
// var hrs = response1.datetime.slice(11,13)
// console.log(hrs)
// if(hrs>=06&&hrs<=17){
// bgimg1="sprites/bg.png"
// }
// else{
//     bgimg1="sprites/bg2.jpg"
// }
// backgroundImg=loadImage(bgimg1);
     }