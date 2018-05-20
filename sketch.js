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
    ball.checkStep(steps[i]);
  }

  checkGameOver();
}

function reSketch() {
  redraw();
}

function genRandomSteps() {
  // Generate a new Spike or Step
  if (Math.random() >= 0.5) {
    addObject(true); // Add Spike
  } else {
    addObject(false); // Add Bar
  }

}

function addObject(isSpike) {
  let leftY;

  // Calculate height of new Spike
  if (steps.length === 0) {
    leftY = SPACE;
  } else {
    leftY = ((steps.length * SPACE) + SPACE);
  }

  let leftX = random(width - (WIDTH * 2));

  // Create a new Object with these attributes
  steps.push(new Steps(leftX, leftY, isSpike));
}

function checkGameOver() {
  // If ball is outside of Window
  if (ball.y > height || ball.y < 0) {
    console.log("Game over");
    noLoop();
  }
}