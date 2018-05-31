Using Stylesheets

The styleSheets property on the document object returns a list of the stylesheets that have been loaded on that document. We can access these stylesheets and their rules individually using the stylesheet, style, and CSSRule objects, as demonstrated in this example, which prints out all of the style rule selectors to the console.


var ss = document.styleSheets;

for(var i = 0; i < ss.length; i++) {
  for(var j = 0; j < ss[i].cssRules.length; j++) {
    dump( ss[i].cssRules[j].selectorText + "\n" );
  }
}


<!-- For a document with a single stylesheet in which the following three rules are defined:  -->

body { background-color: darkblue; }
p { font-face: Arial; font-size: 10pt; margin-left: .125in; }
#lumpy { display: none; }

<!--This script outputs the following: -->

BODY
P
#LUMPY