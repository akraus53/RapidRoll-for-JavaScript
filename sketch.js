let ball;
let SPACE = 50; // Spacing between Steps
let steps = [];

function setup() {
  createCanvas(350, 600);
  ball = new Ball();
  let button = createButton("Play Again");
  button.mouseClicked(reSketch);
}

function draw() {
  background(0);

  if (keyIsDown(LEFT_ARROW)) {
    ball.left();
  }

  if (keyIsDown(RIGHT_ARROW)) {
    ball.right();
  }

  ball.update();
  ball.show();

  // Every 10 frames generate new Bar/Spike
  if (frameCount % 10 === 0) {
    genRandomSteps();
  }

  // Update/Draw every Step
  for (let i = 0; i < steps.length; i++) {
    steps[i].show();
    steps[i].update();
    ball.onStep(steps[i]);
  }

  gameOver();

}

function reSketch() {

  redraw();
}

function genRandomSteps() {
    addSipke();
  // Generate a new Spike or Step
  if (Math.random() >= 0.5) {
  } else {
    addBar();
  }

}

function addSipke() {
  var ly;
  if (steps.length === 0) {
    ly = SPACE;
  } else {
    ly = ((steps.length * SPACE) + SPACE);
  }
  var lx = int(random(width - (WIDTH * 2)));
  steps.push(new Steps(lx, ly, true));
}

function addBar() {
  var ly;
  if (steps.length === 0) {
    ly = SPACE;
  } else {
    ly = ((steps.length * SPACE) + SPACE);
  }
  var lx = int(random(width - WIDTH));
  steps.push(new Steps(lx, ly, false));
}

function gameOver() {

  if (ball.y > height || ball.y < 0) {
    console.log("Game over");
    noLoop();
  }
}