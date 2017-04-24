$(document).ready(function(){
		var quoteSource=[
    {
      quote: "Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more." ,
      name:  "Nicola Tesla"
    },
      {
      quote: "The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane." ,
      name:  "Nicola Tesla"
    },
      {
      quote: "The present is theirs; the future, for which I really worked, is mine." ,
      name:  "Nicola Tesla"
    },
      {
      quote: "I do not think you can name many great inventions that have been made by married men." ,
      name:  "Nicola Tesla"
    }
   ];


		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(var i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');

        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });

			break;
		};//end for loop

	});//end quoteButton function


});//end document ready
