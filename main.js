
rightWristX=0;
leftWristX=0;
difference=0;
function setup(){
video = createCapture(VIDEO);
video.size(550, 500);

canvas=createCanvas(500,600);
canvas.center();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("poseNet is initilized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
 

        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX+"difference="+difference);


    }
}
function preload(){

}
function draw(){
background('#969A97');


document.getElementById("font_size").innerHTML="Font size of the text-"+ difference +"px";
textSize(difference);
text("Navya Ripal Vyas",50, 400);
fill("26457A")
}