class Dragon {
	constructor(){
		this.dragon = {
			type: "A dragon"
		}
	}
	// to do...make function that returns the dragon object
}

function createDragon(){
	const newDragon = new Dragon();
	// to do... call the function that returns a dragon object, then assign value returned from function
	// to a new value
	console.log(newDragon.dragon);
	// update the newDragon.dragon to this new variable
	document.getElementById("root").innerHTML = newDragon.dragon.type;

	// Bonus points: function that will format dragon object into a descriptive string of text.
	// eg. "This dragon is small with a rounded body." etc
}


