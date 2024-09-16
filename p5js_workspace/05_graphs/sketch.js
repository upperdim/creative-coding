let w;
let h;

let xStart = -10.0;
let xEnd   =  10.0;
let xStep;

let yStart = -2.0
let yEnd;
let yStep;

// Offset everything down a bit in screen space (pixels)
let graphDownOffset = 100;

// Calculates and puts more points for denser curves
let extraDensityMultiplier;

function setup() {
	w = windowWidth;
	h = windowHeight;
	createCanvas(w, h);
	background(100);

	xStart = -10.0;
	xEnd   =  10.0;

	yEnd   = yStart + ((xEnd - xStart) * h) / w;
	
	extraDensityMultiplier = 4;
	yStep  = (yEnd - yStart) / (h * extraDensityMultiplier);
	xStep  = (xEnd - xStart) / (w * extraDensityMultiplier);
	
	for (let x = xStart; x <= xEnd; x += xStep) {
		let y = wideFunction(x);
		putPoint(getScreenXCoord(x), getScreenYCoord(y), 'green');
		
		y = midFunction(x);
		putPoint(getScreenXCoord(x), getScreenYCoord(y), 'red');
		
		y = steepFunction(x);
		putPoint(getScreenXCoord(x), getScreenYCoord(y), 'blue');
		
		y = wavyFunction(x);
		putPoint(getScreenXCoord(x), getScreenYCoord(y), 'orange');
		
		y = tallWavyFunction(x);
		putPoint(getScreenXCoord(x), getScreenYCoord(y), 'yellow');
		
		y = frequentWavyFunction(x);
		putPoint(getScreenXCoord(x), getScreenYCoord(y), 'purple');
	}
}

function wideFunction(x)         {return 0.5 * (x*x);}
function midFunction(x)          {return       (x*x);}
function steepFunction(x)        {return 5   * (x*x);}
function wavyFunction(x)         {return     sin(x);}

// Multiplying a wave will make it taller.
// Value gets bigger, it gets represented higher in y-axis.
function tallWavyFunction(x)     {return 5 * sin(x);}

// Bigger sin values are more frequent
function frequentWavyFunction(x) {return sin(5 * x);}

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
	circle(x, y + graphDownOffset, 5);
}
