function Ball()
{
  this.y=200;
  this.x=200;
  this.gravity=1;

  	this.show = function()
  	{
   		fill(255);
   		ellipse(this.x,this.y,20,20);
  	};

  	this.keyPressed= function()
	{
	 	if(keyCode===LEFT_ARROW)
	 	{
			this.x=this.x-6;
			if(this.x<0)
			{
				this.x=0;
			}
	 	}
	 	else if(keyCode===RIGHT_ARROW)
	 	{
			this.x=this.x+6;
			if(this.x>width-10)
			{
				this.x=width-10;
			}
		
	 	}
  	};

  	this.update = function() 
	{
		this.y+=this.gravity;

		if(this.y>height)
		{
			this.y=height;
			this.gravity=0;
		}
	}

    this.onStep = function( step)
    {
        if(this.x<=(step.x + step.width) && this.x >=step.x && (step.y - step.height == this.y || step.y - step.height == this.y -1))
        {
			if(step.isSpike)
			{
				console.log("Game over");
			}
			else
			{
				console.log("Ball on step");
			}
			return true;
        }
        else
		{
			return false;
		}
    }
}









