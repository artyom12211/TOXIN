import $ from 'jquery';
import '../less/style.less';
import '../css/style.css';
import '../index.html';

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
	$('.select-arrow').click(function(e){
		let kek = $(this).parent().children('select');
		console.log(kek);
		kek.change();
	});
	$(window).dblclick(function(e){
	})
});

