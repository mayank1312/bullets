var bullet,wall,weight,wall2,wall3,wall4,bullet2,bullet3,bullet4,banner1,banner2,banner3,banner4,damage,damage2,
damage3,damage4,weight2,weight3,weight4,thickness;




function setup() {
  createCanvas(1600,400);
  
 
 
 bullet= createSprite(50,50, 20, 20);
 bullet.shapeColor="white";
 bullet2= createSprite(50,150, 20, 20);
 bullet2.shapeColor="white";
 bullet3= createSprite(50,250, 20, 20);
 bullet3.shapeColor="white";
 bullet4= createSprite(50,350, 20, 20);
 bullet4.shapeColor="white";
 bullet.velocityX=random(60,80);
 bullet2.velocityX=random(40,70);
 
 bullet3.velocityX=random(50,60);
 
 bullet4.velocityX=random(20,40);
 thickness=random(22,83);
 
 weight=random(30,52);
 weight2=random(50,60);
 weight3=random(35,50);
 weight4=random(30,48);
 wall=createSprite(800,100,1600,10);
 wall2=createSprite(800,200,1600,10);
 wall3=createSprite(800,300,1600,10);
 wall4=createSprite(800,400,1600,10);
 banner1=createSprite(1500,50,thickness,50);
 banner2=createSprite(1500,150,thickness,50);
 banner3=createSprite(1500,250,thickness,50);

 banner4=createSprite(1500,350,thickness,50);
}

function draw() {
  background(0);  
  drawSprites();
  if(banner1.x-bullet.x < bullet.width/2+banner1.width/2){
bullet.velocityX=0;
damage=(0.5*weight*bullet.velocityX*bullet.velocityX)/(thickness*thickness*thickness);
if(damage>10){
  banner1.shapeColor=color(255,0,0);
}

}else{
  banner1.shapeColor=color(0,255,0);
}
  }
if(banner2.x-bullet2.x < bullet2.width/2+banner2.width/2){
 bullet2.velocityX=0;
 damage2=(0.5*weight2*bullet2.velocityX*bullet2.velocityX)/(thickness*thickness*thickness);
 if(damage2 > 10){
 banner2.shapeColor=color(255,0,0);
  }

}else{
 banner2.shapeColor=color(0,255,0);
}
if(banner3.x-bullet3.x < bullet3.width/2+banner3.width/2){
  bullet3.velocityX=0;
  damage3=(0.5*weight3*bullet3.velocityX*bullet3.velocityX)/(thickness*thickness*thickness);
if(damage3>10){
  banner3.shapeColor=color(255,0,0);
}else{
 banner3.shapeColor=color(0,255,0);
 }
  }
if(banner4.x-bullet4.x < bullet4.width/2+banner4.width/2){
 bullet4.velocityX=0;
damage4=(0.5*weight4*bullet4.velocityX*bullet4.velocityX)/(thickness*thickness*thickness);
 if(damage4 > 10){
banner4.shapeColor=color(255,0,0);
}else{
 banner4.shapeColor=color(0,255,0);
 }
   }
      
