const dragonBodySize = ["small", "medium", "big"];
const randomBodySize = Math.floor(Math.random() * dragonBodySize.length);

const dragonBodyShape = ["rounded", "noodle", "sharp"];
const randomBodyShape = Math.floor(Math.random() * dragonBodyShape.length);

const dragonBodyColour = ["black", "blue", "green", "brown", "grey", "red"];
const randomBodyColour = Math.floor(Math.random() * dragonBodyColour.length);

const dragonSkinType = ["smooth", "scaly", "feathered", "furry"];
const randomSkinType = Math.floor(Math.random() * dragonSkinType.length);

const dragonHeadNumber = [1, 2, 3, 4, 5];
const randomHeadNumber = Math.floor(Math.random() * dragonHeadNumber.length);

const dragonHornType = ["hornless", "curlyHorns", "straightHorns"];
const randomHornType = Math.floor(Math.random() * dragonHornType.length);

const dragonHornNumber = [0, 1, 2, 3, 4, 5, 6];
const randomHornNumber = Math.floor(Math.random() * dragonHornNumber.length);

const dragonWingsNumber = [0, 2, 4, 6, 8];
const randomWingsNumber = Math.floor(Math.random() * dragonWingsNumber.length);

const dragonTailLength = ["none", "stubby", "short", "medium", "long"];
const randomTailLength = Math.floor(Math.random() * dragonTailLength.length);

const dragonLegs = ["none", "2", "4"];
const randomLegs = Math.floor(Math.random() * dragonLegs.length);

const dragonDiet = ["herbivore", "omnivore", "carnivore"];
const randomDiet = Math.floor(Math.random() * dragonDiet.length);

const dragonFightTactic = ["hide", "run", "bite", "scratch", "breatheFire",
 "roar", "stretchWings", "dustCloud"];
const randomFightTactic = Math.floor(Math.random() * dragonFightTactic.length);

const dragonSocial = ["loner", "familial", "all the dragons"];
const randomSocial = Math.floor(Math.random() * dragonSocial.length);

console.log(randomBodySize, dragonBodySize[random]);
