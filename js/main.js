const IMAGES = ["img/dobby.jpg","img/dumbledore.jpg","img/harry.jpg","img/hermione.jpg","img/rogue.jpg","img/ron.jpg","img/voldemort.jpg"];
const FULLARRAY = IMAGES.concat(IMAGES);// I create array with all images x2
const BACKIMAGE = 'dos.jpg';
let noRepeat = true;
let click = 0;


function displayImage() { // This function display image when the windows is loaded
	for (i=0; i<=FULLARRAY.length-1; i++) { // For the FULLARRAY, create <img> for each img
		document.getElementById('games').innerHTML += '<img src="img/dos.jpg" onclick="choisir('+i+')" draggable="false">' // A chaque tour, on écrit dans le HTML
	}
}

displayImage()

