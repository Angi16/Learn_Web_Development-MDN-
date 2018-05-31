ERROR 1:

"Submit guess" doesn't work!

we get following error on console at line 86:
TypeError: guessSubmit.addeventListener is not a function

Solution:
At line 86 we have:
guessSubmit.addeventListener('click', checkGuess);

Changing "addeventListener" to "addEventListener" should fix this

=============================================================

ERROR 2:

next we get another error at line 78:
TypeError: lowOrHi is null

Solution:
--try searching for other instances of lowOrHi in the code. The earliest instance you'll find in the JavaScript is on line 48:

var lowOrHi = document.querySelector('lowOrHi');

--Add the following code on line 49:

console.log(lowOrHi);
