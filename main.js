function preload(){

}
function setup(){
canvas = createCanvas(500,350);
canvas.center();
video = createCapture(VIDEO);
classifier = ml5.poseNet(video, modal_loaded);
classifier.classify('pose', gotResults);
}
function draw(){
background("white");
}
function modal_loaded(){
    console.log("Modal Loaded");
}
function gotResults(results){
if(results.length > 0){
console.log(results);
}
}