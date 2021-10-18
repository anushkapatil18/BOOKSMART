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

//ajax
var x="";
$(document).ready(function(){
  $(".test1").click(function(){
    $.get("data.json", function(data){
      for(i in data.name){
        x += data.name[i]+"<br/>"
      }
      document.getElementById("txt").innerHTML="<h3>Title: </h3><br/>"+x;
    });
  });
});

var y="";
$(document).ready(function(){
  $(".test2").click(function(){
    $.get("data.json", function(data){
      for(i in data.author){
        y += data.author[i]+"<br/>"
      }
      document.getElementById("txt").innerHTML="<h3>Authors: </h3><br/>"+y;
    });
  });
});

var z="";
$(document).ready(function(){
  $(".test3").click(function(){
    $.get("data.json", function(data){
      for(i in data.publication){
        z += data.publication[i]+"<br/>"
      }
      document.getElementById("txt").innerHTML="<h3>Publications: </h3><br/>"+z;
    });
  });
});

//angular
var time = angular.module('myApp', []);
time.controller('myCtrl', function($scope, $interval) {
 $scope.theTime = new Date().toLocaleTimeString();
 $interval(function () {
 $scope.theTime = new Date().toLocaleTimeString();
}, 1000);
});

$(document).ready(function () {
  $("#submit").click(function () {
  details = [
  {
  "name": $("#name").val(),
  "address":$("#address").val(),
  "zipcode":$("#zipcode").val(),
   "title":$("#title").val(),
   "isbn":$("#isbn").val(),
   "copy":$("#copy").val(),
   "price":$("#price").val(),
   "date":$("#date").val(),
   "lan":$("#lan").val()
  }
  ];
  var tbl = $("<table/>").attr("id", "mytable");
  $("#div1").append(tbl);
  for (var i = 0; i < details.length; i++) {
  var tr = "<tr>";
  var td1 = "<td>" + details[i]["name"] + "</td>";
  var td3 = "<td>" + details[i]["address"] + "</td>";
  var td4 = "<td>" + details[i]["zipcode"] + "</td>";
  var td5 = "<td>" + details[i]["title"] + "</td>";
  var td6 = "<td>" + details[i]["isbn"]+ "</td>";
  var td7 = "<td>" + details[i]["copy"] + "</td>";
  var td8 = "<td>₹" + details[i]["price"]+ "</td>";
  var td9 = "<td>" + details[i]["date"]+ "</td>";
  var td10 = "<td>" + details[i]["lan"]+ "</td></tr>";
  $("#mytable").append(tr + td1 + td3 + td4 + td5 + td6+ td7 + td8+td9+td10);
  }
  });
  }); 