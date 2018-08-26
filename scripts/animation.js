var context = document.getElementById('canvas').getContext('2d');
var width = 1300, height = 300;
var girl = loadImage(
  './resources/Sprite_girl_run.png', 
  216,
  216,
  10
);
var iter = document.getElementById('iter');
var i = 0;

var timer = setInterval(
  drawStep,
  75
);

setTimeout(function() {
  clearInterval(timer);
  alert( 'стоп' );
}, 10010);

function drawStep() {
  context.clearRect(0, 0, width, height);
  drawImage(girl, 0, 0);
  drawImage(girl, 500, 0);
};

function drawImage(img, x, y) {
  if(!img.loaded) return;
  if (img.num < img.count - 1) {
    img.num++;
  } else {
    img.num = 0;
  }
  var xImage = img.num*img.width;

  context.drawImage(
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
