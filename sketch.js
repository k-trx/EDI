let gif;

function preload(){
gif = loadImage('assets/KathrynGIF.gif');

}


function setup(){
createCanvas(windowWidth, windowHeight * 2);
strokeWeight(1);


}


function draw(){
background('white');
var num = 10; 
var sideLen = windowWidth /num;

for (var y = 0; y < windowHeight*2; y+=sideLen){
  
  for(var x = 0; x< windowWidth * 2; x+=sideLen){// loop to create a row of squares in the x direction
 
 
 image(gif, x, y, sideLen, sideLen);
  
}
}
}

function windowResized(){
resizeCanvas(windowWidth, windowHeight * 2)

}