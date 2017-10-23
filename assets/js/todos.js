//Checking Off Specific Todos By Clicking
$("li").click(function() {
	//new version
	$(this).toggleClass("completed")

	//old version
	// //if li is gray
	// if($(this).css("color") == "rgb(128, 128, 128)") {
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none" 
	// 	})
	// } else {
	// 	//property names as string
	// 	// $(this).css({
	// 	// 	"color": "gray",
	// 	// 	"text-decoration": "line-through" 
	// 	// })

	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through" 
	// 	})
	// }
})


//Click on X to delete Todos
$("li span").click(function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove()
	})
	event.stopPropagation()
})