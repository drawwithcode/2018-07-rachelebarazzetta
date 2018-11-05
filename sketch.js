var video;
var button;
var snapshots = [];
var counter = 0;
var total = 86;
var mic;

function setup() {
  createCanvas(1360, 630);
  background(52);
  video = createCapture(VIDEO, ready);
  video.size(0, 0);
  imageMode(CORNER);
  // frameRate(20000);
  textAlign(CENTER);
  fill('white');
  text('It works only on crome!', width/2, height/2);
  mic = new p5.AudioIn();
  mic.start();
}

var go = false;

function ready(){
  go = true;
}

function draw() {
  if(go){
  snapshots[counter] = video.get();
  counter++;
  if(counter == total ){
    counter = 0;
  }
}

  var w = 340;
  var h = 180;
  var x = 0;
  var y = 0;

  var  vol = mic.getLevel();
  var col = vol * 25550;

  for(var i = 0; i < snapshots.length ; i++){
    var index = (i + frameCount) % snapshots.length ;
    image(snapshots[index], x , y, w , h);
    x = x + w/2;

    if (x > width){
      x = 0;
      y = y + h/2;
    }

      rectMode(CENTER);
      fill(200, 30, col, 5);
      noStroke();
      rect(width/2,height/2,1360, 630);
  }
}
