class Insaan {
    constructor(x,y){
    var options = {
        isStatic:true
    }
      this.body = Bodies.circle(x,y,45,options)
      this.width = 200;
      this.height = 200;
      this.Image = loadImage("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
      World.add(world,this.body)
    }
    display(){
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     imageMode(CENTER)
     rotate(angle)
     image(this.Image,190,300,this.width,this.height)
     pop();
    }
}