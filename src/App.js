class Dragon {
	constructor(){
		this.dragon = {
			type: "A dragon"
		}
}
	// to do...make function that returns the dragon object
createDragon1(){
const dragonBodySize = ["small", "medium", "big"];
const randomBodySize = Math.floor(Math.random() * dragonBodySize.length);

const dragonBodyShape = ["rounded", "noodle", "sharp"];
const randomBodyShape = Math.floor(Math.random() * dragonBodyShape.length);

const dragonBodyColour = ["black", "blue", "green", "brown", "grey", "red"];
const randomBodyColour = Math.floor(Math.random() * dragonBodyColour.length);

const dragonSkinType = ["smooth", "scaly", "feathered", "furry"];
const randomSkinType = Math.floor(Math.random() * dragonSkinType.length);

const dragonHeadNumber = ["one", "two", "three", "four", "five"];
const randomHeadNumber = Math.floor(Math.random() * dragonHeadNumber.length);

const dragonHornType = ["curly", "straight"];
const randomHornType = Math.floor(Math.random() * dragonHornType.length);

const dragonHornNumber = ["one", "two", "three", "four", "five", "six"];
const randomHornNumber = Math.floor(Math.random() * dragonHornNumber.length);

const dragonWingsNumber = ["zero", "two", "four", "six", "eight"];
const randomWingsNumber = Math.floor(Math.random() * dragonWingsNumber.length);

const dragonTailLength = ["stubby", "short", "medium", "long"];
const randomTailLength = Math.floor(Math.random() * dragonTailLength.length);

const dragonLegs = ["zero", "two", "four"];
const randomLegs = Math.floor(Math.random() * dragonLegs.length);

const dragonDiet = ["herbivore", "omnivore", "carnivore"];
const randomDiet = Math.floor(Math.random() * dragonDiet.length);

const dragonFightTactic = ["hide", "run", "bite", "scratch", "breathe fire",
 "roar", "stretch wings", "dust cloud"];
const randomFightTactic = Math.floor(Math.random() * dragonFightTactic.length);

const dragonSocial = ["loner", "familial", "super social"];
const randomSocial = Math.floor(Math.random() * dragonSocial.length);

console.log(randomBodySize, dragonBodySize[randomBodySize]);
console.log(randomBodyShape, dragonBodyShape[randomBodyShape]);
console.log(randomBodyColour, dragonBodyColour[randomBodyColour]);
console.log(randomSkinType, dragonSkinType[randomSkinType]);
console.log(randomHeadNumber, dragonHeadNumber[randomHeadNumber]);
console.log(randomHornType, dragonHornType[randomHornType]);
console.log(randomHornNumber, dragonHornNumber[randomHornNumber]);
console.log(randomWingsNumber, dragonWingsNumber[randomWingsNumber]);
console.log(randomTailLength, dragonTailLength[randomTailLength]);
console.log(randomLegs, dragonLegs[randomLegs]);
console.log(randomDiet, dragonDiet[randomDiet]);
console.log(randomFightTactic, dragonFightTactic[randomFightTactic]);
console.log(randomSocial, dragonSocial[randomSocial]);


const dragonObject = {
	makeDragon: function (){
		const myDragon = "The dragon has a " + dragonBodySize[randomBodySize] + ", " + dragonBodyShape[randomBodyShape] + ", " + dragonBodyColour[randomBodyColour] + ", " + dragonSkinType[randomSkinType] + " body. Heads: " + dragonHeadNumber[randomHeadNumber] + ". Number of Horns: " + dragonHornNumber[randomHornNumber] + ". Type of Horn: " + dragonHornType[randomHornType] + ". Wings: " + dragonWingsNumber[randomWingsNumber] + ". Legs: " + dragonLegs[randomLegs] + ". Tail Length: " + dragonTailLength[randomTailLength] + ". Diet: " + dragonDiet[randomDiet] + ". FightTactic: " + dragonFightTactic[randomFightTactic] + ". Social: " + dragonSocial[randomSocial] + ". "
		return myDragon;
	}
}

const myRandomDragon = dragonObject.makeDragon();
document.write(myRandomDragon);

	return myRandomDragon;
	}
}

function createDragon(){
	const newDragon = new Dragon();
	// to do... call the function that returns a dragon object, then assign value returned from function
	// to a new value
	Dragon.createDragon1();
	
	
	console.log(newDragon.dragon);
	// update the newDragon.dragon to this new variable
	
	document.getElementById("root").innerHTML = newDragon.dragon.type;

	// Bonus points: function that will format dragon object into a descriptive string of text.
	// eg. "This dragon is small with a rounded body." etc
	
}


