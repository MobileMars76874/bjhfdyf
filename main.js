music = "";

function preload(){
music = loadSound("music.mp3");
}

function setup(){
canvas = createCanvas(600, 600);
canvas.center();

}


function play(){
music.play();
}