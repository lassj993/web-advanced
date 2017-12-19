console.log('hello!')

$(document).ready(function(){
			$(".s").hide();

		});

		// var wURL = "http://api.wunderground.com/api/5636157478e17885/conditions/q/AZ/Sedona.json"
		// function parseData(data){
		// 	console.log("success");
		// 	secondCall();
		// }

		wURL = "http://api.wunderground.com/api/5636157478e17885/conditions/q/AZ/Sedona.json";

		var temp; 
		var humidity;

		function parseData(data) {

			// $.get( wURL2, function(data) {
				console.log('secondCaleeel');


				$( "#div1 .p" ).html(data["current_observation"]["display_location"]["full"]).show();

				temp = data["current_observation"]["temp_f"];

				humidity = parseInt(data["current_observation"]["relative_humidity"]);
				
				
				if (temp > 50){
					var r;
					r = Math.floor(Math.random() * 50);
					$("#div1").css("background-color", "hsl("+ r +",100%,50%)");
				} if (humidity > 10) {
					$("#div1 .s").show();
				};

			// }, "json");

			nextCall();
		};

		

		function nextCall() {
	
	// Redefine your query URL
	wURL = "http://api.wunderground.com/api/5636157478e17885/forecast/q/CT/Hartford.json";

	// Redefine parseData to handle your new query JSON response
	parseData = function(data) {
	  console.log("JSON Parse function for another URL: Success!");

	  $( "#div2 .p" ).html(data["current_observation"]["display_location"]["full"]).show();

				temp = data["current_observation"]["temp_f"];

				humidity = parseInt(data["current_observation"]["relative_humidity"]);
				
				
				if (temp > 50){
					var r;
					r = Math.floor(Math.random() * 50);
					$("#div2").css("background-color", "hsl("+ r +",100%,50%)");
				} if (humidity > 10) {
					$("#div2 .s").show();
				};
				thirdCall();
	  
	    // When you are done with the JSON data here, kick off the third call!
		};
		

		getJSON();  // After redefining the two parameters above, get the JSON manually!
	};


		

		function thirdCall() {

			// $.get( wURL4, function(data) {
				parseData = function(data) {
				console.log('secondCaleeel');


				$( "#div3 .p" ).html(data["current_observation"]["display_location"]["full"]).show();

				temp = data["current_observation"]["temp_f"];
				
				if (temp > 50){
					var r;
					r = Math.floor(Math.random() * 50);
					$("#div3").css("background-color", "hsl("+ r +",100%,50%)");
				}
			}

			// }, "json");	
		}
			



			

			// Redefine parseData to handle your new query JSON response
			
			////////////////////////////////////////////////////////////
			// THIS IS NEW!!!                                         //
			// If you make additional calls to to Weather Underground //
			// With different URLS do the following:                  //
			// This can be done anytime AFTER Document.Ready()        //
			////////////////////////////////////////////////////////////

			// Redefine your query URL
			

			// getJSON();  // After redefining the two parameters above, get the JSON manually!
		


// function secondCall(){
// 	wURL = urlshit;

// 	parseData = function(data){
// 		alert("second parse data");	
// 		thirdCall();
// 	}
// 	getJSON();
// }









