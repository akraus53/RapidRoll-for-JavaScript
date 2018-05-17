var ball;
var SPACE=50;
var steps = [];

function setup() 
{
  createCanvas(350,600);
  ball = new Ball();

  genRandomSteps();
  actionsHandler();

}

function draw() 
{
  	background(0);
	ball.keyPressed();
	ball.update();
    ball.show();

    if(frameCount % 1==0)
  	{
  		genRandomSteps();
  	}

  	for (var i = 0; i < steps.length; i++)
  	{
  		steps[i].show();
  		steps[i].update();
  	}
  
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

function actionsHandler()
{
    for (step in steps)
    {
		if(ball.onStep(step))
		{
			ball.gravity=0;
		}
		step.y -=1 ;
    }

    if(ball.y>HEIGHT|| ball.y <0)
	{
		console.log("Game over");
	}


}


