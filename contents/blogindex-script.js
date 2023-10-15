// JavaScript Document



$(function(){
if (location.search == "?index-notification"){
	$(".blog-index").addClass("hidden");
	$(".notification").removeClass("hidden");
	$(".pagenation").addClass("hidden");
} else if(location.search == "?index-sanshin"){
	$(".blog-index").addClass("hidden");
	$(".sanshin").removeClass("hidden");
	$(".pagenation").addClass("hidden");
} else if(location.search == "?index-diary"){
	$(".blog-index").addClass("hidden");
	$(".diary").removeClass("hidden");
	$(".pagenation").addClass("hidden");
} else if(location.search == "?index-others"){
	$(".blog-index").addClass("hidden");
	$(".others").removeClass("hidden");
	$(".pagenation").addClass("hidden");
} else if(location.search == "?index-202310"){
	$(".blog-index").addClass("hidden");
	$(".202310").removeClass("hidden");
	$(".pagenation").addClass("hidden");
} else if(location.search == "?index-202311"){
	$(".blog-index").addClass("hidden");
	$(".202311").removeClass("hidden");
	$(".pagenation").addClass("hidden");
}
	
	
	$("#page1").click(function(){
		$(".blog-index").addClass("hidden");
		$(".index1").removeClass("hidden");
		$(".pagebtn").removeClass("now");
		$("#page1").addClass("now")
	});
	
	$("#page2").click(function(){
		$(".blog-index").addClass("hidden");
		$(".index2").removeClass("hidden");
		$(".pagebtn").removeClass("now");
		$("#page2").addClass("now")
	});
	
	$("#all").click(function(){
		$(".blog-index").addClass("hidden");
		$(".index1").removeClass("hidden");
		//2ページ以上になったら外す
		/*$(".pagenation").removeClass("hidden");*/
	});
	
	$("#notification").click(function(){
		$(".blog-index").addClass("hidden");
		$(".notification").removeClass("hidden");
		$(".pagenation").addClass("hidden");
	});
	
	$("#sanshin").click(function(){
		$(".blog-index").addClass("hidden");
		$(".sanshin").removeClass("hidden");
		$(".pagenation").addClass("hidden");
	});
	
	$("#diary").click(function(){
		$(".blog-index").addClass("hidden");
		$(".diary").removeClass("hidden");
		$(".pagenation").addClass("hidden");
	});
	
	$("#others").click(function(){
		$(".blog-index").addClass("hidden");
		$(".others").removeClass("hidden");
		$(".pagenation").addClass("hidden");
	});
	
	$("#202310").click(function(){
		$(".blog-index").addClass("hidden");
		$(".202310").removeClass("hidden");
		$(".pagenation").addClass("hidden");
	});
	
	$("#202311").click(function(){
		$(".blog-index").addClass("hidden");
		$(".202311").removeClass("hidden");
		$(".pagenation").addClass("hidden");
	});

});