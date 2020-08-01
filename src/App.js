class Dragon {
	constructor(){
		this.dragon = "A dragon"
	}
}

function createDragon(){
	const newDragon = new Dragon();
	console.log(newDragon.dragon);
	document.getElementById("root").innerHTML = newDragon.dragon;
}


