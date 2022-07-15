
export default class Bird {
    constructor(dimensions){
      this.dimensions = dimensions;
      this.position = {x:dimensions.width/3, y: dimensions.height/2}
      this.velocity = 0;
    }
  
    drawBird(ctx){
        this.move()
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.position.x-15,this.position.y-20, 30,40);
    }

    move(){
        this.position.y += this.velocity;
        this.velocity += 0.5;
    }

    flap(){
        this.velocity = -8;
    }

}