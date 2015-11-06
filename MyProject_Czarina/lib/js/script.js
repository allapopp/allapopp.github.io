
function changeThis(){

		 var formInput = document.getElementById('theInput').value;
	//	 document.getElementById('newText').innerHTML = formInput;
		$('<p>' + formInput + '</p>').appendTo('#newText');

		 $('#theInput').val("");
		}


$(document).keypress(function(e) {
    if(e.which == 13) {
        changeThis();
    }
});


$( window ).load(function() {
	$(".chat_input").focus();

	fadeOut();
	linksrechts();
	upTriagle ()
	upCircle ()
	upSquare ()
	upLine ()
	upRomb ()
	upWater ()
	linksrechts1(); //Index_0
	rechtslinks1(); //Index_0
	linksrechts2(); //Index_0
	rechtslinks2(); //Index_0
	linksrechts3(); //Index_0
	rechtslinks3(); //Index_0
	linksrechts4(); //Index_0
	rechtslinks4(); //Index_0
	linksrechts5(); //Index_0
	rechtslinks5(); //Index_0
	linksrechts6(); //Index_0
	rechtslinks6(); //Index_0
	linksrechts7(); //Index_0
	rechtslinks7(); //Index_0


var randomLeft;

	function linksrechts (){

		randomLeft = Math.random() * 20;
		$("#face").animate({left: '+=' + randomLeft },{duration: Math.random() * 1000 + 1000, complete: function(){
			rechtslinks();
	    }});	
	};

	function rechtslinks (){
		$("#face").animate({left: '-=' + randomLeft},{duration: Math.random() * 1000 + 1000, complete: function(){
			linksrechts();
	    }});	
	}; //Index



// Index_0

function fadeOut (){
		$("#background_index_0").animate({opacity: '0'},{duration: 3000, complete: function(){
			fadeIn();
	    }});	
};

function fadeIn (){
		$("#background_index_0").animate({opacity: '1'},{duration: 3000, complete: function(){
			fadeOut();
	    }});	
};	

var randomLeft1;
	function linksrechts1 (){
		randomLeft1 = Math.random() * 10;
		$("#grid_line_1").animate({left: '+=' + randomLeft1},{duration: Math.random() * 1000 + 1000, complete: function(){
			rechtslinks1();
	    }});	
	}; //line_1
	function rechtslinks1 (){
		$("#grid_line_1").animate({left: '-=' + randomLeft1},{duration: Math.random() * 1000 + 1000, complete: function(){
			linksrechts1();
	    }});	
	}; //line_1

var randomLeft2;
	function linksrechts2 (){
		randomLeft2 = Math.random() * 10;
		$("#grid_line_2").animate({left: '-=' + randomLeft2},{duration: Math.random() * 1000 + 1000, complete: function(){
			rechtslinks2();
	    }});	
	}; //line_2
	function rechtslinks2 (){
		$("#grid_line_2").animate({left: '+=' + randomLeft2},{duration: Math.random() * 1000 + 1000, complete: function(){
			linksrechts2();
	    }});	
	}; //line_2	

var randomLeft3;
	function linksrechts3 (){
		randomLeft3 = Math.random() * 10;
		$("#grid_line_3").animate({left: '-=' + randomLeft3},{duration: Math.random() * 1000 + 1000, complete: function(){
			rechtslinks3();
	    }});	
	}; //line_3
	function rechtslinks3 (){
		$("#grid_line_3").animate({left: '+=' + randomLeft3},{duration: Math.random() * 1000 + 1000, complete: function(){
			linksrechts2();
	    }});	
	}; //line_3

var randomLeft4;
	function linksrechts4 (){
		randomLeft4 = Math.random() * 10;
		$("#grid_line_4").animate({left: '-=' + randomLeft4},{duration: Math.random() * 1000 + 1000, complete: function(){
			rechtslinks4();
	    }});	
	}; //line_4
	function rechtslinks4 (){
		$("#grid_line_4").animate({left: '+=' + randomLeft4},{duration: Math.random() * 1000 + 1000, complete: function(){
			linksrechts4();
	    }});	
	}; //line_4

var randomLeft5;
	function linksrechts5 (){
		randomLeft5 = Math.random() * 10;
		$("#grid_line_5").animate({left: '+=' + randomLeft5},{duration: Math.random() * 1000 + 1000, complete: function(){
			rechtslinks5();
	    }});	
	}; //line_5
	function rechtslinks5 (){
		$("#grid_line_5").animate({left: '-=' + randomLeft5},{duration: Math.random() * 1000 + 1000, complete: function(){
			linksrechts5();
	    }});	
	}; //line_5

var randomLeft6;
	function linksrechts6 (){
		randomLeft6 = Math.random() * 10;
		$("#grid_line_6").animate({left: '-=' + randomLeft6},{duration: Math.random() * 1000 + 1000, complete: function(){
			rechtslinks6();
	    }});	
	}; //line_6
	function rechtslinks6 (){
		$("#grid_line_6").animate({left: '+=' + randomLeft6},{duration: Math.random() * 1000 + 1000, complete: function(){
			linksrechts6();
	    }});	
	}; //line_6

var randomLeft7;
	function linksrechts7 (){
		randomLeft7 = Math.random() * 10;
		$("#grid_line_7").animate({left: '+=' + randomLeft7},{duration: Math.random() * 1000 + 1000, complete: function(){
			rechtslinks7();
	    }});	
	}; //line_7
	function rechtslinks7 (){
		$("#grid_line_7").animate({left: '-=' + randomLeft7},{duration: Math.random() * 1000 + 1000, complete: function(){
			linksrechts7();
	    }});	
	}; //line_7

//Index_0


var stepLine;
var durationLine;

	function upLine (){

		stepLine = Math.random() * 10;
		durationLine = Math.random() * 1000 + 1000;

		$(".lineSmall").animate({top: '+=' + stepLine },{duration: durationLine, complete: function(){
			downLine();
	    }});

	};

	function downLine (){
		$(".lineSmall").animate({top: '-=' + stepLine},{duration: durationLine, complete: function(){
			upLine();
	    }});
		
	};

var stepTriagle;
var durationTriagle;

function upTriagle (){

		stepTriagle = Math.random() * 10;
		durationTriagle = Math.random() * 1000 + 1000;

		$(".triangleSmall").animate({top: '+=' + stepTriagle },{duration: durationTriagle, complete: function(){
			downTriagle();
	    }});

	};

	function downTriagle (){
		$(".triangleSmall").animate({top: '-=' + stepTriagle},{duration: durationTriagle, complete: function(){
			upTriagle();
	    }});
		
	};


var stepCircle;
var durationCircle;

function upCircle (){

		stepCircle = Math.random() * 10;
		durationCircle = Math.random() * 1000 + 1000;

		$(".circleSmall").animate({top: '+=' + stepCircle },{duration: durationCircle, complete: function(){
			downCircle();
	    }});

	};

	function downCircle (){
		$(".circleSmall").animate({top: '-=' + stepCircle},{duration: durationCircle, complete: function(){
			upCircle();
	    }});
		
	};



var stepSquare;
var durationSquare;

function upSquare (){

		stepSquare = Math.random() * 10;
		durationSquare = Math.random() * 1000 + 1000;

		$(".squareSmall").animate({top: '+=' + stepSquare },{duration: durationSquare, complete: function(){
			downSquare();
	    }});

	};

	function downSquare (){
		$(".squareSmall").animate({top: '-=' + stepSquare},{duration: durationSquare, complete: function(){
			upSquare();
	    }});
		
	};



var stepRomb;
var durationRomb;

function upRomb (){

		stepRomb = Math.random() * 10;
		durationRomb = Math.random() * 1000 + 1000;

		$(".rombSmall").animate({top: '+=' + stepRomb },{duration: durationRomb, complete: function(){
			downRomb();
	    }});

	};

	function downRomb (){
		$(".rombSmall").animate({top: '-=' + stepRomb},{duration: durationRomb, complete: function(){
			upRomb();
	    }});
		
	};


var stepWater;
var durationWater;

function upWater (){

		stepWater = Math.random() * 10;
		durationWater = Math.random() * 1000 + 1000;

		$(".waterSmall").animate({top: '+=' + stepWater },{duration: durationWater, complete: function(){
			downWater();
	    }});

	};

	function downWater (){
		$(".waterSmall").animate({top: '-=' + stepWater},{duration: durationWater, complete: function(){
			upWater();
	    }});
		
	};

});














