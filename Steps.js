var WIDTH=70;
var HEIGHT=20;

function Steps(x,y,bs) 
{
	this.x=x;
	this.y=y;
	this.width=WIDTH;
	this.height=HEIGHT;
	this.isSpike=bs;
	this.speed=2;

	this.show = function() 
	{
		if(!this.isSpike)
		{
			fill(255);
		}
		else
		{
			fill(255,0,0);
		}
		rect(this.x,this.y,this.width,this.height);
	};

	this.update = function() 
	{
		this.y -= this.speed;
	};

}

function getWidth()
{
	return WIDTH;
}

