video = "";

function setup(){
    video = createCapture();
    video.size(480,380)
    video.hide();
    canvas = createCanvas(480,380);
}
function draw{
    image(video, 0, 0, 480, 380);
}

modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}