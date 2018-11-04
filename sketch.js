var video;
var snapshost = [];

function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(800, 240);
  video = createCapture(VIDEO);
  video.size(340, 240);
  video.hide();

  background('orange');

  button = createButton('take a photo');
  button.mousePressed(takesnap);
}

function takesnap(){
  // snapshost.push(video.get());
  for(var i = 0; i = snapshost.lenght; i++){
    tint(255, 50);
    image(snapshost[i], 0, 0, 340, 240);
    var snapshost = video.loadPixels();
    console.log('ciao');
  }
}

function draw() {
  // put drawing code here


}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
