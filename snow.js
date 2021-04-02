class Snow{
    constructor(x ,y){
        var options = {
            'friction' : 0.1,
            'restitution' : 0.1
            
        }
        this.snow = Bodies.circle(x , y, 7, options);
        this.radius =7;      
        this.image = loadImage("snow4.webp");                 
        World.add(world, this.snow);

    }

    update(){
        if(this.snow.position.y > 760){
            Matter.Body.setPosition(this.snow , {x: random(20, 780) , y:random(10, 200)})
        }
    }

    display(){
        //fill(234, 234, 234);
        push();
        translate(this.snow.position.x, this.snow.position.y);
        
        // ellipseMode(CENTER);
        // ellipse(this.snow.position.x ,this.snow.position.y, this.radius, this.radius );

        imageMode(CENTER);
        image(this.image, this.snow.position.x, this.snow.position.y, 40, 40);
        pop();
    }
}