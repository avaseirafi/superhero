const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var background;

var gameState = "launched";

function preload() {
//preload the images here
backgroundImage=loadImage("sprites/background.png")

}

function setup() {
  var canvas = createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600,600,1200,20);
  hero = new Hero(200,200,80,80);
  fly = new Fly(hero.body,{x:500,y:50});

}

function draw() {
  background(backgroundImage);
  ground.display();
  hero.display();
  fly.display();

}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
  }
}



