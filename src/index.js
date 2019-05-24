$(document).ready(function(){
	$('.logo').click(function(){
		document.location.href = "index.html";
		});


	$("#navToggle").click(function() {
	    $(this).toggleClass("active");
	    $(".overlay").toggleClass("open");
	    // this line ▼ prevents content scroll-behind
	    $("body").toggleClass("locked"); 
	});
});