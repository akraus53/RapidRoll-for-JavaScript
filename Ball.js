
function Ball()
{
    this.y = 200;
    this.x = 200;
    this.gravity = 1;
    this.speed=2;

    this.brain=new NeuralNetwork(4,2,2);


    this.think=function(steps)
    {
        let inputs=[];
        
        inputs[0]=this.x/width;
        inputs[1]=steps[0].x/width;
        inputs[2]=steps[0].y/height;
        inputs[3]=(steps[0].width+steps[0].x)/width;
        
        let output=this.brain.predict(inputs);
        if(output>0.5)
        {
            this.left();
        }
        else
        {
            this.right();
        }
    }

    this.show = function ()
    {
        fill(255);
        ellipse(this.x, this.y, 10, 10);
    };

    this.left=function ()
    {
        if(!(this.x<0))
        {
            this.x= this.x - this.speed;
        }

    };

    this.right=function ()
    {
        if(!(this.x>width - 10))
        {
            this.x= this.x + this.speed;
        }

    };

    this.update = function () 
    {
        this.y += this.gravity;
    };

    this.onStep = function(step) {
        // Check if the ball hits the step
        if (this.x <= (step.x + step.width) && this.x >= step.x && (step.y === this.y + 5)) {
            // If it's a spike --> Game over
            if (step.isSpike) {
                console.log("Game over");
                console.log("Your score is: "+ score);
                noLoop();
                //submitData();
                // if it's a Step, all is fine
            } else {
                score++;
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










