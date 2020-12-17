$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 1000,
		smartSpeed: 1500,
		autoplayHoverPause: true,
  });

  AOS.init();
    
  $('#toggle-menu').click(function(){
    $(this).next().slideToggle();
  });
});
//filter products
var $mediaElements = $(".cd-item");
$(".filter_link").click(function(e) {
  e.preventDefault();
  var filterVal = $(this).data("filter");
  if (filterVal === "all") {
    $mediaElements.slideDown("slow");
  } else {
    $mediaElements
      .hide("slow")
      .filter("." + filterVal)
      .slideDown("slow");
  }

  
});
//filter products
