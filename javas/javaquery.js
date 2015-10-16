var images = [document.getElementById("0").getAttribute("src"), document.getElementById("1").getAttribute("src"),
document.getElementById("2").getAttribute("src"), document.getElementById("3").getAttribute("src"), 
document.getElementById("4").getAttribute("src"), document.getElementById("5").getAttribute("src")]
var captions = ["Wrigley Field", "Tour on the Canal", "The Bean", "On the Boat", "Skyline", "Skybox"]
var counter = 0

var autoplay = setInterval(timer, 1000);

function timer() {
	var img = images[counter];
	document.getElementById("showing").src = img;
	document.getElementById("caption").innerHTML = captions[counter]
	if (counter != 5) {
		counter += 1;
		document.getElementById(counter - 1).style.opacity = ".5"
	} else {
		counter = 0;
		document.getElementById(5).style.opacity = ".5"
	}
}
function stop() {
	clearInterval(autoplay)
	document.getElementById(counter - 1).style.opacity = "1"
}
document.getElementById(counter).style.opacity = "1"
function previous() {
	if (counter != 0) {
		counter -= 1;
		document.getElementById(counter + 1).style.opacity = ".5"
	} else {
		counter = 5;
		document.getElementById(0).style.opacity = ".5"
	}
	document.getElementById("showing").src=images[counter]
	document.getElementById("showing").style.transition = "opacity 1s ease-in"
	document.getElementById("caption").innerHTML = captions[counter]
	document.getElementById(counter).style.opacity = "1";
	document.getElementById(counter).style.transition = "opacity 1s ease-in"
}
function next() {
	if (counter != 5) {
		counter += 1;
		document.getElementById(counter - 1).style.opacity = ".5"
	} else {
		counter = 0;
		document.getElementById(5).style.opacity = ".5"
	}
	document.getElementById("showing").src=images[counter]
	document.getElementById("showing").style.transition = "opacity 1s ease-in"
	document.getElementById("caption").innerHTML = captions[counter]
	document.getElementById(counter).style.opacity = "1";
	document.getElementById(counter).style.transition = "opacity 1s ease-in"
}
function show1() {
	document.getElementById("showing").src=images[0]
	document.getElementById("caption").innerHTML = captions[0]
	counter = 0
	document.getElementById("0").style.opacity = "1";
	document.getElementById("1").style.opacity = ".5";
	document.getElementById("2").style.opacity = ".5";
	document.getElementById("3").style.opacity = ".5";
	document.getElementById("4").style.opacity = ".5";
	document.getElementById("5").style.opacity = ".5";

}
function show2() {
	document.getElementById("showing").src=images[1]
	document.getElementById("caption").innerHTML = captions[1]
	counter = 1
	document.getElementById("0").style.opacity = ".5";
	document.getElementById("1").style.opacity = "1";
	document.getElementById("2").style.opacity = ".5";
	document.getElementById("3").style.opacity = ".5";
	document.getElementById("4").style.opacity = ".5";
	document.getElementById("5").style.opacity = ".5";
}
function show3() {
	document.getElementById("showing").src=images[2]
	document.getElementById("caption").innerHTML = captions[2]
	counter = 2
	document.getElementById("0").style.opacity = ".5";
	document.getElementById("1").style.opacity = ".5";
	document.getElementById("2").style.opacity = "1";
	document.getElementById("3").style.opacity = ".5";
	document.getElementById("4").style.opacity = ".5";
	document.getElementById("5").style.opacity = ".5";
}
function show4() {
	document.getElementById("showing").src=images[3]
	document.getElementById("caption").innerHTML = captions[3]
	counter = 3
	document.getElementById("0").style.opacity = ".5";
	document.getElementById("1").style.opacity = ".5";
	document.getElementById("2").style.opacity = ".5";
	document.getElementById("3").style.opacity = "1";
	document.getElementById("4").style.opacity = ".5";
	document.getElementById("5").style.opacity = ".5";
}
function show5() {
	document.getElementById("showing").src=images[4]
	document.getElementById("caption").innerHTML = captions[4]
	counter = 4
	document.getElementById("0").style.opacity = ".5";
	document.getElementById("1").style.opacity = ".5";
	document.getElementById("2").style.opacity = ".5";
	document.getElementById("3").style.opacity = ".5";
	document.getElementById("4").style.opacity = "1";
	document.getElementById("5").style.opacity = ".5";
}
function show6() {
	document.getElementById("showing").src=images[5]
	document.getElementById("caption").innerHTML = captions[5]
	counter = 5
	document.getElementById("0").style.opacity = ".5";
	document.getElementById("1").style.opacity = ".5";
	document.getElementById("2").style.opacity = ".5";
	document.getElementById("3").style.opacity = ".5";
	document.getElementById("4").style.opacity = ".5";
	document.getElementById("5").style.opacity = "1";
}