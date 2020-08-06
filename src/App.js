class Dragon {
	constructor(){
		this.dragon = {
			type: "A dragon"
		}
}
	// to do...make function that returns the dragon object
	function returnDragonObject(dragonBodySize, dragonBodyShape, dragonBodyColour, dragonBodySkinType, 
		dragonBodyHeadNumber, dragonHornType, dragonHornNumber, dragonWingsNumber, dragonTailLength, 
		dragonLegs, dragonDiet, dragonFightTactic, dragonSocial){
		const dragonObject = {
			dragonBodySize: "",
			dragonBodyShape: "",
			dragonBodyColour: "",
			dragonBodySkinType: "",
			dragonBodyHeadNumber: "",
			dragonHornType: "",
			dragonHornNumber: "",
			dragonWingsNumber: "",
			dragonLegs: "",
			dragonDiet: "",
			dragonFightTactic: "",
			dragonSocial: ""

		};
		return dragonObject();
		
	}
}

function createDragon(){
	const newDragon = new Dragon();
	// to do... call the function that returns a dragon object, then assign value returned from function
	// to a new value
	returnDragonObject(dragonObject);
	var dragon1 = dragonObject;
	console.log(newDragon.dragon);
	// update the newDragon.dragon to this new variable
	newDragon.dragon = dragon1;
	document.getElementById("root").innerHTML = newDragon.dragon.type;

	// Bonus points: function that will format dragon object into a descriptive string of text.
	// eg. "This dragon is small with a rounded body." etc
}


