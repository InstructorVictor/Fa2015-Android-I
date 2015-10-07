// Put your custom code here
function getName() {
	// alert("Clicked on CUSTOMIZED");
	// localStorage   <-- HTML5 "Cookies"
	localStorage.userName = prompt("What's your name?");
	// alert(localStorage.userName);
	$(".nameMsg").html(", " + localStorage.userName + "!");
}

function loadName() {
	if(localStorage.userName == undefined) {
		// No name. Do nothing.
	} else {
		$(".nameMsg").html(", " + localStorage.userName + "!");
	}
}

$("#btnCustomize").on("click", function() { getName() });
 

// document.getElementById("thing")   	<-- JavaScript
// $("#thing")							<-- jQuery