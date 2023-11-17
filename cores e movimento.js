let cor;
let posiçaoHorizontal; //x
let posiçaoVertical; //y

function setup() {
  createCanvas(400, 400);
  background(100,0,0);
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posiçaoHorizontal = 200;
  posiçaoVertical = 200;
} 
  
function draw() {
  fill('blue');
  circle(posiçaoHorizontal,posiçaoVertical, 50);
  
  if (mouseX < posiçaoHorizontal) {
    posiçaoHorizontal = posiçaoHorizontal - 1;
  }
  if (mouseX > posiçaoHorizontal) {
    posiçaoHorizontal = posiçaoHorizontal + 1;
  }
  if (mouseY < posiçaoVertical) {
    posiçaoVertical = posiçaoVertical - 1;
  }
  if (mouseY > posiçaoVertical) {
    posiçaoVertical = posiçaoVertical + 1;
  }
  
  if (mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0,255),
  random(0,100));
  }
}
