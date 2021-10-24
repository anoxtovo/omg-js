// Get input
var magicInput = window.prompt("What is the MAGIC keyword to Open door");

// magic keyword
var magicVariable = "bob";

function reloadGame(){
	//var linkSelect = document.querySelector('#reset');

	var linkSelect = document.getElementById('reset');

	linkSelect.addEventListener('click', function(){

		// reload function
		location.reload();
	});
}

if (magicVariable === magicInput) {
	document.write("<h1 class='head-one'> Congratulations...</h1><span>Hey "+magicVariable+"! Here your,</span><br></h1>");
				
	document.write("<br><a class='link-one' href='#' id='magicnum'>Magic Link </a>");

	// refresh link
	document.write("<a href='#' id='reset'>Reload</a>");
	reloadGame();

	// select link and change HEADING
	var linkSelect = document.querySelector("magicnum");

	linkSelect.addEventListener('click', function(){
					// select & change h1 content
		headingSelect = document.querySelector('h1')
		headingSelect.innerHTML="Hey,<br>Congratulations Buddy This is Your Magic Heading";
	});

} else {
	document.write("<h1> Oops...<br><span>{HINT: try-to-inspect-and-get-some-hint}</span></h1>");
	console.log("Hello master "+magicVariable+", Oops -_- , Oh Memory your not master "+magicVariable+".");

	// refresh link
	document.write("<br><a href='#' id='reset'>Reload</a>");

	// select link and refresh function
	/*var linkSelect = document.querySelector('#reset');
	linkSelect.addEventListener('click', function(){

		// reload function
		location.reload();
	});*/
	reloadGame();
}