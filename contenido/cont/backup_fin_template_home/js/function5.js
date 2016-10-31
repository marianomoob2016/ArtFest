

//-----------------evento para el menu slider-------------------------
$(".button-collapse").sideNav();
$('.carousel.carousel-slider').carousel({full_width: true});

$('.modal-trigger').leanModal();
$('#aside').pushpin({ top:0, bottom:500 });


require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
function(html, dom, on){
  on(dom.byId("setContent"), "click", function(){
    html.set(dom.byId("content"), "I was set!");
  });
});
