<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">

    <title>Number guessing game</title>

    <style>
      html {
        font-family: sans-serif;
      }

      body {
        width: 50%;
        max-width: 800px;
        min-width: 480px;
        margin: 0 auto;
      }

      .lastResult {
        color: white;
        padding: 3px;
      }
    </style>
  </head>

  <body>
    <h1>Number guessing game</h1>

    <p>We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer. We'll tell you if your guess was too high or too low.</p>

    <div class="form">
      <label for="guessField">Enter a guess: </label><input type="text" id="guessField" class="guessField">
      <input type="submit" value="Submit guess" class="guessSubmit">
    </div>

    <div class="resultParas">
      <p class="guesses"></p>
      <p class="lastResult"></p>
      <p class="lowOrHi"></p>
    </div>

    <script>

      var randomNumber = Math.floor(Math.random() * 100) + 1;

		var guesses = document.querySelector('.guesses');
		var lastResult = document.querySelector('.lastResult');
		var lowOrHi = document.querySelector('.lowOrHi');

		var guessSubmit = document.querySelector('.guessSubmit');
		var guessField = document.querySelector('.guessField');

		var guessCount = 1;
		var resetButton;
		
		function checkGuess() {
			var userGuess = Number(guessField.value);
			if (guessCount === 1) {
				guesses.textContent = 'Previous guesses: ';
			}
			guesses.textContent += userGuess + ' ';
 
			if (userGuess === randomNumber) {
				lastResult.textContent = 'Congratulations! You got it right!';
				lastResult.style.backgroundColor = 'green';
				lowOrHi.textContent = '';
				setGameOver();
			} else if (guessCount === 10) {
				lastResult.textContent = '!!!GAME OVER!!!';
				setGameOver();
			} else {
				lastResult.textContent = 'Wrong!';
				lastResult.style.backgroundColor = 'red';
				if(userGuess < randomNumber) {
				lowOrHi.textContent = 'Last guess was too low!';
				} else if(userGuess > randomNumber) {
					lowOrHi.textContent = 'Last guess was too high!';
				}
			}
 
		guessCount++;
		guessField.value = '';
		guessField.focus();
	}
	guessSubmit.addEventListener('click', checkGuess);
	
	function setGameOver() {
		guessField.disabled = true;
		guessSubmit.disabled = true;
		resetButton = document.createElement('button');
		resetButton.textContent = 'Start new game';
		document.body.appendChild(resetButton);
		resetButton.addEventListener('click', resetGame);
	}
	
	function resetGame() {
		guessCount = 1;

		var resetParas = document.querySelectorAll('.resultParas p');
		for (var i = 0 ; i < resetParas.length ; i++) {
			resetParas[i].textContent = '';
		}

		resetButton.parentNode.removeChild(resetButton);

		guessField.disabled = false;
		guessSubmit.disabled = false;
		guessField.value = '';
		guessField.focus();

		lastResult.style.backgroundColor = 'white';

		randomNumber = Math.floor(Math.random() * 100) + 1;
	}

    </script>
  </body>
</html>
