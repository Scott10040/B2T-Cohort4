function displayName() {
	let fname = document.getElementById("fname").value;
	let lname = document.getElementById("lname").value;
	// .value extrcts the human interpretation of the object itself
	// without .value displays the object itself("fname")
	let name = document.getElementById("name").innerHTML = "Hello, my name is " + fname + " " +lname;





	//console.log("Your first name is: " + fname + " and your last name is: " + lname);

	console.log(fname + lname);
	//think of document and console like talking to Alexa
	//the . says i want to do something with the document

	//the DOM is like HTML and Javascript talking to each other
	//they each need all the references from each other

	//functions always have () in HTML and Javascript





} 
