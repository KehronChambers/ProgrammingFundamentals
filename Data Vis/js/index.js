
$(document).ready(function(){ //retrieved from https://www.w3schools.com/jquery/jquery_syntax.asp

	$("#modal").click(function() {
		
		
		$("#modal1").toggle();
		
		$("#mask").toggle();
		
	});//function opens modal popup when clicked and also toggles mask
	
$(".close-button").click(function() {
	
		$("#modal1").hide();
		
		$("#mask").hide();
})//function closes modal popup and hides the mask
	

$(document).ready(function(){ //retrieved from https://www.w3schools.com/jquery/jquery_syntax.asp

	$(".container").click(function() {
		
		//alert("button works");
		
		$("#modal2").toggle();
		
		$("#mask").toggle();
		
		$("#modal").toggle();
		
		$(".circle6").toggle();
		
		$(".circle7").toggle();
		
		$(".circle8").toggle();
		
		$("#button3").toggle();
		
		$("#button4").toggle();
		
		$("#button5").toggle();
		
		$("#button6").toggle();
		
		$("#button7").toggle();
		
	});//function opens modal popup when clicked and also toggles mask. it also hides elements on the page that interfere with the layout.
	
$(".close-button1").click(function() {
	
		$("#modal2").hide();
		
		$("#mask").hide();
	
		$("#modal").toggle();
	
		$(".circle6").toggle();
	
		$(".circle7").toggle();
	
		$(".circle8").toggle();
	
		$("#button3").toggle();
		
		$("#button4").toggle();
		
		$("#button5").toggle();
		
		$("#button6").toggle();
		
		$("#button7").toggle();
	
})//function closes modal popup and hides the mask as well as re display the previously hidden elements.
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
	
	
	
	
	
	
});