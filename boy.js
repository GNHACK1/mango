class Boy {
     constructor(x,y,width,height){
        var options = {
            isStatic = true 
        }
        this.body = Bodies.rectangle(x,y,width,height)
        this.image = loadImage("boy.js");
        this.width = width
        this.height = height


     }
     display(){
        var pos = this.body.position;
        imageMode(CENTER)
        image(this.image, 0, 0, this.width, this.height);


     }
}