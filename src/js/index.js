import $ from 'jquery';
import '../less/style.less';
import '../css/style.css';
import '../index.html';
import '../search.html';
import '../roomDetalis.html';
import '../signUp.html';
import '../signIn.html';
import '../lib/moment.js'
import '../lib/moment-with-locales.min.js';
import '../lib/JqueryUI/jquery-ui.js';

import '../lib/bootstrapDatepicker/bootstrap-datepicker.js'
import '../lib/bootstrapDatepicker/bootstrap-datepicker.ru.min.js';
import '../lib/bootstrapDatepicker/bootstrap-datepicker3.css';
import '../lib/bootstrapDatepicker/bootstrap-datepicker3.standalone.css';

import '../lib/JqueryUI/jquery-ui.css';
import '../lib/JqueryUI/jquery-ui.theme.css';



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


	moment().format('YYYY MM DD');
	$('.calendarBootstrap').datepicker({
	});


	$('.input-wrapper').click(function(event){
		$('.calendarBootstrap').toggleClass('on');
		$('.calendarBootstrap').slideToggle();
	});
	$('.form__button').hover(function()
		{
			$('.arrow-3-iconcircle').css({"stroke-dashoffset":"0"});
			$('.arrow-3-icon').css('transform','translate3d(5px, 0, 0)');
		},
		function() {$('.arrow-3-iconcircle').css({"stroke-dashoffset":""});
			$('.arrow-3-icon').css('transform','translate3d(0, 0, 0)');}
		);


		$('.select-wrapper > select').click(function(){
			//$('.select-wrapper > select > option').remove();
			$(this).parent().children('.dropdown').slideToggle();
		});

		$('.plus').click(function(){
			let check = $(this).parent().children('span').text();
			$(this).parent().children('span').text(++check);
		});
		$('.min').click(function(){
			if($(this).parent().children('span').text() == 0) {
				$(this).parent().children('span').text('0');
			}
			else {
				let check = $(this).parent().children('span').text();
				$(this).parent().children('span').text(--check);
			}
		});

		$('.dropdown .clear').click(function(){
			$(this).parent().parent().children('.line').children('.wrapper-count').children('.count').text('0');
			$(this).parent().parent().parent().children('select').children('option').text("Сколько гостей");
		});

		$('.dropdown .apply').click(function(){
			let sumGuests = [];
			let one = $(this).parent().parent().children('.line').children('.wrapper-count').children('.count').text();
			console.log(one);
			for(let i=0;i<one.length;i++) {
				let push = $('.wrapper-count').eq(i).children('.count').text();
				sumGuests.push(push);
				var summElem = sumGuests.reduce(function(sum,curr){
					return parseInt(sum+parseInt(curr));
				},0); 
			}
			$(this).parent().parent().parent().children('select').children('option').text(summElem + " Гостя(Гостей)");
		});
		$('.form__button').click(function(e){
			e.preventDefault();
			window.location.href = ("http://localhost:8080/src/search.html");
		});


		let add = 0;
		let arr = [];
		$('.comfortsSelect .plus').click(function(){
			let text = $(this).parent().parent().children('span').text();
			let num = $(this).parent().children('.count').text();
			let length = $('.comfortsSelect__dropdown').children().length;
			let summ = [];
			for(let i=0;i<length;i++) {
				let text1 = $('.comfortsSelect__dropdown').children().eq(i).children('span').text().slice(0,4);
				let text2 = $('.comfortsSelect__dropdown').children().eq(i).children('.wrapper-count').children('.count').text();
				summ += text2 + " " + text1 + ". ";
			}	
			$('.comfortsSelect > .select-wrapper > select>option').text(summ);
		});

		$('.comfortsSelect .min').click(function(){
			let text = $(this).parent().parent().children('span').text();
			let num = $(this).parent().children('.count').text();
			let length = $('.comfortsSelect__dropdown').children().length;
			let summ = [];
			for(let i=0;i<length;i++) {
				let text1 = $('.comfortsSelect__dropdown').children().eq(i).children('span').text().slice(0,4);
				let text2 = $('.comfortsSelect__dropdown').children().eq(i).children('.wrapper-count').children('.count').text();
				summ += text2 + " " + text1 + ", ";
			}	
			$('.comfortsSelect > .select-wrapper > select>option').text(summ);
		});

		$('.aditionals__select-wrapper').click(function(){
			$('.dropdownAdditionals').slideToggle();
		});
		$('.breadCrumb > div >span>a').click(function(e){
			e.preventDefault();
			let length = $('.breadCrumb > div > span').length;
			console.log(length);
			for(let i=0;i<length;i++) {
				$('.breadCrumb>div>span').eq(i).children('a').removeClass('breadCrumb__active');
			}
			$(this).toggleClass('breadCrumb__active');
		});

		$('.hotels__table').click(function(){
			window.location.href = "roomDetalis.html";
		});

		$('.signUp').click(function(){
			window.location.href = 'signUp.html';
		});
		$('.signIn').click(function(){
			window.location.href = 'signIn.html';
		});
});




$(function(){
 
	 $( "#slider-range" ).slider({
		 range: true,
		 min: 0,
		 max: 15000,
		 values: [ 4000, 8500 ],
		 step: 100,
		 slide: function( event, ui ) {
		 $( ".rangePrices > div").eq(0).children('span').text(ui.values[ 0 ] + "₽ - " + ui.values[ 1 ] + "₽");
		 }
		 });
		 $( ".rangePrices > div").eq(0).children('span').text($( "#slider-range" ).slider( "values", 0 ) +
		 "₽  - " + $( "#slider-range" ).slider( "values", 1 ) + "₽" );
});



