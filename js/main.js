function askQuestions() {

	var firstName = prompt ('What is your first name?');
	var lastName = prompt ('What is your last name?');

	var fullName = firstName + " " + lastName;
		console.log(fullName);

	var age = prompt ("How old are you?");
	age = parseInt(age);

	if (age >= 18) {

		console.log("User is an adult.");

	} else if (age >= 13) {console.log("User is a teenager");

	} else {

		console.log("User is a child.");
	}

	if (firstName.toLowerCase() == "general" && lastName.toLowerCase() !== "assembly") {

		console.log("Hello General!")
	} 

	var faveColor = prompt ("What is your favorite color?").toLowerCase();

	if (faveColor == "red" ||
		faveColor == "blue" ||
		faveColor == "green" ||
		faveColor == "purple" ||
		faveColor == "orange" ||
		faveColor == "yellow") {

		$('h1').css("color", faveColor);
}

}

/*When the page has loaded*/
$(function() {

	$("img").on("click", askQuestions);

	// hide all the sections
	$("h3").next().hide();


	// When the user clicks an h3
	$("h3").on("click", function() {

		// toggle the next element
		$(this).next().slideToggle(500, "swing");

	});

});

