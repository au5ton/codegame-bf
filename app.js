var sha1 = require('sha1');
var bruteForce = require('node-bruteforce');
var NanoTimer = require('nanotimer');
var bigInt = require('big-integer');

var hash = sha1('HELLO');

var my_code = 'ab13a4a';
var guess_count = bigInt(0);

var guessTime = new NanoTimer();
var guessSpeedTicker = new NanoTimer();

function interval(func, wait, times){
    var interv = function(w, t){
        return function(){
            if(typeof t === "undefined" || t-- > 0){
                setTimeout(interv, w);
                try{
                    func.call(null);
                }
                catch(e){
                    t = 0;
                    throw e.toString();
                }
            }
        };
    }(wait, times);

    setTimeout(interv, wait);
};


var ALPHABET = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
var HEX_ALPHABET = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f'
];

// guessSpeedTicker.setInterval(function(){
//     console.log('Current guess speed: '+guess_count+' g/s');
//     guess_count = 0;
// }, '', '1s');

// interval(function(){
//     //console.log('Current guess speed: '+guess_count+' g/s');
//     console.log('1s');
//     //guess_count = 0;
// }, 1000, Number.MAX_SAFE_INTEGER);

/*guessTime.time(loadFile, '', 'u', function(time){
    console.log("It took " + time + " microseconds to read that file!");
});*/

var startTime = new Date();

bruteForce(ALPHABET, function(value){
    guess_count = guess_count.add(1);
    //console.log(JSON.stringify(value));
	if(value == my_code) {
		console.log('Correct value of the hash was: ' + value);
        var duration = ((new Date() - startTime) / 1000);
        console.log('Took '+duration+' seconds to complete, \nmade '+guess_count.toString()+' guesses total, \naveraging at '+guess_count.divide(duration)+' guesses per second.');
		return true;
        //guessSpeedTicker.clearInterval();
	}

	return false;
});


/*

Communication:

POST { game_code:'45j7tiy', game_code_submit:'Kill this Fluffer'} ==>> status code 302

*/
