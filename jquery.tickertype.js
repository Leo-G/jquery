// when the DOM is ready...
var tickerIterations = 0;
var currentTickerIteration = 0;
$(document).ready(function () {
  // load the ticker
	createTicker();

}); 

function createTicker(){
	if (typeof $('#ticker-area').attr('alt') != 'undefined'){
		tickerIterations = $('#ticker-area').attr('alt');
	}
	// put all list elements within #ticker-area into array
	var tickerLIs = $("#ticker-area ul").children();
	tickerItems = new Array();
	tickerLIs.each(function(el) {
		tickerItems.push( jQuery(this).html() );
	});
	i = 0
	rotateTicker();
}

function rotateTicker(){
	if( i == tickerItems.length ){
	  i = 0;
		if( tickerIterations > 0 ){
			console.log( "tickerIterations: " +tickerIterations );
			currentTickerIteration++;
			console.log( "currentTickerIteration: " + currentTickerIteration );
			if( currentTickerIteration >= tickerIterations ){
				console.log( "Done iterating" );
				return false;
			}
		}
	}
  tickerText = tickerItems[i];
	c = 0;
	typetext();
	setTimeout( "rotateTicker()", 5000 );
	i++;
}

var isInTag = false;
function typetext() {	
	var thisChar = tickerText.substr(c, 1);
	if( thisChar == '<' ){ isInTag = true; }
	if( thisChar == '>' ){ isInTag = false; }
	$('#ticker-area').html("&nbsp;" + tickerText.substr(0, c++));
	if(c < tickerText.length+1)
		if( isInTag ){
			typetext();
		}else{
			setTimeout("typetext()", 28);
		}
	else {
		c = 1;
		tickerText = "";
	}	
}

//Ticker-area1
var tickerIterations = 0;
var currentTickerIteration = 0;
$(document).ready(function () {
  // load the ticker
	createTicker();

}); 

function createTicker(){
	if (typeof $('#ticker-area1').attr('alt') != 'undefined'){
		tickerIterations = $('#ticker-area1').attr('alt');
	}
	// put all list elements within #ticker-area1 into array
	var tickerLIs = $("#ticker-area1 ul").children();
	tickerItems = new Array();
	tickerLIs.each(function(el) {
		tickerItems.push( jQuery(this).html() );
	});
	i = 0
	rotateTicker();
}

function rotateTicker(){
	if( i == tickerItems.length ){
	  i = 0;
		if( tickerIterations > 0 ){
			console.log( "tickerIterations: " +tickerIterations );
			currentTickerIteration++;
			console.log( "currentTickerIteration: " + currentTickerIteration );
			if( currentTickerIteration >= tickerIterations ){
				console.log( "Done iterating" );
				return false;
			}
		}
	}
  tickerText = tickerItems[i];
	c = 0;
	typetext();
	setTimeout( "rotateTicker()", 5000 );
	i++;
}

var isInTag = false;
function typetext() {	
	var thisChar = tickerText.substr(c, 1);
	if( thisChar == '<' ){ isInTag = true; }
	if( thisChar == '>' ){ isInTag = false; }
	$('#ticker-area1').html("&nbsp;" + tickerText.substr(0, c++));
	if(c < tickerText.length+1)
		if( isInTag ){
			typetext();
		}else{
			setTimeout("typetext()", 28);
		}
	else {
		c = 1;
		tickerText = "";
	}	
}
//Ticker-area 2
// when the DOM is ready...
var tickerIterations = 0;
var currentTickerIteration = 0;
$(document).ready(function () {
  // load the ticker
	createTicker();

}); 

function createTicker(){
	if (typeof $('#ticker-area2').attr('alt') != 'undefined'){
		tickerIterations = $('#ticker-area2').attr('alt');
	}
	// put all list elements within #ticker-area2 into array
	var tickerLIs = $("#ticker-area2 ul").children();
	tickerItems = new Array();
	tickerLIs.each(function(el) {
		tickerItems.push( jQuery(this).html() );
	});
	i = 0
	rotateTicker();
}

function rotateTicker(){
	if( i == tickerItems.length ){
	  i = 0;
		if( tickerIterations > 0 ){
			console.log( "tickerIterations: " +tickerIterations );
			currentTickerIteration++;
			console.log( "currentTickerIteration: " + currentTickerIteration );
			if( currentTickerIteration >= tickerIterations ){
				console.log( "Done iterating" );
				return false;
			}
		}
	}
  tickerText = tickerItems[i];
	c = 0;
	typetext();
	setTimeout( "rotateTicker()", 5000 );
	i++;
}

var isInTag = false;
function typetext() {	
	var thisChar = tickerText.substr(c, 1);
	if( thisChar == '<' ){ isInTag = true; }
	if( thisChar == '>' ){ isInTag = false; }
	$('#ticker-area21').html("&nbsp;" + tickerText.substr(0, c++));
	if(c < tickerText.length+1)
		if( isInTag ){
			typetext();
		}else{
			setTimeout("typetext()", 28);
		}
	else {
		c = 1;
		tickerText = "";
	}	
}




