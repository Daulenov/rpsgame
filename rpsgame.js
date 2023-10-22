var args = process.argv.slice(2);
if (args.length == 1) {
	console.log("Bye - Bye");
	process.exit(0);
	} else if (args.length % 2 == 0){ 
	console.log("Bye - Bye");
	process.exit(0);
	} else {
};

var originalArray = args;
var rightmoves = [7,5,3,1,-2,-4,-6];
var key = require('crypto').randomBytes(32).toString('hex');
var ai = Math.floor(Math.random() * originalArray.length);
var hmac = require('crypto').createHmac('sha256', key).update(originalArray[ai]).digest('hex');
console.log("HMAC:", hmac);
console.log('Available moves:');
for (var i in originalArray) {
	console.log((parseInt(i) + 1) + " - " + originalArray[i])
	};
console.log('0 - exit' + '\n' + '? - help');
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Your choice: ', (choice) => {
	var userchoice = choice.toString().trim().toUpperCase(); 
	var userchoicex = parseInt(userchoice) - 1;  
	
	if (userchoice.length == 1) {    
	} else {
		console.log("Bye - Bye");  
		process.exit(); 
	}  
	
	if (userchoice == 0) {  
		console.log("Bye - Bye");
		process.exit(); 
	}	 
	
	if (userchoice.match(/[1-9,?]/i) ) {
	} else { 
		console.log("Bye - Bye")
		process.exit();  
	}  
	
	if (userchoice === "?") {
		console.log(" +--------+-------+--------+---------+--------+--------+" + '\n', 
"| Choice | Rock  | Paper  | 3rd     | 4th    | 5th    |" + '\n',"+--------+-------+--------+---------+--------+--------+" + '\n',
"| Rock   | Draw  | Win    | Win     | Lose   | Lose   |" + '\n',"+--------+-------+--------+---------+--------+--------+" + '\n',
"| Paper  | Lose  | Draw   | Win     | Win    | Lose   |" + '\n',"+--------+-------+--------+---------+--------+--------+" + '\n',
"| 3rd    | Lose  | Lose   | Draw    | Win    | Win    |" + '\n',"+--------+-------+--------+---------+--------+--------+" + '\n',
"| 4th    | Win   | Lose   | Lose    | Draw   | Win    |" + '\n',"+--------+-------+--------+---------+--------+--------+" + '\n',
"| 5th    | Win   | Win    | Lose    | Lose   | Draw   |" + '\n',"+--------+-------+--------+---------+--------+--------+");
		process.exit(); 
	} 
	if (userchoicex == ai) {
		console.log("NO WINNER!")
		console.log('HMAC key:', key);  
	} else if (rightmoves.includes((userchoicex - ai) % 5)) {
		console.log("You win. AI choosed", originalArray[ai])
		console.log('HMAC key:', key);  
	} else { 
		console.log("AI wins with", originalArray[ai])  
		console.log('HMAC key:', key);
	} 
console.log("You choosed", originalArray[userchoicex]);
  rl.close();
});
