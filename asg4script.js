var score1;
var score2;
var p1name;
var p2name;
var currentPlayer;

// Post from and handle JSON cards

function makeCard(card){
	$('.playingArea').append("<div class =' suit" + card.suit + " card'><span>" + card.value + "</span></div>");
}
		
function loadAllTheCards(e){
	e.preventDefault();
			
	$.post("http://ins.mtroyal.ca/~rhoar/COMP2511/process.php", function(data){
			
		var cardsList = $.parseJSON(data);
			
		for(var count = 0; count < cardsList.Deck.length; count++){
			makeCard(cardsList.Deck[count]);
		}
		
	});
			
}	

function clickCard(){
	$(this).find('span').css("visibility", "visible");
	var suit = $(this).attr("class").split(" ");
	var suitClass = suit[1];
	var suitValue = $(this).find('span').text();
	
	switch(suitClass){
	
		case "suit0":
		suitClass = "suit0flipped";
		break;
		
		case "suit1":
		suitClass = "suit1flipped";
		break;
		
		case "suit2":
		suitClass = "suit2flipped";
		break;
		
		case "suit3":
		suitClass = "suit3flipped";
		break;		
		
	} 
	
	$(this).addClass(suitClass);
	
}

function gameOver(){
	if(true)
		return true;
	else
		return false;
}

$(document).ready(function(){
	$('form').on("submit", loadAllTheCards);
	
	$('.playingArea').on("click", '.card', clickCard);
	
	currentPlayer = 0;
	
	while(!gameOver())
	{
		
		
		
	}
	
});






