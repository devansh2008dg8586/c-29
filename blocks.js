class Block{
    constructor(x,y,width,height){
        var options={
        isStatic:false,
        restitution:0,
        friction:1
        }
        this.body= Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body)
        this.width=width;
        this.height=height;

    }
    display(){
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("pink");
        stroke("yellow")
        rect(0,0,this.width,this.height);
        pop();
    }

}











