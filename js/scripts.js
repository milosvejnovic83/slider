// set sliders to be displayed
image0 = new Image();
image0.src = 'images/0.png';
image1 = new Image();
image1.src = 'images/1.png';
image2 = new Image();
image2.src = 'images/2.png';
image3 = new Image();
image3.src = 'images/3.png';
image4 = new Image();
image4.src = 'images/4.png';
image5 = new Image();
image5.src = 'images/5.png';
image6 = new Image();
image6.src = 'images/6.png';
image7 = new Image();
image7.src = 'images/7.png';
image8 = new Image();
image8.src = 'images/8.png';
image9 = new Image();
image9.src = 'images/9.png';
let slider1 = new Array();
slider1 = [image0, image1, image2, image3, image4, image5,image6, image7, image8, image9];
let slider2 = new Array();
slider2 = [image9, image8, image7, image6, image5, image4,image3, image2, image1, image0];


document.onmouseover = function (e) {
        let event = e || window.event;
		let target = event.target || event.srcElement;
		let parent = target.parentElement;
		if(target.className == "image") {
			document.getElementById(target.id).style.backgroundColor = "orange";
		};
};

document.onmouseout = function (e) {
        let event = e || window.event;
		let target = event.target || event.srcElement;
		if(target.className == "image") {
			document.getElementById(target.id).style.backgroundColor = "white";			
		};
};

document.onclick = function (e) {
        let event = e || window.event;
		let target = event.target || event.srcElement;
		if(target.className == "image") {
			alert("Clicked on image id: " + target.id);
		};
};

//creates page with sliders
window.onload = async function() {
	let images1 = document.getElementById('images1');
	images1.style.setProperty('--speed1', '5s');
	
	let images2 = document.getElementById('images2');
	images2.style.setProperty('--speed2', '10s');
	
	let display1 = setSlider(slider1);
	let display2 = setSlider(slider2);
	
	createSlider(display1, "images1");
	createSlider(display2, "images2");
	
	setAnimation(display1, display2);
}

//prepares slider for displaying 
function setSlider(slider) {
	sliderLength = slider.length;
	display= [];
	
	//array is consisting of double sliders so after last image first is displayed again
	for(j=0; j<2; j++) {
		for(i=0; i<sliderLength; i++) {
			doubleImage = new Image();
			doubleImage.src = slider[i].src;
			display.push(doubleImage);
		}
	}
	
	return display;
}

//adds images to html
function createSlider(slider, parentElement) {	
	for(i=0; i<slider.length; i++) {
		let node = slider[i];
		node.classList.add("image");	
		node.id = parentElement + i
		document.getElementById(parentElement).appendChild(node);
		
	}
}

//calculates width of slider based on number of slides so animation is displayed as infinite properly
function setAnimation(display1, display2) {
	let length1 = display1.length*152;	
	let images1 = document.getElementById('images1');
	images1.style.width = length1 ;
	let end1 = "-" + (length1/2).toString();
	let slideshow1 = document.getElementById('slideshow1');
	slideshow1.style.setProperty('--end', end1);
	
	let length2 = display2.length*152;
	let images2 = document.getElementById('images2');
	images2.style.width = length2 ;
	let end2 = "-" + (length2/2).toString();
	let slideshow2 = document.getElementById('slideshow2');
	slideshow2.style.setProperty('--end', end2);
}