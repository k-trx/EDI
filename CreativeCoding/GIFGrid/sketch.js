let gif;

function preload(){
gif = loadImage('assets/KathrynGIF.gif');

}


function setup(){
createCanvas(windowWidth, windowHeight);
fill('magenta');
strokeWeight(1);


}


function draw(){
background('cyan');
var num  = 50;
var sideLen = windowWidth/num;

for (var y = 0; y < windowHeight; y += sideLen){

for (var x = 0; x < windowWidth; x += sideLen){

image(gif, x, y, sideLen, sideLen);

}

}

}

function windowResized(){
resizeCanvas(windowWidth, windowHeight)

}