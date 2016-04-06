  	// generate random number

  	function generateNumber() {
  		return Math.floor(Math.random() * 100) + 1;
  	}

  	// retrieve user's guess

  	//function getGuess() {
  	//	var guess = document.getElementById("userGuess").elements[0].value;
  //	}

  	

function checkGuess(guess) { // validate user's guess and return hot or cold
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
  } else if (difference > 5 && difference <= 15){
		$("#feedback").text("Hotter!"); // if diff btwn 6 and 15, hotter
	} else if (difference > 15 && difference <= 30){ 
		$("#feedback").text("Hot"); // if between 15 and 30, hot
	} else if (difference > 30 && difference <= 45){
		$("#feedback").text("Warm"); // if between 30 and 45, warm
	} else if (difference > 45 && difference <= 65){
		$("#feedback").text("Cold"); // if between 45 and 65, cold
	} else if ( difference > 65){
		$("#feedback").text("Freezing"); // if difference is over 65, freezing
	}
}

  	// count number of guesses

  	function countGuess() {
  		var count; // define count variable
  		count++; // increse count by 1
  		$('#count').text(count); // and add text to #count id
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
  
 	$("#guessButton").click(function() { //when guess button is clicked do these things
  		var guess = $("#userGuess").val(); // define variable and guess user enters
      	number = generateNumber(); //  can you define a variable as a function???
  		var listGuess = '<li>' + guess + '</li>'; // listGuess is user's guess with some list tags
  		$('#guessList').append(listGuess); // add user's guess to the list
  		$('#userGuess').val(''); // empty user guess field so they can add a new guess
  		countGuess(); // run countguess function
  		checkGuess(guess); // pass user's guess through checkguess function
  	});

   
   	// reset game

   	$(".new").on('click', function(){ // when new game button is clicked do the following
 		location.reload(true); // reload page
 		$('#guessList').append(''); // empty listguess field
    	generateNumber(); //generate a new random number
 	});

});

