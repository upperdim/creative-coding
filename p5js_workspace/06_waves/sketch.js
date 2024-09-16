let w;
let h;

let xStart = -10.0;
let xEnd   =  10.0;
let xStep;

let yStart = -1.25;
let yEnd;
let yStep;

// Offset everything down a bit in screen space (pixels)
let graphDownOffset = 25;

// Calculates and puts more points for denser curves
let extraDensityMultiplier;

function setup() {
	w = windowWidth;
	h = windowHeight;
	createCanvas(w, h);
	background('white');

	xStart = -10.0;
	xEnd   =  10.0;

	yEnd   = yStart + ((xEnd - xStart) * h) / w;
	
	extraDensityMultiplier = 4;
	yStep  = (yEnd - yStart) / (h * extraDensityMultiplier);
	xStep  = (xEnd - xStart) / (w * extraDensityMultiplier);
	
	let kMin = 0.2;
	let kMax = 0.6;
	let k = kMax;
	let kDiff = 0.07;
	
	// For each wave
	for (let i = 0; i < 55; ++i) {
		// Draw the wave
		for (let x = xStart; x <= xEnd; x += xStep) {
			let y = k * sin(x);
			let screenYOffset = i * 10;
			putPoint(getScreenXCoord(x), getScreenYCoord(y) + screenYOffset, 'black');
		}
		
		// Change magnitude for the next wave
		let newK = k + kDiff;
		if (newK <= kMin || newK > kMax) {
			kDiff = -kDiff;
			k += kDiff;
		} else {
			k = newK;
		}
	}
}

function draw() {
}

function getScreenXCoord(graphXCoord) {
	return (graphXCoord - xStart) / (xStep * extraDensityMultiplier);
}

function getScreenYCoord(graphYCoord) {
	return (graphYCoord - yStart) / (yStep * extraDensityMultiplier);
}

function putPoint(x, y, color) {
	noStroke();
	fill(color);
	circle(x, y + graphDownOffset, 2);
}
