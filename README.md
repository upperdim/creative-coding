## How to use?

It is recommended that index.html file at root directory of this repository is
hosted with a live server. You can click on "Workspace Projects" link in the
opened page and see the project directories if your live server supports
directory browsing.

Individual html files in project directories can still be viewed manually though.

## Alternative CDN Import

p5js library can alternatively be imported online from CDN.

https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.10.0/p5.min.js

## Contents of the repository

- index.html: It is recommended that this file is hosted with a live server.

- p5js_workspace/: Has p5js library and p5js project directories.
	- p5.js: Somewhat readable with useful errors.
	- p5.min.js: Minified for file size, no useful errors.

	- addons/: Contains additional p5js libraries.
		- p5.sound.js: Library for sound functionalities of p5js.
		               Don't forget to include before using.
					   It is somewhat readable with useful errors.
		- p5.sound.min.js: Minified for file size, no useful errors.
	
	- Project directories: One directory for each project
		- index.html: Each project directory must have an appropriate html file.
		- sketch.js: p5js code goes to here.
