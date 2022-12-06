var  bg,tower,ti,e,w,cb,c,cannon,cbi,cbl,angle

function preload(){
bg=loadImage ("./Assets/background.gif")
ti=loadImage("./Assets/tower.png")
cb=loadImage("./Assets/cannon_base.png")
c=loadImage("./Assets/CANON.png")
cbi=loadImage("./Assets/cannonball.png")




console.log("preload")

}



function setup(){
    createCanvas (1200,600)
    e=Matter.Engine.create()                            
    w=e.world
    tower=Matter.Bodies.rectangle(160,310,120,400,{isStatic:true})
    Matter.World.add(w,tower)
    imageMode(CENTER)
    cannon=new Cannon(195,50,140,110,15)
    cbl=new Canonball(cannon.x,cannon.y)
    console.log("setup")
    angleMode(DEGREES)
    angle=15
    rectMode(CENTER)

}
function draw(){
    background(0)
image(bg,width/2,height/2,width,height)

cannon.display() 
cbl.display()
rect(tower.position.x,tower.position.y,120,400)
image(ti,tower.position.x,tower.position.y,120,400)       






text(mouseX+","+mouseY,mouseX,mouseY)

}
 function keyReleased(){
    if(keyCode==DOWN_ARROW){
        console.log(51)
        cbl.shoot()
    }
 }