// JavaScript Document
$(function(){
	$(".menuicon").click(function(){
		$("#menu,#close").toggleClass("displaynone");
		$(".spmenu").toggleClass("opened");
		$(".menu-contents").toggleClass("displaynone");
		$(".menu-contents").toggleClass("fadedisplay");
	});
});

$(function(){
	$(".work").on('mouseover', function(){
		$(this).find(".work-name").addClass("inv");
		$(this).find(".released").addClass("released-inv");
		$(this).find(".study").addClass("study-inv");
		$(this).find(".purple").addClass("exp");
	});
	$(".work").on('mouseout', function(){
		$(this).find(".work-name").removeClass("inv");
		$(this).find(".released").removeClass("released-inv");
		$(this).find(".study").removeClass("study-inv");
		$(this).find(".purple").removeClass("exp");
	});
});