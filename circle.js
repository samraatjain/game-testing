class Circle{
    constructor(x,y,r) {
     
        var options = {
           
            
            
           

        }
        
        this.x=x;
        this.y=y;
        this.r=r;

        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        
        World.add(world,this.body);
    }
    display()

    {
        push();
        translate(this.body.position.x, this.body.position.y);
       
    
            
			
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}