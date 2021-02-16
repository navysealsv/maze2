class Enemy {
    // prop, fun
     
    constructor(x,y,diametre){
      var opt ={restitution:0.5}
      this.diametre=diametre
      this.body = Matter.Bodies.circle(x,y,diametre,opt)
      Matter.World.add(world, this.body)
      this.image = loadImage("enemy.png")
    }
    
    display(){
      strokeWeight(0.4)
     push()
   imageMode(CENTER)   ;
     translate(this.body.position.x,this.body.position.y) ;
 
      image(this.image,0,0,50,40)
      pop()
    }
  }