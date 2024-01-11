let gif;

function preload(){
gif = loadImage('assets/KathrynGIF.gif');

}


function setup(){
createCanvas(windowWidth, windowHeight);
strokeWeight(1);


}


function draw(){


for (var y = 0; y<600; y+=60){
  
  for(var x = 0; x<600; x+=60){// loop to create a row of squares in the x direction
 
 
 image(gif, x, y, 60, 60);
  
}
}
}

function windowResized(){
resizeCanvas(600, 600)

}