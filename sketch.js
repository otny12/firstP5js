function setup() {
  createCanvas(500, 500);
}

function draw() {

  let r;
  let g;
  let b;
  let y0;
  let rec;
  let z;
  z=0;
  if (mouseY > 325) {
    y0 = map(mouseY, 325, height, 0, 1);
    r = lerp(235, 0, y0);
    g = lerp(140, 0, y0);
    b = lerp(52, 0, y0);
  }
  if (mouseY <= 325) {
    y0 = map(mouseY, 0, 325, 0, 1);
    r = lerp(153, 235, y0);
    g = lerp(255, 140, y0);
    b = lerp(255, 52, y0);
  }
  background(r, g, b);
  for (let i = mouseY; i > 0; i-=10) {
    let gr = map(z,mouseY, 0, 0,1);
    let r1;
    let r2;
    let r3;
    r1 = lerp(r, 50, gr);
    r2 = lerp(g, 50, gr);
    r3 = lerp(b, 50, gr);

    fill(r1, r2, r3);
    noStroke();
    rect(0, z, 500, 10);
    z+=10;
  }
}
