var sha1 = require('sha1');
var bruteForce = require('node-bruteforce');

var hash = sha1("HELLO");

var my_code = 'ab13a4a';
var guess_count = 0;

var ALPHABET = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
var HEX_ALPHABET = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f'
];

var guessSpeedTicker = setInterval(function(){
    console.log('Current guess speed: '+guess_count+' g/s');
    guess_count = 0;
},1000);

bruteForce(ALPHABET, function(value){
    guess_count++;
	// if( hash == sha1(value) ) {
	// 	console.log('Correct value of the hash was: ' + value);
	// 	return true;
	// }
    //
	// return false;
});


/*

Communication:

POST { game_code:'45j7tiy', game_code_submit:'Kill this Fluffer'} ==>> status code 302

*/
