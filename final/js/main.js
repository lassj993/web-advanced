// THIS IS THE OVERLAY SECTION

		// This example adds a UI control allowing users to remove the
		// ground overlay from the map.
		//var historicalOverlay = ["paris","rome",3,4,5]

		$(document).ready(function() {
			console.log("hello");

			$(".color").hide();
			$(".d").hide();
			$(".e").hide();
			$(".f").hide();

			$("#intro").fadeIn();

			
		});

		$("*").click(
			function(){
			$("#intro").fadeOut();
							
		});

		wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/France/Paris.json"

		function parseData(data) {
			console.log("hi");



			temp = data["current_observation"]["temp_f"];
			humidity = parseInt(data["current_observation"]["relative_humidity"]);
			

			$("#city1 .color").mouseover(
				function(){
					$( "#city1 .a" ).html(data["current_observation"]["display_location"]["full"]).fadeIn();
					$( "#city1 .b" ).html(data["current_observation"]["temp_f"] + "° f").fadeIn();
					$( "#city1 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").fadeIn();

					if (humidity >= 0 && humidity <= 30){
  					$("#city1 .d").fadeIn();
  					$("#city1 .d").css({
  						'filter' : 'blur('+.02+'px)',
  					});
  					
					} 

					if (humidity > 30 && humidity <= 90){
  					$("#city1 .e").fadeIn();
  					$("#city1 .e").css({
  						'filter' : 'blur('+1+'px)',
  					});
					}
				 
					if (humidity > 90){
  					$("#city1 .f").fadeIn();
  					$("#city1 .f").css({
  						'filter' : 'blur('+1.6+'px)',
  					});
 
					}
					
			});

			$("#city1 .color").click(
					function(){
						$( "#city1 .color" ).fadeOut();

						$( "#city1 .a" ).html(data["current_observation"]["display_location"]["full"]).fadeOut();
						$( "#city1 .b" ).html(data["current_observation"]["temp_f"] + "° f").fadeOut();
						$( "#city1 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").fadeOut();

						if (humidity >= 0 && humidity <= 30){
	  					$("#city1 .d").fadeOut();
	  					$("#city1 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city1 .e").fadeOut();
	  					$("#city1 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city1 .f").fadeOut();
	  					$("#city1 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
						
				});

			

			if (temp <= 0) {
					$("#city1 .color").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city1 .color").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city1 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city1 .color").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city1 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#city1 .color").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				} 

			nextCall();
		}

		function nextCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/Italy/Rome.json"

			parseData = function(data){
				console.log("success");


				humidity = parseInt(data["current_observation"]["relative_humidity"]);
				temp = data["current_observation"]["temp_f"];


				$("#city2 .color").mouseover(
					function(){
						$( "#city2 .a" ).html(data["current_observation"]["display_location"]["full"]).fadeIn();
						$( "#city2 .b" ).html(data["current_observation"]["temp_f"] + "° f").fadeIn();
						$( "#city2 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").fadeIn();

						if (humidity >= 0 && humidity <= 30){
	  					$("#city2 .d").fadeIn();
	  					$("#city2 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city2 .e").fadeIn();
	  					$("#city2 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city2 .f").fadeIn();
	  					$("#city2 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}						
						
				});

				$("#city2 .color").click(
					function(){
						$( "#city2 .color" ).fadeOut();

						$( "#city2 .a" ).html(data["current_observation"]["display_location"]["full"]).fadeOut();
						$( "#city2 .b" ).html(data["current_observation"]["temp_f"] + "° f").fadeOut();
						$( "#city2 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").fadeOut();

						if (humidity >= 0 && humidity <= 30){
	  					$("#city2 .d").fadeOut();
	  					$("#city2 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city2 .e").fadeOut();
	  					$("#city2 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city2 .f").fadeOut();
	  					$("#city2 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
						
				});

				console.log(temp)
				console.log(humidity)

				if (temp <= 0) {
					$("#city2 .color").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city2 .color").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city2 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city2 .color").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city2 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#city2 .color").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				} 
				
				thirdCall();
			}
			getJSON();
		}

		function thirdCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/Germany/Berlin.json"

			parseData = function(data){
				console.log("success");


				humidity = parseInt(data["current_observation"]["relative_humidity"]);
				temp = data["current_observation"]["temp_f"];

				$("#city3 .color").mouseover(
					function(){
						$( "#city3 .a" ).html(data["current_observation"]["display_location"]["full"]).show();
						$( "#city3 .b" ).html(data["current_observation"]["temp_f"] + "° f").show();
						$( "#city3 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").show();

						if (humidity >= 0 && humidity <= 30){
	  					$("#city3 .d").show();
	  					$("#city3 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city3 .e").show();
	  					$("#city3 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city3 .f").show();
	  					$("#city3 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
						
				});

				$("#city3 .color").click(
					function(){
						$( "#city3 .color" ).fadeOut();

						$( "#city3 .a" ).html(data["current_observation"]["display_location"]["full"]).fadeOut();
						$( "#city3 .b" ).html(data["current_observation"]["temp_f"] + "° f").fadeOut();
						$( "#city3 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").fadeOut();

						if (humidity >= 0 && humidity <= 30){
	  					$("#city3 .d").fadeOut();
	  					$("#city3 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city3 .e").fadeOut();
	  					$("#city3 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city3 .f").fadeOut();
	  					$("#city3 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
						
				});

				console.log(temp)
				console.log(humidity)

				if (temp <= 0) {
					$("#city3 .color").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city3 .color").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city3 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city3 .color").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city3 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#city3 .color").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				} 
				
				fourthCall();
			}
			getJSON();
		}

		function fourthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/Denmark/Copenhagen.json"

			parseData = function(data){
				console.log("success");


				humidity = parseInt(data["current_observation"]["relative_humidity"]);
				temp = data["current_observation"]["temp_f"];

				$("#city4 .color").mouseover(
					function(){
						$( "#city4 .a" ).html(data["current_observation"]["display_location"]["full"]).show();
						$( "#city4 .b" ).html(data["current_observation"]["temp_f"] + "° f").show();
						$( "#city4 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").show();
						

						if (humidity >= 0 && humidity <= 30){
	  					$("#city4 .d").show();
	  					$("#city4 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city4 .e").show();
	  					$("#city4 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city4 .f").show();
	  					$("#city4 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
				});

				$("#city4 .color").click(
					function(){
						$( "#city4 .color" ).fadeOut();

						$( "#city4 .a" ).html(data["current_observation"]["display_location"]["full"]).fadeOut();
						$( "#city4 .b" ).html(data["current_observation"]["temp_f"] + "° f").fadeOut();
						$( "#city4 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").fadeOut();
						

						if (humidity >= 0 && humidity <= 30){
	  					$("#city4 .d").fadeOut();
	  					$("#city4 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city4 .e").fadeOut();
	  					$("#city4 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city4 .f").fadeOut();
	  					$("#city4 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
						
				});

				console.log(temp)
				console.log(humidity)

				if (temp <= 0) {
					$("#city4 .color").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city4 .color").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city4 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city4 .color").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city4 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#city4 .color").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				} 
				
				fifthCall();
			}
			getJSON();
		}

		function fifthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/Russia/Moscow.json"

			parseData = function(data){
				console.log("success");


				humidity = parseInt(data["current_observation"]["relative_humidity"]);
				temp = data["current_observation"]["temp_f"];

				$("#city5 .color").mouseover(
					function(){
						$( "#city5 .a" ).html(data["current_observation"]["display_location"]["full"]).show();
						$( "#city5 .b" ).html(data["current_observation"]["temp_f"] + "° f").show();
						$( "#city5 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").show();

						if (humidity >= 0 && humidity <= 30){
	  					$("#city5 .d").show();
	  					$("#city5 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city5 .e").show();
	  					$("#city5 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city5 .f").show();
	  					$("#city5 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
						
				});

				$("#city5 .color").click(
					function(){
						$( "#city5 .color" ).fadeOut();

						$( "#city5 .a" ).html(data["current_observation"]["display_location"]["full"]).fadeOut();
						$( "#city5 .b" ).html(data["current_observation"]["temp_f"] + "° f").fadeOut();
						$( "#city5 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").fadeOut();

						if (humidity >= 0 && humidity <= 30){
	  					$("#city5 .d").fadeOut();
	  					$("#city5 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city5 .e").fadeOut();
	  					$("#city5 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city5 .f").fadeOut();
	  					$("#city5 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
						
				});

				console.log(temp)
				console.log(humidity)

				if (temp <= 0) {
					$("#city5 .color").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city5 .color").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city5 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city5 .color").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city5 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#city5 .color").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				} 
				
				sixthCall();
			}
			getJSON();
		}

		function sixthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/Spain/Madrid.json"

			parseData = function(data){
				console.log("success");


				humidity = parseInt(data["current_observation"]["relative_humidity"]);
				temp = data["current_observation"]["temp_f"];

				$("#city6 .color").mouseover(
					function(){
						$( "#city6 .a" ).html(data["current_observation"]["display_location"]["full"]).show();
						$( "#city6 .b" ).html(data["current_observation"]["temp_f"] + "° f").show();
						$( "#city6 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").show();
						
						if (humidity >= 0 && humidity <= 30){
	  					$("#city6 .d").show();
	  					$("#city6 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city6 .e").show();
	  					$("#city6 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city6 .f").show();
	  					$("#city6 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
				});

				$("#city6 .color").click(
					function(){
						$( "#city6 .color" ).fadeOut();

						$( "#city6 .a" ).html(data["current_observation"]["display_location"]["full"]).fadeOut();
						$( "#city6 .b" ).html(data["current_observation"]["temp_f"] + "° f").fadeOut();
						$( "#city6 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").fadeOut();
						
						if (humidity >= 0 && humidity <= 30){
	  					$("#city6 .d").fadeOut();
	  					$("#city6 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city6 .e").fadeOut();
	  					$("#city6 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city6 .f").fadeOut();
	  					$("#city6 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
						
				});

				console.log(temp)
				console.log(humidity)

				if (temp <= 0) {
					$("#city6 .color").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city6 .color").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city6 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city6 .color").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city6 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#city6 .color").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				} 
				
				seventhCall();
			}
			getJSON();
		}

		function seventhCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/Sweden/Stockholm%20Arlanda.json"

			parseData = function(data){
				console.log("success");


				humidity = parseInt(data["current_observation"]["relative_humidity"]);
				temp = data["current_observation"]["temp_f"];

				$("#city7 .color").mouseover(
					function(){
						$( "#city7 .a" ).html(data["current_observation"]["display_location"]["full"]).show();
						$( "#city7 .b" ).html(data["current_observation"]["temp_f"] + "° f").show();
						$( "#city7 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").show();

						if (humidity >= 0 && humidity <= 30){
	  					$("#city7 .d").show();
	  					$("#city7 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city7 .e").show();
	  					$("#city7 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city7 .f").show();
	  					$("#city7 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
						
				});

				$("#city7 .color").click(
					function(){
						$( "#city7 .color" ).fadeOut();

						$( "#city7 .a" ).html(data["current_observation"]["display_location"]["full"]).fadeOut();
						$( "#city7 .b" ).html(data["current_observation"]["temp_f"] + "° f").fadeOut();
						$( "#city7 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").fadeOut();

						if (humidity >= 0 && humidity <= 30){
	  					$("#city7 .d").fadeOut();
	  					$("#city7 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city7 .e").fadeOut();
	  					$("#city7 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city7 .f").fadeOut();
	  					$("#city7 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
						
				});

				console.log(temp)
				console.log(humidity)

				if (temp <= 0) {
					$("#city7 .color").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city7 .color").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city7 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city7 .color").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city7 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#city7 .color").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				} 
				
				eigthCall();
			}
			getJSON();
		}

				function eigthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/Netherlands/Amsterdam.json"

			parseData = function(data){
				console.log("success");


				humidity = parseInt(data["current_observation"]["relative_humidity"]);
				temp = data["current_observation"]["temp_f"];

				$("#city8 .color").mouseover(
					function(){
						$( "#city8 .a" ).html(data["current_observation"]["display_location"]["full"]).show();
						$( "#city8 .b" ).html(data["current_observation"]["temp_f"] + "° f").show();
						$( "#city8 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").show();

						if (humidity >= 0 && humidity <= 30){
	  					$("#city8 .d").show();
	  					$("#city8 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city8 .e").show();
	  					$("#city8 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city8 .f").show();
	  					$("#city8 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
						
				});

				$("#city8 .color").click(
					function(){
						$( "#city8 .color" ).fadeOut();

						$( "#city8 .a" ).html(data["current_observation"]["display_location"]["full"]).fadeOut();
						$( "#city8 .b" ).html(data["current_observation"]["temp_f"] + "° f").fadeOut();
						$( "#city8 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").fadeOut();

						if (humidity >= 0 && humidity <= 30){
	  					$("#city8 .d").fadeOut();
	  					$("#city8 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city8 .e").fadeOut();
	  					$("#city8 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city8 .f").fadeOut();
	  					$("#city8 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
						
				});

				console.log(temp)
				console.log(humidity)

				if (temp <= 0) {
					$("#city8 .color").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city8 .color").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city8 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city8 .color").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city8 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#city8 .color").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				} 
				
				ninthCall();
			}
			getJSON();
		}

			function ninthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/LA/New_Orleans.json"

			parseData = function(data){
				console.log("success");


				humidity = parseInt(data["current_observation"]["relative_humidity"]);
				temp = data["current_observation"]["temp_f"];

				$("#city9 .color").mouseover(
					function(){
						$( "#city9 .a" ).html(data["current_observation"]["display_location"]["full"]).show();
						$( "#city9 .b" ).html(data["current_observation"]["temp_f"] + "° f").show();
						$( "#city9 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").show();

						if (humidity >= 0 && humidity <= 30){
	  					$("#city9 .d").show();
	  					$("#city9 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city9 .e").show();
	  					$("#city9 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city9 .f").show();
	  					$("#city9 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
						
				});

				$("#city9 .color").click(
					function(){
					$( "#city9 .color" ).fadeOut();

					$( "#city9 .a" ).html(data["current_observation"]["display_location"]["full"]).fadeOut();
						$( "#city9 .b" ).html(data["current_observation"]["temp_f"] + "° f").fadeOut();
						$( "#city9 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").fadeOut();

						if (humidity >= 0 && humidity <= 30){
	  					$("#city9 .d").fadeOut();
	  					$("#city9 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city9 .e").fadeOut();
	  					$("#city9 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city9 .f").fadeOut();
	  					$("#city9 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
						
				});

				console.log(temp)
				console.log(humidity)

				if (temp <= 0) {
					$("#city9 .color").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city9 .color").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city9 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city9 .color").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city9 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#city9 .color").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				} 
				
				tenthCall();
			}
			getJSON();
		}

			function tenthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/AK/Anchorage.json"

			parseData = function(data){
				console.log("success");


				humidity = parseInt(data["current_observation"]["relative_humidity"]);
				temp = data["current_observation"]["temp_f"];

				$("#city10 .color").mouseover(
					function(){
						$( "#city10 .a" ).html(data["current_observation"]["display_location"]["full"]).show();
						$( "#city10 .b" ).html(data["current_observation"]["temp_f"] + "° f").show();
						$( "#city10 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").show();

						if (humidity >= 0 && humidity <= 30){
	  					$("#city10 .d").show();
	  					$("#city10 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city10 .e").show();
	  					$("#city10 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city10 .f").show();
	  					$("#city10 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
						
				});

				$("#city10 .color").click(
					function(){
						$( "#city10 .color" ).fadeOut();
						
						$( "#city10 .a" ).html(data["current_observation"]["display_location"]["full"]).fadeOut();
						$( "#city10 .b" ).html(data["current_observation"]["temp_f"] + "° f").fadeOut();
						$( "#city10 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").fadeOut();

						if (humidity >= 0 && humidity <= 30){
	  					$("#city10 .d").fadeOut();
	  					$("#city10 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city10 .e").fadeOut();
	  					$("#city10 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city10 .f").fadeOut();
	  					$("#city10 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
				});

				console.log(temp)
				console.log(humidity)

				if (temp <= 0) {
					$("#city10 .color").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city10 .color").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city10 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city10 .color").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city10 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#city10 .color").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				} 
				
				eleventhCall();
			}
			getJSON();
		}

			function eleventhCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/CO/Colorado_Springs.json"

			parseData = function(data){
				console.log("success");


				humidity = parseInt(data["current_observation"]["relative_humidity"]);
				temp = data["current_observation"]["temp_f"];

				$("#city11 .color").mouseover(
					function(){
						$( "#city11 .a" ).html(data["current_observation"]["display_location"]["full"]).show();
						$( "#city11 .b" ).html(data["current_observation"]["temp_f"] + "° f").show();
						$( "#city11 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").show();
						
						if (humidity >= 0 && humidity <= 30){
	  					$("#city11 .d").show();
	  					$("#city11 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city11 .e").show();
	  					$("#city11 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city11 .f").show();
	  					$("#city11 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
				});

				$("#city11 .color").click(
					function(){
						$( "#city11 .color" ).fadeOut();

						$( "#city11 .a" ).html(data["current_observation"]["display_location"]["full"]).fadeOut();
						$( "#city11 .b" ).html(data["current_observation"]["temp_f"] + "° f").fadeOut();
						$( "#city11 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").fadeOut();
						
						if (humidity >= 0 && humidity <= 30){
	  					$("#city11 .d").fadeOut();
	  					$("#city11 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city11 .e").fadeOut();
	  					$("#city11 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city11 .f").fadeOut();
	  					$("#city11 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
						
				});

				console.log(temp)
				console.log(humidity)

				if (temp <= 0) {
					$("#city11 .color").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city11 .color").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city11 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city11 .color").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city11 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#city11 .color").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				} 
				
				twelfthCall();
			}
			getJSON();
		}

			function twelfthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/UT/St_George.json"

			parseData = function(data){
				console.log("success");


				humidity = parseInt(data["current_observation"]["relative_humidity"]);
				temp = data["current_observation"]["temp_f"];

				$("#city12 .color").mouseover(
					function(){
						$( "#city12 .a" ).html(data["current_observation"]["display_location"]["full"]).show();
						$( "#city12 .b" ).html(data["current_observation"]["temp_f"] + "° f").show();
						$( "#city12 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").show();
						
						if (humidity >= 0 && humidity <= 30){
	  					$("#city12 .d").show();
	  					$("#city12 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city12 .e").show();
	  					$("#city12 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city12 .f").show();
	  					$("#city12 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
				});

				$("#city12 .color").click(
					function(){
						$( "#city12 .color" ).fadeOut();

						$( "#city12 .a" ).html(data["current_observation"]["display_location"]["full"]).fadeOut();
						$( "#city12 .b" ).html(data["current_observation"]["temp_f"] + "° f").fadeOut();
						$( "#city12 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").fadeOut();
						
						if (humidity >= 0 && humidity <= 30){
	  					$("#city12 .d").fadeOut();
	  					$("#city12 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city12 .e").fadeOut();
	  					$("#city12 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city12 .f").fadeOut();
	  					$("#city12 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
						
				});

				console.log(temp)
				console.log(humidity)

				if (temp <= 0) {
					$("#city12 .color").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city12 .color").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city12 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city12 .color").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city12 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#city12 .color").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				} 
				
				thirteenthCall();
			}
			getJSON();
		}


			function thirteenthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/AZ/Sedona.json"

			parseData = function(data){
				console.log("success");


				humidity = parseInt(data["current_observation"]["relative_humidity"]);
				temp = data["current_observation"]["temp_f"];

				$("#city13 .color").mouseover(
					function(){
						$( "#city13 .a" ).html(data["current_observation"]["display_location"]["full"]).show();
						$( "#city13 .b" ).html(data["current_observation"]["temp_f"] + "° f").show();
						$( "#city13 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").show();

						if (humidity >= 0 && humidity <= 30){
	  					$("#city13 .d").show();
	  					$("#city13 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city13 .e").show();
	  					$("#city13 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city13 .f").show();
	  					$("#city13 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
						
				});

				$("#city13 .color").click(
					function(){
						$( "#city13 .color" ).fadeOut();

						$( "#city13 .a" ).html(data["current_observation"]["display_location"]["full"]).fadeOut();
						$( "#city13 .b" ).html(data["current_observation"]["temp_f"] + "° f").fadeOut();
						$( "#city13 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").fadeOut();

						if (humidity >= 0 && humidity <= 30){
	  					$("#city13 .d").fadeOut();
	  					$("#city13 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city13 .e").fadeOut();
	  					$("#city13 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city13 .f").fadeOut();
	  					$("#city13 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
						
				});

				console.log(temp)
				console.log(humidity)

				if (temp <= 0) {
					$("#city13 .color").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city13 .color").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city13 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city13 .color").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city13 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#city13 .color").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				} 
				
				fourteenthCall();
			}
			getJSON();
		}
			function fourteenthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/Cuba/Havana.json"

			parseData = function(data){
				console.log("success");


				humidity = parseInt(data["current_observation"]["relative_humidity"]);
				temp = data["current_observation"]["temp_f"];

				$("#city14 .color").mouseover(
					function(){
						$( "#city14 .a" ).html(data["current_observation"]["display_location"]["full"]).show();
						$( "#city14 .b" ).html(data["current_observation"]["temp_f"] + "° f").show();
						$( "#city14 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").show();

						if (humidity >= 0 && humidity <= 30){
	  					$("#city14 .d").show();
	  					$("#city14 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city14 .e").show();
	  					$("#city14 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city14 .f").show();
	  					$("#city14 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
						
				});

				$("#city14 .color").click(
					function(){
						$( "#city14 .color" ).fadeOut();

						$( "#city14 .a" ).html(data["current_observation"]["display_location"]["full"]).fadeOut();
						$( "#city14 .b" ).html(data["current_observation"]["temp_f"] + "° f").fadeOut();
						$( "#city14 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").fadeOut();

						if (humidity >= 0 && humidity <= 30){
	  					$("#city14 .d").fadeOut();
	  					$("#city14 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city14 .e").fadeOut();
	  					$("#city14 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city14 .f").fadeOut();
	  					$("#city14 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
						
				});

				console.log(temp)
				console.log(humidity)

				if (temp <= 0) {
					$("#city14 .color").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city14 .color").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city14 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city14 .color").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city14 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#city14 .color").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				} 
				
				fifteenthCall();
			}
			getJSON();
		}

			function fifteenthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/England/London.json"

			parseData = function(data){
				console.log("success");


				humidity = parseInt(data["current_observation"]["relative_humidity"]);
				temp = data["current_observation"]["temp_f"];

				$("#city15 .color").mouseover(
					function(){
						$( "#city15 .a" ).html(data["current_observation"]["display_location"]["full"]).show();
						$( "#city15 .b" ).html(data["current_observation"]["temp_f"] + "° f").show();
						$( "#city15 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").show();
						
						if (humidity >= 0 && humidity <= 30){
	  					$("#city15 .d").show();
	  					$("#city15 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city15 .e").show();
	  					$("#city15 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city15 .f").show();
	  					$("#city15 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
				});

				$("#city15 .color").click(
					function(){
						$( "#city15 .color" ).fadeOut();

						$( "#city15 .a" ).html(data["current_observation"]["display_location"]["full"]).fadeOut();
						$( "#city15 .b" ).html(data["current_observation"]["temp_f"] + "° f").fadeOut();
						$( "#city15 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").fadeOut();
						
						if (humidity >= 0 && humidity <= 30){
	  					$("#city15 .d").fadeOut();
	  					$("#city15 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city15 .e").fadeOut();
	  					$("#city15 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city15 .f").fadeOut();
	  					$("#city15 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
						
				});

				console.log(temp)
				console.log(humidity)

				if (temp <= 0) {
					$("#city15 .color").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city15 .color").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city15 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city15 .color").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city15 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#city15 .color").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				} 
				sixteenthCall();
				}
			getJSON();
		}

		function sixteenthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/TN/Memphis.json"

			parseData = function(data){
				console.log("success");


				humidity = parseInt(data["current_observation"]["relative_humidity"]);
				temp = data["current_observation"]["temp_f"];

				$("#city16 .color").mouseover(
					function(){
						$( "#city16 .a" ).html(data["current_observation"]["display_location"]["full"]).show();
						$( "#city16 .b" ).html(data["current_observation"]["temp_f"] + "° f").show();
						$( "#city16 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").show();
						
						if (humidity >= 0 && humidity <= 30){
	  					$("#city16 .d").show();
	  					$("#city16 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city16 .e").show();
	  					$("#city16 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city16 .f").show();
	  					$("#city16 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
				});

				$("#city16 .color").click(
					function(){
						$( "#city16 .color" ).fadeOut();

						$( "#city16 .a" ).html(data["current_observation"]["display_location"]["full"]).fadeOut();
						$( "#city16 .b" ).html(data["current_observation"]["temp_f"] + "° f").fadeOut();
						$( "#city16 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").fadeOut();
						
						if (humidity >= 0 && humidity <= 30){
	  					$("#city16 .d").fadeOut();
	  					$("#city16 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city16 .e").fadeOut();
	  					$("#city16 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city16 .f").fadeOut();
	  					$("#city16 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
						
				});

				console.log(temp)
				console.log(humidity)

				if (temp <= 0) {
					$("#city16 .color").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city16 .color").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city16 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city16 .color").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city16 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#city16 .color").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				} 
				seventeenthCall();
				}
			getJSON();
		}
		function seventeenthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/Iceland/Reykjavik.json"

			parseData = function(data){
				console.log("success");


				humidity = parseInt(data["current_observation"]["relative_humidity"]);
				temp = data["current_observation"]["temp_f"];

				$("#city17 .color").mouseover(
					function(){
						$( "#city17 .a" ).html(data["current_observation"]["display_location"]["full"]).show();
						$( "#city17 .b" ).html(data["current_observation"]["temp_f"] + "° f").show();
						$( "#city17 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").show();
						
						if (humidity >= 0 && humidity <= 30){
	  					$("#city17 .d").show();
	  					$("#city17 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city17 .e").show();
	  					$("#city17 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city17 .f").show();
	  					$("#city17 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
				});

				$("#city17 .color").click(
					function(){
						$( "#city17 .color" ).fadeOut();

						$( "#city17 .a" ).html(data["current_observation"]["display_location"]["full"]).fadeOut();
						$( "#city17 .b" ).html(data["current_observation"]["temp_f"] + "° f").fadeOut();
						$( "#city17 .c" ).html(data["current_observation"]["relative_humidity"] + " humidity").fadeOut();
						
						if (humidity >= 0 && humidity <= 30){
	  					$("#city17 .d").fadeOut();
	  					$("#city17 .d").css({
	  						'filter' : 'blur('+.02+'px)',
	  					});
	  					
						} 

						if (humidity > 30 && humidity <= 90){
	  					$("#city17 .e").fadeOut();
	  					$("#city17 .e").css({
	  						'filter' : 'blur('+1+'px)',
	  					});
						}
					 
						if (humidity > 90){
	  					$("#city17 .f").fadeOut();
	  					$("#city17 .f").css({
	  						'filter' : 'blur('+1.6+'px)',
	  					});
	 
						}
						
				});

				console.log(temp)
				console.log(humidity)

				if (temp <= 0) {
					$("#city17 .color").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city17 .color").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city17 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city17 .color").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#city17 .color").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#city17 .color").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				} 
				
				}
			getJSON();
		}

		



		var historicalOverlay;
		var historicalOverlay2;
		var historicalOverlay3;
		var historicalOverlay4;
		var historicalOverlay5;
		var historicalOverlay6;
		var historicalOverlay7;
		var historicalOverlay8;
		var historicalOverlay9;
		var historicalOverlay10;
		var historicalOverlay11;
		var historicalOverlay12;
		var historicalOverlay13;
		var historicalOverlay14;
		var historicalOverlay15;
		var historicalOverlay16;
		var historicalOverlay17;





		function initMap() {

		  var map = new google.maps.Map(document.getElementById('map'), {
		    zoom: 4,
		    center: {lat: 48.864716, lng: 2.349014},
		    styles:  [
	              {
	                featureType: 'all',
	                elementType: 'geometry',
	                stylers: [{color: '#ffffff'}]
	              },
	              {
	                featureType: 'administrative.country ',
	                elementType: 'labels',
	                stylers: [{color: '#ffffff'}]
	              }

	            ]

		  });


		  //CITIES:

		  // PARIS

		  var paris = {
		    north: 49.905716,
		    south: 48.814716,
		    east: 4.52114,
		    west: 2.239014
		  };

		  historicalOverlay = new google.maps.GroundOverlay(
		      'http://digitool.is.cuni.cz:5881/ImageServer/imageserver?&res=3&viewwidth=545&viewheight=478&imgClickX=463&imgClickY=1082&rotation=0&requestId=9&filename=L2V4bGlicmlzL2R0bC9zdG9yYWdlX21hcC8yMDEzLzExLzI4L3ZpZXdfMS8xMTczNTI3&imageActionSelect=imageclick%2Czoomin&display_plugin=false&usePid2=true&thumbnailActionSelect=thumbclick&collectionName=&usePid1=true',
		      paris);

		  historicalOverlay.setMap(map);



		  historicalOverlay.addListener('click', function() {
		  	  
	          // parseData();
	          console.log("hey there!")

	          $("#city1 .color").fadeIn();
	          $("#city1 .a").show();
	          //append stuff w/ div in here!

	      });

	      // ROME

		  var rome = {
		    north: 43.028,
		    south: 40.5028,
		    east: 14.5364,
		    west: 11.4364
		  };

		  historicalOverlay2 = new google.maps.GroundOverlay(
		      'http://digitool.is.cuni.cz:5881/ImageServer/imageserver?&res=3&viewwidth=545&viewheight=522&imgClickX=0&imgClickY=0&rotation=0&requestId=2&filename=L2V4bGlicmlzL2R0bC9zdG9yYWdlX21hcC8yMDEzLzA5LzAzL3ZpZXdfMS8xMTI5Mjcx&imageActionSelect=&display_plugin=false&usePid2=true&thumbnailActionSelect=&collectionName=&usePid1=true',
		      rome);
		  historicalOverlay2.setMap(map);

		   historicalOverlay2.addListener('click', function() {
	          

	          $("#city2 .color").fadeIn();
	          console.log("hey there hey!")

	          //append stuff w/ div in here!

	      });

		  var berlin = {
		    north: 53.6,
		    south: 52.4,
		    east: 14.604954,
		    west: 12.0
		  };

		  historicalOverlay3 = new google.maps.GroundOverlay(
		      'http://digitool.is.cuni.cz:5881/ImageServer/imageserver?&res=3&viewwidth=443&viewheight=514&imgClickX=0&imgClickY=0&rotation=0&requestId=2&filename=L2V4bGlicmlzL2R0bC9zdG9yYWdlX21hcC8yMDEyLzEwLzI0L3ZpZXdfNS8xMDEzOTEz&imageActionSelect=&display_plugin=false&usePid2=true&thumbnailActionSelect=&collectionName=&usePid1=true',
		      berlin);
		  historicalOverlay3.setMap(map);

		   historicalOverlay3.addListener('click', function() {
	          
	          $("#city3 .color").fadeIn();
	          console.log("hey there hey!!!!!!")

	          //append stuff w/ div in here!

	      });

		  var copenhagen = {
		    north: 56.528,
		    south: 54.5028,
		    east: 15.5364,
		    west: 10.4364
		  };

		  historicalOverlay4 = new google.maps.GroundOverlay(
		      'http://digitool.is.cuni.cz:5881/ImageServer/imageserver?&res=2&viewwidth=561&viewheight=516&imgClickX=0&imgClickY=0&rotation=0&requestId=2&filename=L2V4bGlicmlzL2R0bC9zdG9yYWdlX21hcC8yMDEzLzA5LzAzL3ZpZXdfMS8xMTI5Mjk4&imageActionSelect=&display_plugin=false&usePid2=true&thumbnailActionSelect=&collectionName=&usePid1=true',
		      copenhagen);
		  historicalOverlay4.setMap(map);

		   historicalOverlay4.addListener('click', function() {
	          
	          $("#city4 .color").fadeIn();
	          console.log("hey there hey!")

	          //append stuff w/ div in here!

	      });

		    var moscow = {
		    north: 56.528,
		    south: 55.5028,
		    east: 38.5364,
		    west: 36.4364
		  };

		  historicalOverlay5 = new google.maps.GroundOverlay(
		      'http://digitool.is.cuni.cz:5881/ImageServer/imageserver?&res=3&viewwidth=561&viewheight=516&imgClickX=0&imgClickY=0&rotation=0&requestId=2&filename=L2V4bGlicmlzL2R0bC9zdG9yYWdlX21hcC8yMDEzLzA3LzIxL3ZpZXdfMS8xMTE1ODQ3&imageActionSelect=&display_plugin=false&usePid2=true&thumbnailActionSelect=&collectionName=&usePid1=true',
		      moscow);
		  historicalOverlay5.setMap(map);

		   historicalOverlay5.addListener('click', function() {
	          
	          $("#city5 .color").fadeIn();
	          console.log("hey there hey!")

	          //append stuff w/ div in here!

	      });

		   var madrid = {
		    north: 42.028,
		    south: 38.5028,
		    east: -1.9364,
		    west: -5.4364
		  };

		  historicalOverlay6 = new google.maps.GroundOverlay(
		      'http://cartotecadigital.icc.cat/utils/ajaxhelper/?CISOROOT=espanya&CISOPTR=2148&action=2&DMSCALE=5&DMWIDTH=275&DMHEIGHT=338&DMX=0&DMY=0&DMTEXT=&DMROTATE=0',
		      madrid);
		  historicalOverlay6.setMap(map);

		   historicalOverlay6.addListener('click', function() {
	          
	          $("#city6 .color").fadeIn();
	          console.log("hey there hey!")

	          //append stuff w/ div in here!

	      });

		   var stockholm = {
		    north: 61.028,
		    south: 59.5028,
		    east: 22.9364,
		    west: 19.4364
		  };

		  historicalOverlay7 = new google.maps.GroundOverlay(
		      'http://digitool.is.cuni.cz:5881/ImageServer/imageserver?&res=3&viewwidth=561&viewheight=516&imgClickX=0&imgClickY=0&rotation=0&requestId=2&filename=L2V4bGlicmlzL2R0bC9zdG9yYWdlX21hcC8yMDEzLzA3LzI0L3ZpZXdfMS8xMTE4MzM0&imageActionSelect=&display_plugin=false&usePid2=true&thumbnailActionSelect=&collectionName=&usePid1=true',
		      stockholm);
		  historicalOverlay7.setMap(map);

		   historicalOverlay7.addListener('click', function() {
	          
	          $("#city7 .color").fadeIn();
	          console.log("hey there hey!")

	          //append stuff w/ div in here!

	      });

		   var amsterdam = {
		    north: 53.028,
		    south: 51.5028,
		    east: 5.9364,
		    west: 3.4364
		  };

		  historicalOverlay8 = new google.maps.GroundOverlay(
		      'http://digitool.is.cuni.cz:5881/ImageServer/imageserver?&res=3&viewwidth=561&viewheight=516&imgClickX=0&imgClickY=0&rotation=0&requestId=2&filename=L2V4bGlicmlzL2R0bC9zdG9yYWdlX21hcC8yMDEyLzAzLzE5L3ZpZXdfMTEvNzk4MDc0&imageActionSelect=&display_plugin=false&usePid2=true&thumbnailActionSelect=&collectionName=&usePid1=true',
		      amsterdam);
		  historicalOverlay8.setMap(map);

		   historicalOverlay8.addListener('click', function() {
	          
	          $("#city8 .color").fadeIn();
	          console.log("hey there hey!")

	          //append stuff w/ div in here!

	      });

		    var newOrleans = {
		    north: 31.028,
		    south: 28.5028,
		    east: -89.4364,
		    west: -91.9364
		  };

		  historicalOverlay9 = new google.maps.GroundOverlay(
		      'https://ngmdb.usgs.gov/img4/ht_icons/Browse/LA/LA_Chef%20Menteur_334370_1936_62500.jpg	',
		      newOrleans);
		  historicalOverlay9.setMap(map);

		   historicalOverlay9.addListener('click', function() {
	          
	          $("#city9 .color").fadeIn();
	          console.log("hey there hey!")

	          //append stuff w/ div in here!

	      });

		   var anchorage = {
		    north: 62.028,
		    south: 58.5028,
		    east: -147.4364,
		    west: -151.9364
		  };

		  historicalOverlay10 = new google.maps.GroundOverlay(
		      'https://ngmdb.usgs.gov/img4/ht_icons/Browse/AK/AK_Seward%20D-5_359004_1995_63360.jpg',
		      anchorage);
		  historicalOverlay10.setMap(map);

		   historicalOverlay10.addListener('click', function() {
	          
	          $("#city10 .color").fadeIn();
	          console.log("hey there hey!")

	          //append stuff w/ div in here!

	      });

		   var coloradoSprings = {
		    north: 41.028,
		    south: 36.5028,
		    east: -102.4364,
		    west: -106.9364
		  };

		  historicalOverlay11 = new google.maps.GroundOverlay(
		      'https://ngmdb.usgs.gov/img4/ht_icons/Browse/CO/CO_Colorado%20Springs_402257_1951_62500.jpg',
		      coloradoSprings);
		  historicalOverlay11.setMap(map);

		   historicalOverlay11.addListener('click', function() {
	          
	          $("#city11 .color").fadeIn();
	          console.log("hey there hey!")

	          //append stuff w/ div in here!

	      });

		   var saintGeorge = {
		    north: 39.028,
		    south: 35.5028,
		    east: -110.4364,
		    west: -115.9364
		  };

		  historicalOverlay12 = new google.maps.GroundOverlay(
		      'https://ngmdb.usgs.gov/img4/ht_icons/Browse/UT/UT_Hurricane_249919_1954_62500.jpg',
		      saintGeorge);
		  historicalOverlay12.setMap(map);

		   historicalOverlay12.addListener('click', function() {
	          
	          $("#city12 .color").fadeIn();
	          console.log("hey there hey!")

	          //append stuff w/ div in here!

	      });

		   var sedona = {
		    north: 36.028,
		    south: 32.5028,
		    east: -109.4364,
		    west: -113.9364
		  };

		  historicalOverlay13 = new google.maps.GroundOverlay(
		      'https://ngmdb.usgs.gov/img4/ht_icons/Browse/AZ/AZ_Sedona_313303_1969_24000.jpg',
		      sedona);
		  historicalOverlay13.setMap(map);

		   historicalOverlay13.addListener('click', function() {
	          
	          $("#city13 .color").fadeIn();
	          console.log("hey there hey!")

	          //append stuff w/ div in here!

	      });

		   var havana = {
		    north: 25.028,
		    south: 21.5028,
		    east: -80.364,
		    west: -84.9364
		  };

		  historicalOverlay14 = new google.maps.GroundOverlay(
		      'https://ngmdb.usgs.gov/img4/ht_icons/Browse/IL/IL_Havana_307781_1947_24000.jpg',
		      havana);
		  historicalOverlay14.setMap(map);

		   historicalOverlay14.addListener('click', function() {
	          
	          $("#city14 .color").fadeIn();
	          console.log("hey there hey!")

	          //append stuff w/ div in here!

	      });

		   var london = {
		    north: 53.05716,
		    south: 50.814716,
		    east: 2.952114,
		    west: -2.239014
		  };

		  historicalOverlay15 = new google.maps.GroundOverlay(
		      'http://digitool.is.cuni.cz:5881/ImageServer/imageserver?&res=3&viewwidth=561&viewheight=516&imgClickX=0&imgClickY=0&rotation=0&requestId=2&filename=L2V4bGlicmlzL2R0bC9zdG9yYWdlX21hcC8yMDEzLzExLzA0L3ZpZXdfMS8xMTY4MjY3&imageActionSelect=&display_plugin=false&usePid2=true&thumbnailActionSelect=&collectionName=&usePid1=true',
		      london);
		  historicalOverlay15.setMap(map);

		   historicalOverlay15.addListener('click', function() {
	          
	          $("#city15 .color").fadeIn();
	          console.log("hey there hey!")

	          //append stuff w/ div in here!

	      });

		   var memphis = {
		    north: 37.05716,
		    south: 33.814716,
		    east: -87.952114,
		    west: -91.239014
		  };

		  historicalOverlay16 = new google.maps.GroundOverlay(
		      'https://ngmdb.usgs.gov/img4/ht_icons/Browse/TN/TN_Memphis_150038_1960_62500.jpg',
		      memphis);
		  historicalOverlay16.setMap(map);

		   historicalOverlay16.addListener('click', function() {
	          
	          $("#city16 .color").fadeIn();
	          console.log("hey there hey!")

	          //append stuff w/ div in here!

	      });

		    var reykjavik = {
		    north: 65.05716,
		    south: 63.14716,
		    east: -18.952114,
		    west: -24.239014
		  };

		  historicalOverlay17 = new google.maps.GroundOverlay(
		      'data:image/jpeg;base64,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',
		      reykjavik);
		  historicalOverlay17.setMap(map);

		   historicalOverlay17.addListener('click', function() {
	          
	          $("#city17 .color").fadeIn();
	          console.log("hey there hey!")

	          //append stuff w/ div in here!

	      });
		}

		
		
     
      

