let img;
let multiplier = 1.5;
let multiplier_diff = -0.05;

const multiplierMaxVal = multiplier;
const multiplierMinVal = 0.0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	img = createImage(windowWidth, windowHeight);
	img.loadPixels();
}

function drawImage() {
	for (let y = 0; y < windowHeight; ++y) {
		const rowOffset = y * windowWidth * 4;
		const multipliedY = y * multiplier;
		
		for (let x = 0; x < windowWidth; ++x) {
			const i = (x * 4) + rowOffset;
			
			img.pixels[i    ] = (x * multiplier) % 255;
			img.pixels[i + 1] = (multipliedY) % 255;
			img.pixels[i + 2] = (multipliedY * x) % 170;
			img.pixels[i + 3] = 255;
		}
	}
	
	img.updatePixels();
	image(img, 0, 0, width, height);
}

function draw() {
	drawImage();
	
	const newMultiplier = multiplier + multiplier_diff;
	
	if (newMultiplier <= multiplierMinVal || newMultiplier > multiplierMaxVal) {
		multiplier_diff *= -1;
		multiplier += multiplier_diff;
	} else {
		multiplier = newMultiplier;
	}
}
