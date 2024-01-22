function Init(){
  mainSlider();
}
Init();


 // Slider
 function mainSlider(){
    new Swiper('.JS-main-swiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        el: ".swiper-pagination",
        type: "bullets",
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      fadeEffect:{
        crossFade: true
      },
      autoHeight: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      loop: true,
    });
  }

  $(window).scroll(function () {
    $("header").toggleClass("scroll", $(this).scrollTop() > 100);
  });
 
const url = window.location.href
const splitUrl = url.split('/')
const curentPage = splitUrl[splitUrl.length-1]

if(curentPage == "index.html"){
  setActivePage("home")
}else if(curentPage == "agencies.html"){
  setActivePage("agencies")
}else if(curentPage == "contact.html"){
  setActivePage("contact")
}
else if(curentPage == "about-us.html"){
  setActivePage("about")
}else if(curentPage == "news.html"){
  setActivePage("news")
}

function setActivePage(className){
  const pageLink = document.getElementsByClassName(className)[0];
  pageLink.className += " active"
} 

$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 75, 300 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );
} );
