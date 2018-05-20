const WIDTH = 70;
const HEIGHT = 10;

function Step(x, y, bs) {
  this.x = x;
  this.y = y;
  this.width = WIDTH;
  this.height = HEIGHT;
  this.isSpike = bs;
  this.speed = 1;

  this.show = function() {
    if (!this.isSpike) {
      fill(255);
    } else {
      fill(255, 0, 0);
    }

    rect(this.x, this.y, this.width, this.height);
  };

  this.update = function() {
    this.y -= this.speed;
  };

}