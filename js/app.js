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
  		var guess = parseFloat(guess);
  		var differece;
      var number;
  if (guess == number){
		$("#feedback").text("You win!");
	} else if (guess > number) {
		difference = guess - number;
	} else if (guess < number) {
		difference = number - guess;
  }
  if (difference >= 1 && difference <= 5){
		$("#feedback").text("On fire!");
  } else if (difference >= 1 && difference <= 15){
		$("#feedback").text("Hotter!");
	} else if (difference < 15 && difference <= 30){
		$("#feedback").text("Hot");
	} else if (difference < 30 && difference <= 45){
		$("#feedback").text("Warm");
	} else if (difference < 50 && difference <= 65){
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

