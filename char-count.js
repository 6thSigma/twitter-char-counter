$(document).on('keyup keydown', '#YOUR-FIELD-ID-HERE', function(e) {
	
  // Lengths
  var maxLen = 140;
  var warnLen = 10;
  
  // Colors
  var defaultTextColor = {'color': ''};
  var warnTextColor = {'color': 'red'};
  var negTextColor = {'color': 'DarkRed'};
  
  var left = maxLen - $(this).val().length;
  if(left > warnLen) {
  	$('#char-count').html(left).css(defaultTextColor);
  }
  else if(left > 0){
  	$('#char-count').html(left).css(warnTextColor);
  }
  else {
  	$('#char-count').html(left).css(negTextColor);
  }
});
