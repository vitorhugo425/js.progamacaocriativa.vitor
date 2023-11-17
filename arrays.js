let cor;
let circuloX; //horizontal
let circuloY; //vertical


function setup() {
  createCanvas(400, 400); //width x height
  background(100,0,0);
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  circuloX = [0, 0, 0];
  circuloY = [random(height),random(height), random(height)];
 }
                             
  //circuloX = 0,0,0                
  //circuloY = 300,50,50                    
                     
function draw() {
 fill('white');
  
  console.log(circulo.lenght);
  for (let contador in circuloX) {
    //console.log(contador);
   circle(circuloX[contador], circuloY[contador], 50);
    
    
