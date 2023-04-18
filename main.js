nosex="";
nosey="";
function preload(){
clownnose=loadImage("https://i.postimg.cc/J0wv8LVd/mustache-student-math-favorite-for-friday-the-the-1.png")
}
function setup(){
    canvas = createCanvas(400,400);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
     
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function take_snapshot(){
    save("image.png")
}
function draw(){
    image(video,0,0,400,400);
    image(clownnose,nosex,nosey,80,30)
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex=results[0].pose.nose.x-37;
        nosey=results[0].pose.nose.y+10;
        console.log("nose x = " + nosex);
        console.log("nose y = " + nosey);
    }
}