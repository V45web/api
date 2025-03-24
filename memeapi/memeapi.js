import database from "./database.js"

function getmeme(){
	let min = 0;
	let max = database.length - 1;
	let output = Math.floor(Math.random() * (max - min + 1)) + min;
	return database[output];
}

// API by V 45 Tech