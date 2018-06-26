


// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
         event.preventDefault(); //We prvent the default event of submit

         //We get the value our hight and width
    var height = $('#inputHeight').val();
    var width  = $('#inputWeight').val();   

    //We make the Grid call
    makeGrid(height, width);
    
})

function makeGrid(a,b) {
	//Remove any previouse table rows created.
	$('tr').remove();

// Your code goes here!
//We make our grid using a for nested loop

for(var i = 1; i <= a; i++){
  //We take our pixel art table id and append the table rows and colums dynamically.
  $('#pixelCanvas').append('<tr id = table' + i + '></tr>' );

  for(var s = 1; s <= b; s++){
      $('#table' + i).append('<td></td>');
  }
}

//We pick a color and apply it to a cell when it is clicked

$('td').click(function addColor(){

	//We set the color and get the value
	var color = $('#colorPicker').val();
    //We look to see if the cell has an attirbute.
	if($(this).attr('style')){

		//If it does have a previous color we remove it.
	   $(this).removeAttr('style');	
      //And we give it the seleced color.
	}else{
		$(this).attr('style', 'background-color:' + color);
	}

})
}

//Function to get year and make it dynamic at the footer

function thisYear(year){
  //We create an instance of the date

  var thisYear = new Date();

  //We make the year dynamic
  var myYear = thisYear.getFullYear();

  

  return myYear;
}
