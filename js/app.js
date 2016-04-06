  	// generate random number

  	function generateNumber() {
  		var number = Math.floor(Math.random() * 100) + 1;
  	}

  	// retrieve user's guess

  	//function getGuess() {
  	//	var guess = document.getElementById("userGuess").elements[0].value;
  //	}

  	// validate user's guess and return hot or cold

function checkGuess(guess) {
  		var guess = parseFloat(guess); // convert gess from string to number
  		var differece;
      	var number;
  if (guess == number){
		$("#feedback").text("You win!"); // if guess is the same as random number, you win!
	} else if (guess > number) {
		difference = guess - number; // calculate difference if guess is great than number
	} else if (guess < number) {
		difference = number - guess; // calculate different if guess is less than number
  }
  if (difference >= 1 && difference <= 5){
		$("#feedback").text("On fire!"); // if calculated difference is 1-5 away from guess, you're close
  } else if (difference >= 6 && difference <= 15){
		$("#feedback").text("Hotter!"); // if calculated guess is 
	} else if (difference > 15 && difference <= 30){
		$("#feedback").text("Hot");
	} else if (difference > 31 && difference <= 45){
		$("#feedback").text("Warm");
	} else if (difference > 46 && difference <= 65){
		$("#feedback").text("Cold");
	} else if ( difference > 65){
		$("#feedback").text("Freezing");
	}
}

  	// count number of guesses

  	function countGuess() {
  		count++;
  		$('#count').text(count);
  	}



$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	// start new game
  
 	$("#guessButton").click(function() {
  		var guess = $("#userGuess").val();
      var number = generateNumber();
  		var listGuess = '<li>' + guess + '</li>';
  		$('#guessList').append(listGuess);
  		$('#userGuess').val('');
  		countGuess();
  		checkGuess(guess);
  	});

   
   	// reset game

   	$(".new").on('click', function(){
 		location.reload(true);
 		numberOfGuesses = 0;
    guesses = [];
 	});

});

