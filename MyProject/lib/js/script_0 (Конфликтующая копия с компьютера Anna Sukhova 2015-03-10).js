var saveShapes = new Array();
var key; 

$(window).load(function() {

var positionArray = new Array();



$('#grid').on('click', function(e) {
    //$('.box').removeClass('box').addClass('box_slctd');
    //e.preventDefault();
    //alert("7 more");
    
});


$( ".box" ).on( "click", function(e) {

	var value = $(this).attr('class').toString();

	
	if ($(this).hasClass('unslctd')) {
		if (saveShapes.length < 8) {
		    $(this).removeClass('unslctd').addClass('slctd');
		    var value = $(this).attr('class').toString();
		    saveShapes.push(value);
		} else {
			alert('You have selected 8 shapes');
		}
	} else {
	    $(this).removeClass('slctd').addClass('unslctd');
	    var index = saveShapes.indexOf(value);
		saveShapes.splice(index, 1);
        
   	}
    
    console.log(saveShapes.toString());

    
});

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

    var randomLeft1;

    function linksrechts1() {
        randomLeft1 = Math.random() * 10;
        $("#grid_line_1").animate({
            left: '+=' + randomLeft1
        }, {
            duration: Math.random() * 1000 + 1000,
            complete: function() {
                rechtslinks1();
            }
        });
    }; //line_1
    function rechtslinks1() {
        $("#grid_line_1").animate({
            left: '-=' + randomLeft1
        }, {
            duration: Math.random() * 1000 + 1000,
            complete: function() {
                linksrechts1();
            }
        });
    }; //line_1

    var randomLeft2;

    function linksrechts2() {
        randomLeft2 = Math.random() * 10;
        $("#grid_line_2").animate({
            left: '-=' + randomLeft2
        }, {
            duration: Math.random() * 1000 + 1000,
            complete: function() {
                rechtslinks2();
            }
        });
    }; //line_2
    function rechtslinks2() {
        $("#grid_line_2").animate({
            left: '+=' + randomLeft2
        }, {
            duration: Math.random() * 1000 + 1000,
            complete: function() {
                linksrechts2();
            }
        });
    }; //line_2 

    var randomLeft3;

    function linksrechts3() {
        randomLeft3 = Math.random() * 10;
        $("#grid_line_3").animate({
            left: '-=' + randomLeft3
        }, {
            duration: Math.random() * 1000 + 1000,
            complete: function() {
                rechtslinks3();
            }
        });
    }; //line_3
    function rechtslinks3() {
        $("#grid_line_3").animate({
            left: '+=' + randomLeft3
        }, {
            duration: Math.random() * 1000 + 1000,
            complete: function() {
                linksrechts2();
            }
        });
    }; //line_3

    var randomLeft4;

    function linksrechts4() {
        randomLeft4 = Math.random() * 10;
        $("#grid_line_4").animate({
            left: '-=' + randomLeft4
        }, {
            duration: Math.random() * 1000 + 1000,
            complete: function() {
                rechtslinks4();
            }
        });
    }; //line_4
    function rechtslinks4() {
        $("#grid_line_4").animate({
            left: '+=' + randomLeft4
        }, {
            duration: Math.random() * 1000 + 1000,
            complete: function() {
                linksrechts4();
            }
        });
    }; //line_4

    var randomLeft5;

    function linksrechts5() {
        randomLeft5 = Math.random() * 10;
        $("#grid_line_5").animate({
            left: '+=' + randomLeft5
        }, {
            duration: Math.random() * 1000 + 1000,
            complete: function() {
                rechtslinks5();
            }
        });
    }; //line_5
    function rechtslinks5() {
        $("#grid_line_5").animate({
            left: '-=' + randomLeft5
        }, {
            duration: Math.random() * 1000 + 1000,
            complete: function() {
                linksrechts5();
            }
        });
    }; //line_5

    var randomLeft6;

    function linksrechts6() {
        randomLeft6 = Math.random() * 10;
        $("#grid_line_6").animate({
            left: '-=' + randomLeft6
        }, {
            duration: Math.random() * 1000 + 1000,
            complete: function() {
                rechtslinks6();
            }
        });
    }; //line_6
    function rechtslinks6() {
        $("#grid_line_6").animate({
            left: '+=' + randomLeft6
        }, {
            duration: Math.random() * 1000 + 1000,
            complete: function() {
                linksrechts6();
            }
        });
    }; //line_6

});





