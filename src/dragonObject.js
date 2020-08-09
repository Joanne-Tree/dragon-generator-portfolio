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

const dragonObject = {
	makeDragon: function (){
		const myDragon = "The dragon has a " + dragonBodySize[randomBodySize] + ", " + dragonBodyShape[randomBodyShape] + ", " + dragonBodyColour[randomBodyColour] + ", " + dragonSkinType[randomSkinType] + " body. Heads: " + dragonHeadNumber[randomHeadNumber] + ". Number of Horns: " + dragonHornNumber[randomHornNumber] + ". Type of Horn: " + dragonHornType[randomHornType] + ". Wings: " + dragonWingsNumber[randomWingsNumber] + ". Legs: " + dragonLegs[randomLegs] + ". Tail Length: " + dragonTailLength[randomTailLength] + ". Diet: " + dragonDiet[randomDiet] + ". FightTactic: " + dragonFightTactic[randomFightTactic] + ". Social: " + dragonSocial[randomSocial] + ". "
		return myDragon;
	}
}

const myRandomDragon = dragonObject.makeDragon();

function createDragon(){
	document.getElementById("root").innerHTML = myRandomDragon;
}

document.getElementById("root").addEventListener("click", createDragon);
