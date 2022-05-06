//Drawing Program
// By Hamzah Khalloof
let button;
let button2;

function keyTyped() {
  if (key === "a") {
    fill(300, 100, 100);
    ellipse(mouseX, mouseY, 30, 30);
  } else if (key === "b") {
    fill(0);
    ellipse(mouseX, mouseY, 30, 30);
  } else if (key === "c") {
    fill(100, 300, 100);
    ellipse(mouseX, mouseY, 30, 30);
  } else if (key === "j") {
    fill(100, 100, 300);
    ellipse(mouseX, mouseY, 30, 30);
  } else if (key === "l") {
    background(300);
  } else if (key === "h") {
    fill(100, 200, 300);
    ellipse(mouseX, mouseY, 30, 30);
  } else if (key === "w") {
    fill(300);
    ellipse(mouseX, mouseY, 30, 30);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(300);
}

function draw() {
  noStroke();
  ellipse(mouseX, mouseY, 30, 30);
}
