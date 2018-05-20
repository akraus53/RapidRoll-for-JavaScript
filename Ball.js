function Ball() {
  this.y = 200;
  this.x = 200;
  this.gravity = 1;
  this.speed = 2;

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 10, 10);
  };

  this.left = function() {
    if (!(this.x < 0)) {
      this.x = this.x - this.speed;
    }
  }

  this.right = function() {
    if (!(this.x > width - 10)) {
      this.x = this.x + this.speed;
    }
  }

  this.update = function() {
    this.y += this.gravity;
  };

  this.checkStep = function(step) {
    // Check if the ball hits the step
    if (this.x <= (step.x + step.width) && this.x >= step.x && (step.y === this.y + 5)) {
      // If it's a spike --> Game over
      if (step.isSpike) {
        console.log("Game over");
        noLoop();
        // if it's a Step, all is fine
      } else {
        console.log("Score");
        ball.gravity = -1;
        if (this.x + 5 > (step.x + step.width) ||
          this.x - 5 < step.x) {
          ball.gravity *= -1;
        }
      }
      return true;

    }
    return false;

  };
}