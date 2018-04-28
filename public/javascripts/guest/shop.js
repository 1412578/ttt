$(document).ready(function() {
    $("body").fadeIn(400);

$('#myCarousel').carousel()
$('#newProductCar').carousel()

/* Home page item price animation */
$('.thumbnail').mouseenter(function() {
   $(this).children('.zoomTool').fadeIn();
});

$('.thumbnail').mouseleave(function() {
	$(this).children('.zoomTool').fadeOut();
});

// Show/Hide Sticky "Go to top" button
	$(window).scroll(function(){
		if($(this).scrollTop()>200){
			$(".gotop").fadeIn(200);
		}
		else{
			$(".gotop").fadeOut(200);
		}
	});
// Scroll Page to Top when clicked on "go to top" button
	$(".gotop").click(function(event){
		event.preventDefault();

		$.scrollTo('#gototop', 1500, {
        	easing: 'easeOutCubic'
        });
	});

});

//Generate Day month year in register form
var divYear = document.getElementById("Year")
for(i = 1950; i < 2018; i++){
	var selectionItem = document.createElement("option")
	selectionItem.innerHTML=`${i}`
	selectionItem.Text=`${i}`
	divYear.appendChild(selectionItem);
	console.log("ahihi");
}

var divYear = document.getElementById("Month")
for(i = 1; i < 13; i++){
	var selectionItem = document.createElement("option")
	selectionItem.innerHTML=`${i}`
	selectionItem.Text=`${i}`
	divYear.appendChild(selectionItem);
	console.log("ahihi");
}
var divYear = document.getElementById("Day")
for(i = 1; i < 32; i++){
	var selectionItem = document.createElement("option")
	selectionItem.innerHTML=`${i}`
	selectionItem.Text=`${i}`
	divYear.appendChild(selectionItem);
	console.log("ahihi");
}

var TimKiemSanPham = function(){
	var i = Math.floor((Math.random() * 2) + 1);
	window.open('products_${`i`}.html')
}
	
