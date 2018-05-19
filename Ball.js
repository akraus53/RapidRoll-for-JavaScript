function Ball()
{
    this.y = 200;
    this.x = 200;
    this.gravity = 1;

    this.show = function ()
    {
        fill(255);
        ellipse(this.x, this.y, 10, 10);
    };

    this.keyPressed = function ()
    {
        if (keyCode === LEFT_ARROW)
        {
            this.x = this.x - 1;
            if (this.x < 0) 
            {
                this.x = 0;
            }
        }
        else if (keyCode === RIGHT_ARROW)
        {
            this.x = this.x + 1;
            if (this.x > width - 10) {
                this.x = width - 10;
            }

        }
    };

    this.update = function () 
    {
        this.y += this.gravity;
    };

    this.onStep = function (step)
    {
    
        if(this.x<=(step.x + step.width) && this.x  >=step.x && (step.y === this.y + 5))
        {
    		if(step.isSpike)
    		{
    			console.log("Game over");
    			noLoop();

    		}
    		else
    		{
    			console.log("Score");
                ball.gravity=-1;
                if(this.x + 5>(step.x + step.width) ||
                    this.x - 5 <step.x)
                {
                    ball.gravity*=-1;
                }
    		}
    		return true;

        }
        return false;

    };
}










