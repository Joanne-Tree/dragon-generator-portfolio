class Dragon {
	constructor(){
		this.dragon = {
			type: "A dragon"
		}
	}
	// to do...make function that returns the dragon object
	function returnDragonObject(dragonBodySize, dragonBodyShape, dragonBodyColour, 
		dragonBodySkinType, dragonBodyHeadNumber, dragonHornType, dragonHornNumber, dragonWingsNumber, dragonTailLength, 
		dragonLegs, dragonDiet, dragonFightTactic, dragonSocial){
		const dragonObject = {
			dragonBodySize: ["small", "medium", "big"],
			dragonBodyShape: ["rounded", "noodle", "sharp"],
			dragonBodyColour: ["black", "blue", "green", "brown", "grey", "red"],
			dragonBodySkinType: ["smooth", "scaly", "feathered", "furry"],
			dragonBodyHeadNumber: [1, 2, 3, 4, 5],
			dragonHornType: ["hornless", "curlyHorns", "straightHorns"],
			dragonHornNumber: [0, 1, 2, 3, 4, 5, 6],
			dragonWingsNumber: [0, 2, 4, 6, 8],
			dragonLegs: ["none", "2", "4"],
			dragonDiet: ["herbivore", "omnivore", "carnivore"],
			dragonFightTactic: ["hide", "run", "bite", "scratch", "breatheFire",
 "roar", "stretchWings", "dustCloud"],
			dragonSocial: ["loner", "familial", "all the dragons"]
		};
		return dragonObject;
		
	}
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


