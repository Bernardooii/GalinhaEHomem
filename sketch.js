var caminho,caminhoImg;
var galinha,galinhaImg;
var homem,homemImg;

var distancia=0;

function preload(){
  caminhoImg = loadImage("rua.jpg");
  galinhaImg = loadImage("galinha.jpg");
  homemImg = loadImage("homem.jpg");

}

function setup(){ 
createCanvas(1200,300);
// mover o plano de fundo
caminho=createSprite(100,150);
caminho.addImage(caminhoImg);
caminho.velocityX = -5;
caminho.scale = 2.0;

//criar a galinha
galinha  = createSprite(70,150);
galinha.addImage(galinhaImg);
galinha.scale=0.07;
galinha.debug = true;
galinha.setCollider();

  
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distancia: "+ distancia,580,30);
  
    
   distancia = distancia + Math.round(getFrameRate()/50);
   caminho.velocityX = -(6 + 2*distancia/150);
  
   galinha.y = World.mouseY;
  
   edges= createEdgeSprites();
   galinha .collide(edges);
  
  //código para resetar o plano de fundo
  if(caminho.x < 500 ){
    caminho.x = width/2;
  }

  
  //funçao isTouching para verificar se a galinha tocou no homem
 //if(galinha.isTouching(homem)){
 //  homem.velocityX = 0;
 //  galinha.velocityX = 0;
 // }
    homem();
}




function homem(){
      if(frameCount % 60 === 0){
        homem =createSprite(1100,200,50,50);
        homem.y = Math.round(random(50, 300))
        homem.scale =0.06;
        homem.velocityX = -(6 + 2*distancia/150);
        homem.addImage(homemImg);
        homem.setLifetime=170;
        homem.debug = true;
      }
}