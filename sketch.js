let ball;
let SPACE=50;
let steps = [];
let score = 0;
let player;

let database;
let ref;
let data;

function setup() 
{
  createCanvas(350,600);
  ball=new Ball();
  player=name();
  let button=createButton("Play Again");
  button.mouseClicked(reloadPage);

    // var config = {
    //     apiKey: "AIzaSyBmejIO7Oxq-4JR6Mx1vDwZzxRoNZPEWkY",
    //     authDomain: "rapid-roll-c7e9e.firebaseapp.com",
    //     databaseURL: "https://rapid-roll-c7e9e.firebaseio.com",
    //     projectId: "rapid-roll-c7e9e",
    //     storageBucket: "",
    //     messagingSenderId: "469826688525"
    // };
    // firebase.initializeApp(config);
    // console.log(firebase);

    // database = firebase.database();
    // ref = database.ref('Scores');

}

function draw()
{
  	background(0);

    // if (keyIsDown(LEFT_ARROW))
    // {
    //     ball.left();
    // }

    // if (keyIsDown(RIGHT_ARROW))
    // {
    //     ball.right();
    // }

    
    ball.update();
    ball.show();
    

    if(frameCount % 10 ===0)
  	{
  		genRandomSteps();

  	}

  	for (let i = 0; i < steps.length; i++)
  	{
  		steps[i].show();
  		steps[i].update();
      ball.onStep(steps[i]);
  	}

    checkGameOver();


}

function name()
{
  let person = prompt("Please enter your name", "");
	return person;

}

function reloadPage()
{
    window.location.reload();
}

function genRandomSteps()
{

    if (Math.random() >= 0.5)
    {
        addObject(true); // Add Spike
    }
    else
	{
		addObject(false); // Add Bar
    }

    ball.think(steps);

}

function addObject(isSpike)
{
	let leftY;
    if (steps.length === 0) {
        leftY = SPACE;
    } else {
        leftY = ((steps.length * SPACE) + SPACE);
    }

    let leftX = random(width - (WIDTH * 2));

    // Create a new Object with these attributes
    steps.push(new Steps(leftX, leftY, isSpike));
}

function checkGameOver()
{

    if(ball.y>height|| ball.y <0)
	{
		console.log("Game over");
		console.log(score);
		noLoop();
		//submitData();
	}
}

function submitData()
{
    data= {
        name: player,
        scores: score
    };
    ref.push(data);
}


