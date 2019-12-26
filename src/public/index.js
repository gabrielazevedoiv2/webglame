function setup() {
    createCanvas(480, 640)
}

var framerate = 0;
var maxFPS = 0;
var minFPS = 60;
var bg;

function preload() {
    // bg = loadImage('./assets/BG_01.png')
    bg = createImage(windowAreas.main.sizeX, windowAreas.main.sizeY)
    bg.loadPixels();
    for (let i = 0; i < bg.width; i++) {
        for (let j = 0; j < bg.height; j++) {
            bg.set(i, j, color(0, 92, 102))
        }
    }
    bg.updatePixels()
}

function loadBg() {
    image(bg, 0, 0)
}

function draw() {
    loadBg()
    drawFrameRate()
}

function drawText(value, x, y, fontSize = 18, align = LEFT, color = "#ffffff") {
    textSize(fontSize)
    textAlign(align)
    fill(color)
    text(value, x, y)
}

function drawFrameRate() {
    framerate = (framerate + frameRate()) / 2
    if (frameRate() < minFPS && frameRate() != 0) minFPS = frameRate()
    if (frameRate() > maxFPS) maxFPS = frameRate()
    drawText(frameRate().toFixed(0).toString(), 0, 14, null, LEFT);
    drawText("AVG: " + framerate.toFixed(0).toString(), 480, 14, null, RIGHT);
    drawText("MIN: " + minFPS.toFixed(0).toString(), 480, 28, null, RIGHT);
    drawText("MAX: " + maxFPS.toFixed(0).toString(), 480, 42, null, RIGHT);
}
