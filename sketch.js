let capture;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);

	capture = createCapture(VIDEO);
	capture.size(640,480);　　
	capture.hide();

	background(0);
}

function draw() {

	let ratioW = capture.width/width;
	let ratioH = capture.height/height;


	image(capture, 0, 0, 160, 120);
	capture.loadPixels();


	for(let i = 0; i < 2000; i++){
	let x = int(random(capture.width));
	let y = int(random(capture.height));
	let col = capture.get(x,y);
	fill (col);
	noStroke();
	ellipse(x/ratioW,y/ratioH,random(0,25));
	}
}
