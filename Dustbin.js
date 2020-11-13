class Dustbin {
    constructor(x, y, width,height ) {
      var options = {
          'isStatic': true,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.dustbinImg = loadImage('dustbingreen.png');
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      image(this.dustbinImg,540,425);
      push();
      translate(pos.x, pos.y);
      pop();
    }
  }