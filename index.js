const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});
//JQuery
$('.openmodal').click(function (e) {
  e.preventDefault();
  $('.modal').addClass('opened');
});
$('.closemodal').click(function (e) {
  e.preventDefault();
  $('.modal').removeClass('opened');
});

//JSON
$(function(){
  var json = {
      "slider":[{
          "img"    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpjcZwIOt9vuu5ICnksIaGGuxfLO0rNBX8A&usqp=CAU",
          "title"  : "Coco cola",
          "desc" : "Addvertisement"
      },
      {
          "img"    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxrvQLU9kw-IsG9mBne_nhBP09otNqOMqAng&usqp=CAU",
          "title"  : "Books",
          "desc" : "Addvertisement"
      },
      {
          "img"    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQg7xfzor3EvDhx__izMbBpNFGpoOzmKDh-Q&usqp=CAU",
          "title"  : "Myntra",
          "desc" : "Addvertisement"
      },
      {
          "img"    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9qLGygkIfCUM7DbCfr2ulNYKSTx8k81TU2A&usqp=CAU",
          "title"  : "W3Schools",
          "desc" : "Addvertisement"
      }]};
  
  
  
  var mhtml = '<ul>';
  $.each(json.slider, function(key, val){
      mhtml += '<li><div class="img-responsive"><img src="'+val.img+'" height="176px" width="976px"/></div>';
      mhtml += '<div class="desc"><h1 class="title">'+val.title+'</h1>';
      mhtml += '<p class="expert">'+val.desc+'</p></div>';
      mhtml += '</li>';
  });
  mhtml += '</ul>';
  $('.slider').append($(mhtml));
  //runShow();
 // switchImage();
    });


$(document).ready(function() {
$(".slider ul> li:gt(0)").css("opacity" , "0");
var j = 0;
   var delay = 2000; //millisecond delay between cycles
   function cycleThru(){
           var jmax = $(".slider ul> li").length -1;
           $(".slider ul> li:eq(" + j + ")")
                   .animate({"opacity" : "1.0"} ,400)
                   .animate({"opacity" : "1"}, delay)
                   .animate({"opacity" : "0"}, 400, function(){
                           (j == jmax) ? j=0 : j++;
                           cycleThru();
                   });
           };

   cycleThru();

});
