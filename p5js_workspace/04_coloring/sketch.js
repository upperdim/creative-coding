let w;
let h;
const margin = 100;

function setup() {
	w = 800;
	h = 600;
	createCanvas(w, h);
	background(235);
	
	// Random coloring
	const ballCount = 50;
	for (let i = 0; i  < ballCount; ++i) {
		descendingGroupedColorsCircle();
		fallColorsCircle();
		seaColorsCircle();
	}
	
	// Pallette coloring
	for (let x = margin; x <= w - margin; x += 50) {
		fill(x/2, x/4, 120);
		circle(x, h - (margin / 3), 50);
	}
	
	// Pallette gradient
	for (let y = margin; y < h - margin; y += 5) {
		noStroke();
		fill(y/2, y/4, 120);
		circle(w - (margin / 3), y, y/10);
	}
	
	// Ringed circle
	ringedCircle();
	
	// Outline frame
	stroke(0);
	strokeWeight(1);
	noFill();
	rect(0, 0, w, h);
}

function draw() {
}

function descendingGroupedColorsCircle() {
	strokeWeight(1);

	const x = int(random(margin, w/2 - margin/2));
	const y = int(random(margin, h/2 - margin/2));
	
	// Descending grouped colors
	const r = y; // whole canvas would require y/2
	const g = y; // whole canvas would require y/2
	const b = int(random(100, 255));
	
	fill(r, g, b);
	circle(x, y, 25);
}

function fallColorsCircle() {
	strokeWeight(1);

	const x = int(random(w/2 + margin/2, w - margin));
	const y = int(random(margin, h/2 - margin/2));
	
	// Fall colors
	var r = int(random(175, 255)); // original: (100, 255)
	var g = int(random(175, 255)); // original: (100, 255)
	var b = int(random(0, 10));
	
	fill(r, g, b);
	circle(x, y, 25);
}

function seaColorsCircle() {
	strokeWeight(1);
	
	const x = int(random(margin, w/2 - margin/2));
	const y = int(random(h/2 + margin/2, h - margin));
	
	// Sea colors
	var r = 0;
	var g = int(random(175, 255)); // original: (100, 255)
	var b = int(random(175, 255)); // original: (100, 255)
	
	fill(r, g, b);
	circle(x, y, 25);
}

function ringedCircle() {
	centerX = (w - 2*margin)*0.75 + margin;
	centerY = (h - 2*margin)*0.75 + margin;
	
	noFill();
	strokeWeight(4);
	
	for (let r = 50; r <= 200; r += 25) {
		// One of below strokes:
		stroke(255-r, r/2, 128); // full canvas would be r/2, r/4
		// stroke(255 - r, r, 255);
		circle(centerX, centerY, r);
	}
}
