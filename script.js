// JavaScript Document
$(function(){
	$(".menuicon").click(function(){
		$("#menu,#close").toggleClass("displaynone");
		$(".spmenu").toggleClass("opened");
		$(".menu-contents").toggleClass("displaynone");
		$(".menu-contents").toggleClass("fadedisplay");
	});
});

$(function() {
  $('.carousel-wrapper').slick({
	  autoplay:true,
	  centerMode: true,
	  centerPadding: '12%',
	  slidesToShow: 1,
  }); 
});