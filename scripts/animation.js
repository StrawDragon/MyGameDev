var context = document.getElementById('canvas').getContext('2d');
var width = 1268, height = 260;
var contextBuf = document.createElement('canvas').getContext('2d');
contextBuf.canvas.width = width;
contextBuf.canvas.height = height;
var girl = loadImage(
  './resources/Sprite_girl_run.png', 
  216,
  216,
  10
);
var back = loadImage(
  './resources/Back.jpg',
  1268,
  260,
  1
);
var iter = document.getElementById('iter');
var i = 0;
var x = 0;

document.addEventListener("keydown", keyPush);


var timer = setInterval(
  drawStep,
  50
);

function drawStep() {
  drawImage(back, 0, 0);
  drawImage(girl, x, 260 - 216);
  context.save();
  //blank();
  context.drawImage(contextBuf.canvas, 0, 0, width, height);
  context.restore();
};

function drawImage(img, x, y) {
  if(!img.loaded) return;
  if (img.num < img.count - 1) {
    img.num++;
  } else {
    img.num = 0;
  }
  var xImage = img.num*img.width;

  contextBuf.drawImage(
    img.dom,
    xImage,
    0,
    img.width,
    img.height,
    x,
    y,
    img.width,
    img.height,
  );
}

function loadImage(path, width, height, count) {
  var img = document.createElement('img');
  var result = {
    dom: img,
    width: width,
    height: height,
    count: count,
    loaded: false,
    num: 0,
  };

  img.onload = function () {
    result.loaded = true;
  }
  
  img.src = path;

  return result;
}

function keyPush (evt) {
  switch(evt.keyCode) {
    case 37:
      x -= 27;
      if (x < 0) x = 0;
      break;
    case 39:
      x += 27;
      if (x > 1052) x = 1052;
      break;
    default:
      break;
  }
}
