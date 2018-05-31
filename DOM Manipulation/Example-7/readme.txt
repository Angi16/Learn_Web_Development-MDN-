Displaying Event Object Properties
Edit

This example uses DOM methods to display all the properties of the window.onload event object and their values in a table. It also shows a useful technique of using a for..in loop to iterate over the properties of an object to get their values.

The properties of event objects differs greatly between browsers, the WHATWG DOM Standard lists the standard properties, however many browsers have extended these greatly.

Put the following code into a blank text file and load it into a variety of browsers, you'll be surprised at the different number and names of properties. You might also like to add some elements in the page and call this function from different event handlers.