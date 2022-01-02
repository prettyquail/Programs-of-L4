var btn =document.getElementById("btn");
var mainDiv = document.querySelector("header div");
// btn.onclick = function() {
// 	alert("Button Clicked");
// }

function onBtnClick() {
	//alert("Button Clicked");
	//btn.style.backgroundColor="lightcoral"
	//mainDiv.style.backgroundColor="lightcoral"

	//for random background
	mainDiv.style.backgroundColor = "rgb(" + Math.floor(Math.random() *255) + "," +
	Math.floor(Math.random() * 255) + "," +Math.floor(Math.random() * 255) + ")"
}

// btn.onclick = onBtnClick;  to provide reference 

// btn.addEventListener('click', function() {
// 	alert('Anonymous Function called')
// })

btn.addEventListener('click', onBtnClick);