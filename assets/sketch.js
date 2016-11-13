var tileButterfly;
var tileButterflyRev;





function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('max');

  frameRate(10);

  tileButterfly = loadImage('./assets/tilebutterfly.png');
  tileButterflyRev = loadImage('./assets/tilebutterflyREV.png');

}

var inc = 0.01;
var density = 96;
var znoise = 0.0;


function draw() {




  var xnoise = 0.0;
  var ynoise = 0.0;
  for (var y = 0; y < windowWidth; y += density) {
    for (var x = 0; x < windowHeight; x += density) {
      var n = noise(xnoise, ynoise, znoise) * 100;
      colorMode(HSB, 100);
      noStroke();

      if (random(1) < 0.004) {
        fill(n, 25, 100, 20);
        rect(y, x, density, density);
      } else if (random(10) < 0.05) {
        fill(100, 0, 100, 40);
        rect(y, x, density, density);
      } else if (random(1) < 0.0007) {

        tint(100, 80);
        if (random(2) < 1) {

          image(tileButterfly, y, x, 96, 96);
        } else {
          image(tileButterflyRev, y, x, 96, 96);
        }
      }

      xnoise += inc;
    }
    xnoise = 0;
    ynoise += inc;
  }
  znoise += inc;


}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
