console.log('Js loaded');

var countdownElement = document.getElementById('count');
var bgImageElement = document.getElementById('bg-image');

bgImageElement.className = 'BackImage';
//innerHtml :- It gives us whatever content is inside the html element
//console.log(countdownElement.innerHTML);

var initialCountdownVal = countdownElement.innerHTML;
console.log(initialCountdownVal);

//to update
//countdownElement.innerHTML=200;
//countdownElement.innerHTML=initialCountdownVal-1;


setInterval(function() {
	initialCountdownVal=initialCountdownVal > 0 ? initialCountdownVal -1:0;

	countdownElement.innerHTML=initialCountdownVal;
	var backImgPath = initialCountdownVal % 2 === 0 ? 'bgone.jpg' : 'bgtwo.jpg'


	//change style
	countdownElement.style.fontSize="300px";





	bgImageElement.src=backImgPath; //name of the attribute is src
	bgImageElement.className = 'BackImage';
}, 1000);

