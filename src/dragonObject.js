const dragonBodySize = ["small", "medium", "big"];
const dragonBodyShape = ["rounded", "noodle", "sharp"];
const dragonBodyColour = ["black", "blue", "green", "brown", "grey", "red"];
const dragonSkinType = ["smooth", "scaly", "feathered", "furry"];
const dragonHeadNumber = ["one", "two", "three", "four", "five"];
const dragonHornType = ["curly", "straight"];
const dragonHornNumber = ["one", "two", "three", "four", "five", "six"];
const dragonWingsNumber = ["zero", "two", "four", "six", "eight"];
const dragonTailLength = ["stubby", "short", "medium", "long"];
const dragonLegs = ["zero", "two", "four"];
const dragonDiet = ["herbivore", "omnivore", "carnivore"];
const dragonFightTactic = ["hide", "run", "bite", "scratch", "breathe fire",
 "roar", "stretch wings", "dust cloud"];
const dragonSocial = ["loner", "familial", "super social"];

const dragonObject = {
	makeDragon: function (){
		const myDragon = ("The dragon has a " + 
			getRandomValue(dragonBodySize) + ", " + 
			getRandomValue(dragonBodyShape) + ", " + 
			getRandomValue(dragonBodyColour) + ", " + 
		 	getRandomValue(dragonSkinType) + " body. <br> Heads: " +
		  	getRandomValue(dragonHeadNumber) + ". <br> Number of Horns: " +
			getRandomValue(dragonHornNumber) + ". <br> Type of Horn: " + 
			getRandomValue(dragonHornType) + ". <br> Wings: " + 
			getRandomValue(dragonWingsNumber) + ". <br> Legs: " + 
			getRandomValue(dragonLegs) + ". <br> Tail Length: " + 
			getRandomValue(dragonTailLength) + ". <br> Diet: " +
			getRandomValue(dragonDiet) + ". <br> FightTactic: " + 
			getRandomValue(dragonFightTactic) + ". <br> Social: " + 
			getRandomValue(dragonSocial) + ". ");
		return myDragon;
	}
}

const myRandomDragon = dragonObject.makeDragon();

function getRandomValue(dragon){
	let randomValue = Math.floor(Math.random() * dragon.length);
	return dragon[randomValue];
}

function createDragon(){
	document.getElementById("root").innerHTML = myRandomDragon;
}

document.getElementById("root").addEventListener("click", createDragon);
