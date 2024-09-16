let w;
let h;

function setup() {
	w = windowWidth;
	h = windowHeight;
	createCanvas(w, h);
	background(100);

	fill(235, 235, 0);
	beginShape();
	for (let angle = 0; angle <= 360; angle += 10) {
		const angleRadian = angle * (PI / 180);

		// Noise returns 'smooth' random values wo/ huge changes
		// Input values are close to each other, so outputs are too
		// This makes it smooth
		let r = 150 + 50 * (noise(angle) * 2 - 1);

		let x = r * cos(angleRadian);
		let y = r * sin(angleRadian);

		vertex(w/2 + x, h/2 - y);
	}
	endShape();
}

function draw() {
}
