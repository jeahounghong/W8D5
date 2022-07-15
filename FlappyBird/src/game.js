import Level from './level';
import Bird from './bird';

export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
  }

  animate() {
    console.log(this);
    this.level.drawBackground(this.ctx)
    this.bird.drawBird(this.ctx)
    if (this.running) {
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  restart() {

    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions);
    this.play();
    //this.animate()//.bind(this);

  }
  
  play(){
    this.running = true;
    this.animate();
  }
}