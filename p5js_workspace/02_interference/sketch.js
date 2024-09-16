const ringLen = 10;

let w;
let h;
let halfW;
let halfH;

let circle1x;
let circle2x;
let circlesSpeed = 1;
let circlesMaxDist;
let circlesMinDist;

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	w = windowWidth;
	h = windowHeight;
	halfW = w/2;
	halfH = h/2;
	
	circlesMaxDist = w/3;
	circlesMinDist = w/6;
	circle1x = w/3;
	circle2x = (w/3) * 2;
}

function draw() {
	background(255);
	ringedCircle(circle1x, halfH, halfW);
	ringedCircle(circle2x, halfH, halfW);
	ringedCircle(mouseX, mouseY, halfW);
	
	const newCircle1x = circle1x += circlesSpeed;
	const newCircle2x = circle2x -= circlesSpeed;
	
	const distance = circleDist(newCircle1x, newCircle2x)
	
	if (distance <= circlesMinDist || distance > circlesMaxDist) {
		circlesSpeed = -circlesSpeed;
	} else {
		circle1x = newCircle1x;
		circle2x = newCircle2x;
	}
}

function circleDist(leftCircleX, rightCircleX) {
	return rightCircleX - leftCircleX;
}

function ringedCircle(x, y, radius) {
	noFill();
	const ringCount = int(radius / ringLen);
	for (let i = radius; i > 0; i -= ringLen) {
		stroke(i/4, i/6, 128 + (x*3) % 128);
		circle(x, y, i);
	}
}
