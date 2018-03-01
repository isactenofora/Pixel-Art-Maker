// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

//define variables for DOM elements

 var table = $('#pixel_canvas');
 var gridHeight = $ ('#input_height').val();
 var gridWidth = $('#input_width').val();

 table.children().remove(); //remove child table from display and release any allocated memory

// loops to delete and create the table based on the user input, event listeners to set values dynamically and conditional to limite the size

 if (gridHeight<=30 && gridWidth<=30) {
  for (x = 0; x < gridHeight; x++) {
    table.append('<tr></tr>');
  }
  var rows = $('tr');

  for (y = 0; y < gridWidth; y++) {
   rows.append('<td></td>');
  }
 } else {
	 alert ("No size more than 30x30!");
 }

 var cell  = table.find('td');

// When td is clicked by the user, change color of td
 cell.click(function() {
 // Select color input

 var color = $("#colorPicker").val();
 $(this).attr('bgcolor', color);

});

}

// When size is submitted by the user, call makeGrid()
var button = $('input[type="submit"]');
button.click(function(event) {
  event.preventDefault();
  makeGrid();
});

function reset() {
	var table = $('#pixel_canvas').empty();
	var gridHeight = $ ('#input_height').replaceWith('<input type="number" id="input_height" name="height" min="1" value="1">');
  var gridWidth = $('#input_width').replaceWith('<input type="number" id="input_width" name="width" min="1" value="1">');
  var color= $ ('#colorPicker').replaceWith('<input type="color" id="colorPicker">');

}

var clean= $('input[type="button"]');
clean.click(function(event){
	event.preventDefault();
  reset();
});
