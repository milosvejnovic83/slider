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
let length1;
let length2;
let timeFast;
let startFast;
let timeFast1;
let startFast1;
let endFast1;
let timeSlow1;
let startSlow1;
let endSlow1;
let timeFast2;
let startFast2;
let endFast2;
let timeSlow2;
let startSlow2;
let endSlow2;

//event when mouse is over icon
document.onmouseover = function (e) {
        let event = e || window.event;
		let target = event.target || event.srcElement;
		let parent = target.parentElement;
		if(target.className == "image") {
			document.getElementById(target.id).style.backgroundColor = "orange";
			
		};
};

//event when mouse left icon
document.onmouseout = function (e) {
        let event = e || window.event;
		let target = event.target || event.srcElement;
		
		
		if(target.className == "image") {
			document.getElementById(target.id).style.backgroundColor = "white";				
		};
};

//event when icon is clicked (it displayes id of icon that is clicked)
document.onclick = function (e) {
        let event = e || window.event;
		let target = event.target || event.srcElement;
		if(target.className == "image") {
			alert("Clicked on image id: " + target.id);
		};
};

//creates page with sliders
window.onload = async function() {	
	timeFast = Date.now();
	
	let display1 = setSlider(slider1);
	let display2 = setSlider(slider2);
	
	length1 = display1.length*152;		
	length2 = display2.length*152;	
	
	createSlider(display1, "images1");
	createSlider(display2, "images2");
	
	setAnimation();
	
	document.getElementById('images1').addEventListener( 'mouseenter', slow , false);
	document.getElementById('images1').addEventListener( 'mouseleave', fast , false);
	document.getElementById('images2').addEventListener( 'mouseenter', slow , false);
	document.getElementById('images2').addEventListener( 'mouseleave', fast , false);
}

//function for slowing down of animation
function slow(e) {
	/*
	  since animation is 2d and it starts again when speed is changed it's not smooth (it jumpes forward)
	  because of this behaviour code is commented out
	
	  idea is to count time from normal speed to the event of slowing down
	  based on that time function counts how much px animaton is moved
	  and then moves animation start to proper point	  
	  modulo of new starting point is preventing animation to go of the screen
	*/
	
	// let event = e || window.event;
	// let targetId = event.targetid || event.srcElement.id;
	// let percentage = 0;
	// timeSlow1 = Date.now();
	// timeSlow2 = Date.now();
	// if(timeFast1 == undefined) timeFast1 = timeFast;
	// if(timeFast2 == undefined) timeFast2 = timeFast;
	// if(startFast1 == undefined) startFast1 = startFast;
	// if(startFast2 == undefined) startFast2 = startFast;
	
	// if(targetId == "images1") {
		// percentage = (timeSlow1 - timeFast1)%25000/25000;
		// startSlow1 = startFast1 - length1/3*percentage;
		// endSlow1 = startSlow1 - length1/3;
	
		// let slideshow1 = document.getElementById('slideshow1');	
		// slideshow1.style.setProperty('--start', startSlow1);
		// slideshow1.style.setProperty('--end', endSlow1);
		
		// let images1 = document.getElementById('images1');
		// images1.style.setProperty('--speed1', '60s');
	// } else if(targetId == "images2") {
		// percentage = (timeSlow2 - timeFast2)%30000/30000;
		// startSlow2 = startFast2 - length2/3*percentage;
		// endSlow2 = startSlow2 - length2/3;
			
		// let slideshow2 = document.getElementById('slideshow2');	
		// slideshow2.style.setProperty('--start', startSlow2);
		// slideshow2.style.setProperty('--end', endSlow2);
		
		// let images2 = document.getElementById('images2');
		// images2.style.setProperty('--speed2', '60s');
	// } 	
}

//function for speeding up of the animation
function fast(e) {
	/*
		since animation is 2d and it starts again when speed is changed it's not smooth (it jumpes forward)
	  because of this behaviour code is commented out
	
	  idea is to count time from normal speed to the event of speeding up
	  based on that time function counts how much px animaton is moved
	  and then moves animation start to proper point
	  modulo of new starting point is preventing animation to go of the screen
	*/
	
	// let event = e || window.event;
	// let targetId = event.targetid || event.srcElement.id;
	// let percentage = 0;
	// timeSlow1 = Date.now();
	// timeSlow2 = Date.now();
	
	// if(targetId == "images1") {
		// percentage = (timeSlow1 - timeFast1)%60000/60000;
		// startFast1 = startSlow1 - length1/3*percentage;
		// startFast1 = startFast1%(length1/3);
		// endFast1 = startFast1 - length1/3;
		
		// let slideshow1 = document.getElementById('slideshow1')
		// slideshow1.style.setProperty('--start', startFast1);
		// slideshow1.style.setProperty('--end', endFast1);
		
		// let images1 = document.getElementById('images1');
		// images1.style.setProperty('--speed1', '25s');		
	// } else if(targetId == "images2") {
		// percentage = (timeSlow2 - timeFast2)%60000/60000;
		// startFast2 = startSlow2 - length2/3*percentage;
		// startFast2 = startFast2%(length2/3);
		// endFast2 = startFast2 - length2/3;
		
		// let slideshow2 = document.getElementById('slideshow2')
		// slideshow2.style.setProperty('--start', startFast2);
		// slideshow2.style.setProperty('--end', endFast2);
		
		// let images2 = document.getElementById('images2');
		// images2.style.setProperty('--speed2', '30s');		
	// } 
}

//prepares slider for displaying 
function setSlider(slider) {
	sliderLength = slider.length;
	display= [];
	
	//array is consisting of triple sliders so after last image first is displayed again
	//and to avoid the animation to move to far to the left in the case of slowing down or speeding up
	
	for(j=0; j<3; j++) {
		for(i=0; i<sliderLength; i++) {
			tripleImage = new Image();
			tripleImage.src = slider[i].src;
			display.push(tripleImage);
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
function setAnimation() {	
	startFast = 0;
	
	let images1 = document.getElementById('images1');
	images1.style.width = length1;
	images1.style.setProperty('--speed1', '25s');
	endFast1 = "-" + (length1/3).toString();
	let slideshow1 = document.getElementById('slideshow1');
	slideshow1.style.setProperty('--start', startFast);
	slideshow1.style.setProperty('--end', endFast1);
	
	let images2 = document.getElementById('images2');
	images2.style.width = length2;
	images2.style.setProperty('--speed2', '30s');
	endFast2 = "-" + (length2/3).toString();
	let slideshow2 = document.getElementById('slideshow2');
	slideshow2.style.setProperty('--start', startFast);
	slideshow2.style.setProperty('--end', endFast2);
}