class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
            
        }
        this.slingshot1=loadImage("sprites/sling1.png");
        this.slingshot2=loadImage("sprites/sling2.png");
        this.slingshot3=loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            if(pointA.x<220){
            strokeWeight(5);
            stroke(48,22,8);
            line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
            image(this.slingshot3,pointA.x-30,pointA.y-10,10,30);
            }
            else{
                strokeWeight(2);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+20,pointA.y,pointB.x+30,pointB.y-3);
            image(this.slingshot3,pointA.x+25,pointA.y-10,10,30);
            }
            image(this.slingshot1,200,20);
            image(this.slingshot2,170,20);
            pop();
        }
    }
    
}