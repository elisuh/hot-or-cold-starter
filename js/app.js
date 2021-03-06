var number = generateNumber();
var count = 0;

// return generated random number
function generateNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// returning user's guess
function getGuess() {
    return parseInt($('#userGuess').val());
}

// validate user's guess and return hot or cold
function checkGuess() {
  var guess = getGuess(); 
  var difference = 0;
  
  console.log(guess);
  
  if (guess == number) {
    return $("#feedback").text("You win!"); // if guess is the same as random number, you win!
  } else if (guess > number) {
    difference = guess - number; // calculate difference if guess is great than number
  } else if (guess < number) {
    difference = number - guess; // calculate different if guess is less than number
  }
  
  console.log(difference);
  
  if (difference >= 1 && difference <= 5) {
    $("#feedback").text("On fire!"); // if calculated difference is 1-5 away from guess, you're close
  } else if (difference > 5 && difference <= 15) {
    $("#feedback").text("Hotter!"); // if diff btwn 6 and 15, hotter
  } else if (difference > 15 && difference <= 30) {
    $("#feedback").text("Hot"); // if between 15 and 30, hot
  } else if (difference > 30 && difference <= 45) {
    $("#feedback").text("Warm"); // if between 30 and 45, warm
  } else if (difference > 45 && difference <= 65) {
    $("#feedback").text("Cold"); // if between 45 and 65, cold
  } else if (difference > 65) {
    $("#feedback").text("Freezing"); // if difference is over 65, freezing
  }
}

// count number of guesses
function countGuess() {
  count++; // increse count by 1
  $('#count').text(count); // add text to #count id
}



$(document).ready(function() {

  /*--- Display information modal box ---*/
  $(".what").click(function() {
    $(".overlay").fadeIn(1000);

  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function() {
    $(".overlay").fadeOut(1000);
  });

  // start new game

  $("#guessButton").click(function() { //when guess button is clicked do these things
    var guess = getGuess(); // define variable and guess user enters
    // var number = generateNumber(); //  can you define a variable as a function???
    var listGuess = '<li>' + guess + '</li>'; // listGuess is user's guess with some list tags
    if (isNaN(guess)) { // check for NaN
    $("#feedback").text("That is not a number!"); // if NaN, alert user
  }
    else { $('#guessList').append(listGuess); } // add user's guess to the list
    countGuess(); // run countguess function
    checkGuess(); // pass user's guess through checkguess function
    $('#userGuess').val('');// empty user guess field so they can add a new guess
  });


  // reset game

  $(".new").on('click', function() {// when new game button is clicked do the following
    location.reload(true);
    //reload page
    $('#guessList').innerHTML = ""; // empty listguess field
    // Reset Guess number on page
    $('#count').text = "0";
    //Reset Guess Count in javascript
    count = 0;
    // Feedback needs to equal Guess
    $('#feedback').innerHTML = "Make your Guess!";
    // Generate New Random Number
    number = generateNumber(); //generate a new random number
  });

});
