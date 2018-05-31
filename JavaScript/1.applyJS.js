<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <title>Apply JavaScript example</title>
  </head>
  <body>
    <button>Click me</button>
	<script>

	function createParagraph() {
		var para = document.createElement('p');
		para.textContent = 'You clicked the button!';
		document.body.appendChild(para);
	}

	var buttons = document.querySelectorAll('button');

	for (var i = 0; i < buttons.length ; i++) {
		buttons[i].addEventListener('click', createParagraph);
	}

	</script>
  </body>
</html>
