function setup() {
  createCanvas(720, 720);
  background('pink');
  strokeWeight(8)
  fill('magenta');
}

function draw() {
  translate(60, 60)//creates a new origin point
  
//loop to create rows in the y direction
  
for (var y = 0; y<600; y+=300){
  
  for(var x = 0; x<600; x+=300){// loop to create a row of squares in the x direction
 quad(x, y,
      x+300, y,
      x+300, y+300,
      x, y+300
 )
  
}
}
  
  
}