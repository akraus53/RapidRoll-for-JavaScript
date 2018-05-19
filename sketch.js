var ball;
var SPACE=50;
var steps = [];

function setup() 
{
  createCanvas(350,600);
  ball=new Ball();
  var button=createButton("Play Again");
  button.mouseClicked(reSketch);
}

function draw()
{
  	background(0);
    ball.keyPressed();
    ball.update();
    ball.show();

    if(frameCount % 10 ===0)//check  the below code***
  	{
  		genRandomSteps();

  	}

  	for (var i = 0; i < steps.length; i++)
  	{
  		steps[i].show();
  		steps[i].update();
        ball.onStep(steps[i]);
  	}

    gameOver();

}

function reSketch()
{

	redraw();
}

function genRandomSteps()
{

	var random_boolean = Math.random() >= 0.5;
	if(random_boolean)
	{
		addSipke();
	}
	else
	{
		addBar();
	}

}

function addSipke() 
{
	var ly;
	if(steps.length===0)
	{
		ly=SPACE;
	}
	else
	{
		ly=((steps.length * SPACE) + SPACE);
	}
	var lx= int(random(width-(WIDTH* 2 )));
	steps.push(new Steps(lx,ly,true));
}

function addBar()
{
	var ly;
	if(steps.length===0)
	{
		ly=SPACE;
	}
	else
	{
		ly=((steps.length * SPACE) + SPACE);
	}
	var lx= int(random(width - WIDTH));
	steps.push(new Steps(lx,ly,false));
}

function gameOver()
{

    if(ball.y>height|| ball.y <0)
	{
		console.log("Game over");
		noLoop();
	}
}


