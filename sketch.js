var engine,world;
var visible = 255
function preload(){
  plr = loadImage("5.png")
  background1=loadImage("figmQY.gif")
 // background1_0 = createImg("figmQY.gif")
doorImage = loadImage("door.png")
}

function setup(){
  createCanvas(1450,770)
  engine = Matter.Engine.create()
  world = engine.world
  boundary1 = new Box(1450,370,20,700)
  boundary2 = new Box(1450,670,20,70)
  boundary3 = new Box(290,5,1450,20)
  boundary4 = new Box(5,370,20,770)
  boundary5 = new Box(750,770,1450,20)
  wall1 = new Box(1147,440,175,20)
  wall2 = new Box(1021,575,20,70)
  wall3 = new Box(1055,410, 20,170)
  wall4 = new Box(1220,535,20,170 )
  wall5 = new Box(980, 320, 270, 20)
  wall6 = new Box(880, 500, 270, 20)
  wall7 = new Box(720,180,20,150 )
  wall8 = new Box(655,180,20,240 )
  wall9 = new Box(507,400, 20,380)
  wall10 = new Box(253,150,175,20)
  //wall11 = new Box(339,90,20,70)
  wall12 = new Box(340,260,20,170)
  wall13 = new Box(435,185,270,20)
  wall14 = new Box(510,137,20,75)
  wall15 = new Box(153, 450, 75,20)
  wall16 = new Box(253, 365,20,230)
  wall20 = new Box(342,400,310,20)
  wall18 = new Box(577,485,200,20)
  wall21 = new Box(380,120,20,130)
  wall22 = new Box(720,500,20,50)
  wall23 = new Box(120,135,50,20)
  plr1 = new Plr(100,90)
  enemy1=new Plr(215,100 ,50,30)
  enemy1.image=loadImage("enemy.png")
  enemy2=new Plr(315,200 ,50,30)
  enemy2.image = loadImage("enemy.png")
  enemy3=new Plr(715,400 ,50,30)
  enemy3.image=loadImage("enemy.png")
  enemy4=new Plr(1000,300 ,50,30)
  enemy4.image=loadImage("enemy.png")
}

function draw(){
 // background1_0.position(50,50)
 //background1_0.hide()
  background(background1)
  image(doorImage,100,75,30,50)
  image(doorImage,100,75,30,50)

  Matter.Engine.update(engine)
  //display box1,box2
boundary1.display()
  boundary2.display()
  rectMode(CENTER)
  boundary3.display()
  boundary4.display()
  boundary5.display()
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();
 // wall11.display();
  wall12.display();
  wall13.display();
  wall14.display()
  wall15.display()
  wall16.display()
  wall23.display()
  wall20.display()
  wall18.display()
  wall21.display()
  wall22.display()
  plr1.display()
  enemy1.display();
  enemy2.display();
  enemy3.display();
  enemy4.display();

  detectCollision(plr1,enemy1)
  detectCollision(plr1,enemy2)
  detectCollision(plr1,enemy3)
  detectCollision(plr1,enemy4)
  // if(plr1.body.position.x === enemy1.body.position.x-5 &&plr1.body.position.y === enemy1.body.position.y-5 ){
  //   World.remove(world,plr1.body)
  // }
}

function keyPressed(){
  if(keyCode == 32){
    Matter.Body.applyForce(plr1.body,plr1.body.position,{x:0.004,y:-0.007})
  }
  
  if(keyCode == UP_ARROW){
    Matter.Body.applyForce(plr1.body,plr1.body.position,{x:0.001,y:-0.02})
  }
  
    if(keyCode == RIGHT_ARROW){
    Matter.Body.applyForce(plr1.body,plr1.body.position,{x:0.009,y:-0.001})
  }
  
    if(keyCode == LEFT_ARROW){
    Matter.Body.applyForce(plr1.body,plr1.body.position,{x:-0.004,y:-0.001 })
  }
}

function detectCollision(ienemy){

}

