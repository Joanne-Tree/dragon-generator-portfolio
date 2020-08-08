dragonBodySize.pickRandom(["small", "medium", "big"]),
dragonBodyShape.pickRandom(["rounded", "noodle", "sharp"]),
dragonBodyColour.pickRandom(["black", "blue", "green", "brown", "grey", "red"]),
dragonBodySkinType.pickRandom(["smooth", "scaly", "feathered", "furry"]),
dragonBodyHeadNumber.pickRandom([1, 2, 3, 4, 5]),
dragonHornType.pickRandom(["hornless", "curlyHorns", "straightHorns"]),
dragonHornNumber.pickRandom([0, 1, 2, 3, 4, 5, 6]),
dragonWingsNumber.pickRandom([0, 2, 4, 6, 8]),
dragonLegs.pickRandom(["none", "2", "4"]),
dragonDiet.pickRandom(["herbivore", "omnivore", "carnivore"]),
dragonFightTactic.pickRandom(["hide", "run", "bite", "scratch", "breatheFire",
 "roar", "stretchWings", "dustCloud"]),
dragonSocial.pickRandom(["loner", "familial", "all the dragons"])

// from stackOverflow

const randomElement = array[Math.floor(Math.random() * array.length)];



const months = ["January", "February", "March", "April", "May", "June", "July"];

const random = Math.floor(Math.random() * months.length);
console.log(random, months[random]);