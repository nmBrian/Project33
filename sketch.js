const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//background variable
var bg;

//platform variable
var platform;

//santa sprite
var santa, santaanimation;

//variable for the snow
var droplet = [];
var maxDroplet = 100;
var rand;

var sound, sound2;


 async function preload(){
  //load the background image
  bg = loadImage("bg.jpg");

  //loads tha background music
  sound = await loadSound("sound.wav");

  //load the santa sound
  sound2 = await loadSound("santa.wav");


  //loads the santa jumping animation
  santaanimation = await loadAnimation("png/Jump (1).png","png/Jump (2).png",
  "png/Jump (3).png","png/Jump (4).png",
  "png/Jump (5).png","png/Jump (6).png",
  "png/Jump (7).png","png/Jump (8).png",
  "png/Jump (9).png","png/Jump (10).png",
  "png/Jump (11).png","png/Jump (12).png",
  "png/Jump (13).png","png/Jump (14).png",
  "png/Jump (15).png","png/Jump (16).png",)
}



function setup() {
  var canvas = createCanvas(900,800);

  engine = Engine.create();
  world = engine.world;

  sound.play();
  sound.loop();

  
  // if(typeof sound2.loop === 'boolean')
  // {
  //   sound2.loop = true;
  // }
  // else
  // {
  //   sound2.addEventListener('ended', function(){
  //     this.currentTime = 0;
  //     this.play();
  //   }, false);
  // }
  sound2.play();
  sound2.loop();

  if(frameCount % 100 === 0){
    for(var i = 0; i< maxDroplet; i++){
      droplet.push(new Snow(random(0,900),random(0,300)));
    }
  }


  platform = new baseClass(450, height, 900, 20);


  //santa sprite
  santa = createSprite(450, 600);
  santa.addAnimation("jumping", santaanimation);
  santa.scale = 0.6;
  
}

function draw() {
  background(bg);  
  Engine.update(engine);

  platform.display();

  for(var i = 0; i<maxDroplet; i++){
    droplet[i].update();
    droplet[i].display();
    }
    
  drawSprites();
}