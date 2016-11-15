
//-----------------evento para el menu slider-------------------------
$(".button-collapse").sideNav();
$('.carousel.carousel-slider').carousel({full_width: true});

$('.modal-trigger').leanModal();
$('#aside').pushpin({ top:0, bottom:500 });

/*
      require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
      function(html, dom, on){
        on(dom.byId("setContent"), "click", function(){
          html.set(dom.byId("content"), "I was set!");
        });
      });




			require(["dojo/dom", "dojo/on", "dojo/request/script", "dojo/json", "dojo/domReady!"],
				function(dom, on, script, JSON){
					// Results will be displayed in resultDiv
					var resultDiv = dom.byId("resultDiv");

					// Attach the onclick event handler to the makeRequest button
					on(dom.byId('makeRequest'),"click", function(evt){

						// When the makeRequest button is clicked, send the current date
						// and time to the server in a JSONP request
						var d = new Date(),
							dateNow = d.toString();
						script.get("../resources/php/jsonp-demo.php",{
							// Tell the server that the callback name to
							// use is in the "callback" query parameter
							jsonp: "callback",
							// Send the date and time
							query: {
								clienttime: dateNow
							}
						}).then(function(data){
							// Display the result
							resultDiv.innerHTML = JSON.stringify(data);
						});
					});
				}
			);

*/
