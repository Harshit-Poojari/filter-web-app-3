mouth_x = 0;
mouth_y = 0;

function preload() {
  mustache_mouth = loadImage("https://i.postimg.cc/7PR2CGjH/mustahe.png");
}

function setup() {
    canvas = createCanvas(350,350);
    canvas.center(); 
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose)
}

function draw() {
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(0,255,0);
    circle(mouth_x,mouth_y,10);
    image(mustache_mouth,mouth_x -25,mouth_y -25,50,50);
}

function take_snapshot() {
save('myfilterimage.png');
}

function modelLoaded() {
    console.log("Posenet is Loaded");
}


function gotPose(results) {
  if(results.length > 0) {
    console.log(results);
    mouth_x = results[0].pose.nose.x;
    mouth_y = results[0].pose.nose.y;
    console.log("nose x ="+results[0].pose.nose.x);
    console.log("nose y ="+results[0].pose.nose.y);
  }
}



