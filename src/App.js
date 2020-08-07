class Dragon {
	constructor(){
		this.dragon = {
			type: "A dragon"
		}
}
	// to do...make function that returns the dragon object
		const dragonObject = {
			dragonBodySize: ["small", "medium", "big"],
			dragonBodyShape: ["rounded", "noodle", "sharp"],
			dragonBodyColour: ["black", "blue", "green", "brown", "grey", "red"],
			dragonBodySkinType: ["smooth", "scaly", "feathered", "furry"],
			dragonBodyHeadNumber: [1, 2, 3, 4, 5],
			dragonHornType: ["hornless", "curlyHorns", "straightHorns"],
			dragonHornNumber: [0, 1, 2, 3, 4, 5, 6],
			dragonWingsNumber: [0, 2, 4, 6, 8],
			dragonLegs: [0 , 2, 4],
			dragonDiet: ["herbivore", "omnivore", "carnivore"],
			dragonFightTactic: ["hide", "run", "bite", "scratch", "breatheFire",
 "roar", "stretchWings", "dustCloud"],
			dragonSocial: ["loner", "family group", "super social"],
			makeDragon: function(dragonBodySize, dragonBodyShape, dragonBodyColour, dragonBodySkinType, 
		dragonBodyHeadNumber, dragonHornType, dragonHornNumber, dragonWingsNumber, dragonTailLength, 
		dragonLegs, dragonDiet, dragonFightTactic, dragonSocial){
				dragonObject.dragonBodySize = dragonBodySize;
				dragonObject.dragonBodyShape = dragonBodyShape;
				dragonObject.dragonBodyColour = dragonBodyColour;
				dragonObject.dragonBodySkinType = dragonBodySkinType;
				dragonObject.dragonBodyHeadNumber = dragonBodyHeadNumber;
				dragonObject.dragonHornType = dragonHornType;
				dragonObject.dragonHornNumber = dragonHornNumber;
				dragonObject.dragonWingsNumber = dragonWingsNumber;
				dragonObject.dragonLegs = dragonLegs;
				dragonObject.dragonDiet = dragonDiet;
				dragonObject.dragonFightTactic = dragonFightTactic;
				dragonObject.dragonSocial = dragonSocial;

				const myDragon = "Your dragon has a " + dragonObject.dragonBodySize + ", " +
				dragonObject.dragonBodyShape + ", " + dragonObject.dragonBodyColour + ", " +
				dragonObject.dragonBodySkinType + " body." + dragonObject.dragonBodyHeadNumber +
				" heads. It has " + dragonObject.dragonHornNumber + " " + dragonObject.dragonHornType +
				" horns, " + dragonObject.dragonWingsNumber + " wings, and " + dragonObject.dragonLegs +
				" legs. It is a " + dragonObject.dragonDiet + ". Fight tactic: " + 
				dragonObject.dragonFightTactic + ". Social status: " + dragonObject.dragonSocial + ".";
				return myDragon;
			}
		}
		const randomBodySize = Math.floor(Math.randomBodySize() * dragonObject.dragonBodySize.length);




		const newDragon =
		dragonObject.makeDragon("", "", "", "", "", "", "", "", "", "", "", "");
		document.write (newDragon);
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


