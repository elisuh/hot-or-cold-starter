
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	'use strict';
  	//define variables


  	// start new game

  	function newGame() {
  		//code 
  	}

  	// generate random number

  	function generateNumber() {
  		var number = Math.floor(Math.random() * 100) + 1;
  	}

  	// retrieve user's guess

  	function getGuess() {
  		var guess = document.getElementById("userGuess").elements[0].value;
  	}

  	// validate user's guess and return hot or cold

  	function checkGuess(guess) {
  		var guess = parseFloat(guess);
  		var differece;
  		if (guess == number){
		$("#feedback").text("You win!");
	} else if (guess > number) {
		difference = guess - number;
	} else (guess < number) {
		difference = number - guess;

	}

	if (difference >= 1 && difference <= 10) {
		$("#feedback").text("On fire!");
	} else if (difference < 10 && difference <= 25){
		$("#feedback").text("Hot");
	} else if (difference < 25 && difference <= 35){
		$("#feedback").text("Warm");
	} else if (difference < 35 && difference <= 50){
		$("#feedback").text("Cold");
	} else ( difference > 50){
		$("#feedback").text("Freezing");
	}


};

  	}

  	// count number of guesses

  	function countGuesses() {
  		count++;
  		$('#count').text(count);
  	}

   
   	// reset game

   	function resetVar() {
   		count = 0;
   	}

});


