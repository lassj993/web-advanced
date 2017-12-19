			

			// dynamically add / change CSS on an element
		// $('.element').css({
		// 	'filter' : 'blur('+variable+'px)',
		// });


		// SEDONA
		wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/AZ/Sedona.json";
		
		function parseData(data) {
			console.log("hi");


			$(".a, .aa, .c, .d").hide();

			$( "#div1 .p" ).html(data["current_observation"]["display_location"]["full"]).show();



			temp = data["current_observation"]["temp_f"];
			humidity = parseInt(data["current_observation"]["relative_humidity"]);
				
				// -------------------------
				// this is humidity stuff---
				// --------------------------


				if (humidity >= 0 && humidity <= 30){
  					$("#div1 .a").show();
  					$("#div1 .a").css({
  						'filter' : 'blur('+.02+'px)',
  					});
  					
				} 

				if (humidity > 30 && humidity <= 80){
  					$("#div1 .aa").show();
  					$("#div1 .aa").css({
  						'filter' : 'blur('+1+'px)',
  					});
				}
				 
				if (humidity > 80){
  					$("#div1 .d").show();
  					$("#div1 .d").css({
  						'filter' : 'blur('+1.6+'px)',
  					});
 
				} 

				$("#div1").mouseover(
				function(){
					$("#div1 .h").html(data["current_observation"]["relative_humidity"] + " humidity").show();
					$("#div1 .t").html(data["current_observation"]["temp_f"] + " degrees").show();


					
				});

				$("#div1").mouseleave(
				function(){
					$("#div1 .h").html(data["current_observation"]["relative_humidity"]).hide();
					$("#div1 .t").html(data["current_observation"]["temp_f"] + " degrees").hide();
					
				});


				// -------------------------
				// this is temp stuff--------
				// --------------------------

				// if less than or equal to 0 degrees its blue
				if (temp <= 0) {
					$("#div1").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div1").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div1").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div1").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div1").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#div1").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				} 


			nextCall();

		}

		// MEMPHIS

		function nextCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/France/Paris.json"

			parseData = function(data){
				console.log("success");

				$("#div2 .p").html(data["current_observation"]["display_location"]["full"]).show();

				humidity = parseInt(data["current_observation"]["relative_humidity"]);

				temp = data["current_observation"]["temp_f"];

				// -------------------------
				// this is humidity stuff---
				// --------------------------


				if (humidity >= 0 && humidity <= 30){
  					$("#div2 .a").show();
  					$("#div2 .a").css({
  						'filter' : 'blur('+.02+'px)',
  					});
  					
				} 

				if (humidity > 30 && humidity <= 80){
  					$("#div2 .aa").show();
  					$("#div2 .aa").css({
  						'filter' : 'blur('+1+'px)',
  					});
				}
				 
				if (humidity > 80){
  					$("#div2 .d").show();
  					$("#div2 .d").css({
  						'filter' : 'blur('+1.6+'px)',
  					});
 
				} 

				$("#div2").mouseover(
				function(){
					$("#div2 .h").html(data["current_observation"]["relative_humidity"] + " humidity").show();
					$("#div2 .t").html(data["current_observation"]["temp_f"] + " degrees").show();
					
				});

				$("#div2").mouseleave(
				function(){
					$("#div2 .h").html(data["current_observation"]["relative_humidity"]).hide();
					$("#div2 .t").html(data["current_observation"]["temp_f"] + " degrees").hide();
					
				});
				


					// -------------------------
				// this is temp stuff--------
				// --------------------------

				// if less than or equal to 0 degrees its blue
				if (temp <= 0) {
					$("#div2").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div2").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div2").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div2").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div2").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#div2").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				} 
				thirdCall();


			}
			getJSON();

		}

// 		// BOSTON

		function thirdCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/France/Nice.json"

			parseData = function(data){
				console.log("success");

				$("#div3 .p").html(data["current_observation"]["display_location"]["full"]).show();

				humidity = parseInt(data["current_observation"]["relative_humidity"]);

				temp = data["current_observation"]["temp_f"];



				// -------------------------
				// this is humidity stuff---
				// --------------------------


if (humidity >= 0 && humidity <= 30){
  					$("#div3 .a").show();
  					$("#div3 .a").css({
  						'filter' : 'blur('+.02+'px)',
  					});
  					
				} 

				if (humidity > 30 && humidity <= 80){
  					$("#div3 .aa").show();
  					$("#div3 .aa").css({
  						'filter' : 'blur('+1+'px)',
  					});
				}
				 
				if (humidity > 80){
  					$("#div3 .d").show();
  					$("#div3 .d").css({
  						'filter' : 'blur('+1.6+'px)',
  					});
 
				} 

				$("#div3").mouseover(
				function(){
					$("#div3 .h").html(data["current_observation"]["relative_humidity"] + " humidity").show();
					$("#div3 .t").html(data["current_observation"]["temp_f"] + " degrees").show();
					
				});

				$("#div3").mouseleave(
				function(){
					$("#div3 .h").html(data["current_observation"]["relative_humidity"]).hide();
					$("#div3 .t").html(data["current_observation"]["temp_f"] + " degrees").hide();
					
				});



				// -------------------------
				// this is temp stuff--------
				// --------------------------

				// if less than or equal to 0 degrees its blue
				if (temp <= 0) {
					$("#div3").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div3").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div3").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div3").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div3").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#div3").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				} 

				fourthCall();
			}
			getJSON();
		}

// 		 // SAN DIEGO

		function fourthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/Italy/Rome.json"

			parseData = function(data){
				console.log("success");

				$("#div4 .p").html(data["current_observation"]["display_location"]["full"]).show();

				humidity = parseInt(data["current_observation"]["relative_humidity"]);

				temp = data["current_observation"]["temp_f"];



				// -------------------------
				// this is humidity stuff---
				// --------------------------


if (humidity >= 0 && humidity <= 30){
  					$("#div4 .a").show();
  					$("#div4 .a").css({
  						'filter' : 'blur('+.02+'px)',
  					});
  					
				} 

				if (humidity > 30 && humidity <= 80){
  					$("#div4 .aa").show();
  					$("#div4 .aa").css({
  						'filter' : 'blur('+1+'px)',
  					});
				}
				 
				if (humidity > 80){
  					$("#div4 .d").show();
  					$("#div4 .d").css({
  						'filter' : 'blur('+1.6+'px)',
  					});
 
				} 

				$("#div4").mouseover(
				function(){
					$("#div4 .h").html(data["current_observation"]["relative_humidity"] + " humidity").show();
					$("#div4 .t").html(data["current_observation"]["temp_f"] + " degrees").show();
					
				});

				$("#div4").mouseleave(
				function(){
					$("#div4 .h").html(data["current_observation"]["relative_humidity"]).hide();
					$("#div4 .t").html(data["current_observation"]["temp_f"] + " degrees").hide();
					
				});

				// -------------------------
				// this is temp stuff--------
				// --------------------------

				// if less than or equal to 0 degrees its blue
				if (temp <= 0) {
					$("#div4").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div4").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div4").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div4").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div4").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#div4").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				}
				fifthCall();
			}
			getJSON();
		}

		function fifthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/CA/San_Francisco.json"

			parseData = function(data){
				console.log("success");

				$("#div5 .p").html(data["current_observation"]["display_location"]["full"]).show();

				humidity = parseInt(data["current_observation"]["relative_humidity"]);

				temp = data["current_observation"]["temp_f"];



				// -------------------------
				// this is humidity stuff---
				// --------------------------


if (humidity >= 0 && humidity <= 30){
  					$("#div5 .a").show();
  					$("#div5 .a").css({
  						'filter' : 'blur('+.02+'px)',
  					});
  					
				} 

				if (humidity > 30 && humidity <= 80){
  					$("#div5 .aa").show();
  					$("#div5 .aa").css({
  						'filter' : 'blur('+1+'px)',
  					});
				}
				 
				if (humidity > 80){
  					$("#div5 .d").show();
  					$("#div5 .d").css({
  						'filter' : 'blur('+1.6+'px)',
  					});
 
				} 

				$("#div5").mouseover(
				function(){
					$("#div5 .h").html(data["current_observation"]["relative_humidity"] + " humidity").show();
					$("#div5 .t").html(data["current_observation"]["temp_f"] + " degrees").show();
					
				});

				$("#div5").mouseleave(
				function(){
					$("#div5 .h").html(data["current_observation"]["relative_humidity"]).hide();
					$("#div5 .t").html(data["current_observation"]["temp_f"] + " degrees").hide();
					
				});

				// -------------------------
				// this is temp stuff--------
				// --------------------------

				// if less than or equal to 0 degrees its blue
				if (temp <= 0) {
					$("#div5").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div5").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div5").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div5").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div5").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#div5").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				}
				sixthCall();
			}
			getJSON();
		}

		function sixthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/England/London.json"

			parseData = function(data){
				console.log("success");

				$("#div6 .p").html(data["current_observation"]["display_location"]["full"]).show();

				humidity = parseInt(data["current_observation"]["relative_humidity"]);

				temp = data["current_observation"]["temp_f"];



				// -------------------------
				// this is humidity stuff---
				// --------------------------


if (humidity >= 0 && humidity <= 30){
  					$("#div6 .a").show();
  					$("#div6 .a").css({
  						'filter' : 'blur('+.02+'px)',
  					});
  					
				} 

				if (humidity > 30 && humidity <= 80){
  					$("#div6 .aa").show();
  					$("#div6 .aa").css({
  						'filter' : 'blur('+1+'px)',
  					});
				}
				 
				if (humidity > 80){
  					$("#div6 .d").show();
  					$("#div6 .d").css({
  						'filter' : 'blur('+1.6+'px)',
  					});
 
				} 

				$("#div6").mouseover(
				function(){
					$("#div6 .h").html(data["current_observation"]["relative_humidity"] + " humidity").show();
					$("#div6 .t").html(data["current_observation"]["temp_f"] + " degrees").show();
					
				});

				$("#div6").mouseleave(
				function(){
					$("#div6 .h").html(data["current_observation"]["relative_humidity"]).hide();
					$("#div6 .t").html(data["current_observation"]["temp_f"] + " degrees").hide();
					
				});

				// -------------------------
				// this is temp stuff--------
				// --------------------------

				// if less than or equal to 0 degrees its blue
				if (temp <= 0) {
					$("#div6").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div6").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div6").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div6").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div6").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#div6").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				}
				seventhCall();
			}
			getJSON();
		}

		function seventhCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/NV/Reno.json"

			parseData = function(data){
				console.log("success");

				$("#div7 .p").html(data["current_observation"]["display_location"]["full"]).show();

				humidity = parseInt(data["current_observation"]["relative_humidity"]);

				temp = data["current_observation"]["temp_f"];


				// -------------------------
				// this is humidity stuff---
				// --------------------------


if (humidity >= 0 && humidity <= 30){
  					$("#div7 .a").show();
  					$("#div7 .a").css({
  						'filter' : 'blur('+.02+'px)',
  					});
  					
				} 

				if (humidity > 30 && humidity <= 80){
  					$("#div7 .aa").show();
  					$("#div7 .aa").css({
  						'filter' : 'blur('+1+'px)',
  					});
				}
				 
				if (humidity > 80){
  					$("#div7 .d").show();
  					$("#div7 .d").css({
  						'filter' : 'blur('+1.6+'px)',
  					});
 
				} 

				$("#div7").mouseover(
				function(){
					$("#div7 .h").html(data["current_observation"]["relative_humidity"] + " humidity").show();
					$("#div7 .t").html(data["current_observation"]["temp_f"] + " degrees").show();
					
				});

				$("#div7").mouseleave(
				function(){
					$("#div7 .h").html(data["current_observation"]["relative_humidity"]).hide();
					$("#div7 .t").html(data["current_observation"]["temp_f"] + " degrees").hide();
					
				});

				// -------------------------
				// this is temp stuff--------
				// --------------------------

				// if less than or equal to 0 degrees its blue
				if (temp <= 0) {
					$("#div7").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div7").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div7").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div7").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div7").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#div7").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				}
				eigthCall();
			}
			getJSON();
		}

		function eigthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/AK/Anchorage.json"

			parseData = function(data){
				console.log("success");

				$("#div8 .p").html(data["current_observation"]["display_location"]["full"]).show();

				humidity = parseInt(data["current_observation"]["relative_humidity"]);

				temp = data["current_observation"]["temp_f"];



				// -------------------------
				// this is humidity stuff---
				// --------------------------


if (humidity >= 0 && humidity <= 30){
  					$("#div8 .a").show();
  					$("#div8 .a").css({
  						'filter' : 'blur('+.02+'px)',
  					});
  					
				} 

				if (humidity > 30 && humidity <= 80){
  					$("#div8 .aa").show();
  					$("#div8 .aa").css({
  						'filter' : 'blur('+1+'px)',
  					});
				}
				 
				if (humidity > 80){
  					$("#div8 .d").show();
  					$("#div8 .d").css({
  						'filter' : 'blur('+1.6+'px)',
  					});
 
				} 

				$("#div8").mouseover(
				function(){
					$("#div8 .h").html(data["current_observation"]["relative_humidity"] + " humidity").show();
					$("#div8 .t").html(data["current_observation"]["temp_f"] + " degrees").show();
					
				});

				$("#div8").mouseleave(
				function(){
					$("#div8 .h").html(data["current_observation"]["relative_humidity"]).hide();
					$("#div8 .t").html(data["current_observation"]["temp_f"] + " degrees").hide();
					
				});

				// -------------------------
				// this is temp stuff--------
				// --------------------------

				// if less than or equal to 0 degrees its blue
				if (temp <= 0) {
					$("#div8").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div8").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div8").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div8").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div8").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#div8").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				}
				ninthCall();
			}
			getJSON();
		}

		function ninthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/SC/Charleston.json"

			parseData = function(data){
				console.log("success");

				$("#div9 .p").html(data["current_observation"]["display_location"]["full"]).show();

				humidity = parseInt(data["current_observation"]["relative_humidity"]);

				temp = data["current_observation"]["temp_f"];



				// -------------------------
				// this is humidity stuff---
				// --------------------------


if (humidity >= 0 && humidity <= 30){
  					$("#div9 .a").show();
  					$("#div9 .a").css({
  						'filter' : 'blur('+.02+'px)',
  					});
  					
				} 

				if (humidity > 30 && humidity <= 80){
  					$("#div9 .aa").show();
  					$("#div9 .aa").css({
  						'filter' : 'blur('+1+'px)',
  					});
				}
				 
				if (humidity > 80){
  					$("#div9 .d").show();
  					$("#div9 .d").css({
  						'filter' : 'blur('+1.6+'px)',
  					});
 
				} 

				$("#div9").mouseover(
				function(){
					$("#div9 .h").html(data["current_observation"]["relative_humidity"] + " humidity").show();
					$("#div9 .t").html(data["current_observation"]["temp_f"] + " degrees").show();
					
				});

				$("#div9").mouseleave(
				function(){
					$("#div9 .h").html(data["current_observation"]["relative_humidity"]).hide();
					$("#div9 .t").html(data["current_observation"]["temp_f"] + " degrees").hide();
					
				});

				// -------------------------
				// this is temp stuff--------
				// --------------------------

				// if less than or equal to 0 degrees its blue
				if (temp <= 0) {
					$("#div9").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div9").css("background-color", "hsl("+ r +",90%,70% )");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div9").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div9").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div9").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#div9").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				}
				tenthCall();
			}
			getJSON();
		}

		function tenthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/IL/Chicago.json"

			parseData = function(data){
				console.log("success");

				$("#div10 .p").html(data["current_observation"]["display_location"]["full"]).show();

				humidity = parseInt(data["current_observation"]["relative_humidity"]);

				temp = data["current_observation"]["temp_f"];

				// -------------------------
				// this is humidity stuff---
				// --------------------------


if (humidity >= 0 && humidity <= 30){
  					$("#div10 .a").show();
  					$("#div10 .a").css({
  						'filter' : 'blur('+.02+'px)',
  					});
  					
				} 

				if (humidity > 30 && humidity <= 80){
  					$("#div10 .aa").show();
  					$("#div10 .aa").css({
  						'filter' : 'blur('+1+'px)',
  					});
				}
				 
				if (humidity > 80){
  					$("#div10 .d").show();
  					$("#div10 .d").css({
  						'filter' : 'blur('+1.6+'px)',
  					});
 
				} 

				$("#div10").mouseover(
				function(){
					$("#div10 .h").html(data["current_observation"]["relative_humidity"] + " humidity").show();
					$("#div10 .t").html(data["current_observation"]["temp_f"] + " degrees").show();
					
				});

				$("#div10").mouseleave(
				function(){
					$("#div10 .h").html(data["current_observation"]["relative_humidity"]).hide();
					$("#div10 .t").html(data["current_observation"]["temp_f"] + " degrees").hide();
					
				});

				// -------------------------
				// this is temp stuff--------
				// --------------------------

				// if less than or equal to 0 degrees its blue
				if (temp <= 0) {
					$("#div10").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div10").css("background-color", "hsl("+ r +",90%,70%)");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div10").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div10").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div10").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#div10").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				}
				eleventhCall();
			}
			getJSON();
		}

		function eleventhCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/OR/Portland.json"

			parseData = function(data){
				console.log("success");

				$("#div11 .p").html(data["current_observation"]["display_location"]["full"]).show();

				humidity = parseInt(data["current_observation"]["relative_humidity"]);

				temp = data["current_observation"]["temp_f"];

				// -------------------------
				// this is humidity stuff---
				// --------------------------


if (humidity >= 0 && humidity <= 30){
  					$("#div11 .a").show();
  					$("#div11 .a").css({
  						'filter' : 'blur('+.02+'px)',
  					});
  					
				} 

				if (humidity > 30 && humidity <= 80){
  					$("#div11 .aa").show();
  					$("#div11 .aa").css({
  						'filter' : 'blur('+1+'px)',
  					});
				}
				 
				if (humidity > 80){
  					$("#div11 .d").show();
  					$("#div11 .d").css({
  						'filter' : 'blur('+1.6+'px)',
  					});
 
				}  

				$("#div11").mouseover(
				function(){
					$("#div11 .h").html(data["current_observation"]["relative_humidity"] + " humidity").show();
					$("#div11 .t").html(data["current_observation"]["temp_f"] + " degrees").show();
					
				});

				$("#div11").mouseleave(
				function(){
					$("#div11 .h").html(data["current_observation"]["relative_humidity"]).hide();
					$("#div11 .t").html(data["current_observation"]["temp_f"] + " degrees").hide();
					
				});

				// -------------------------
				// this is temp stuff--------
				// --------------------------

				// if less than or equal to 0 degrees its blue
				if (temp <= 0) {
					$("#div11").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div11").css("background-color", "hsl("+ r +",90%,70%)");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div11").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div11").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div11").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#div11").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				}
				twelthCall();
			}
			getJSON();
		}

		function twelthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/AZ/Phoenix.json"

			parseData = function(data){
				console.log("success");

				$("#div12 .p").html(data["current_observation"]["display_location"]["full"]).show();

				humidity = parseInt(data["current_observation"]["relative_humidity"]);

				temp = data["current_observation"]["temp_f"];

				// -------------------------
				// this is humidity stuff---
				// --------------------------


if (humidity >= 0 && humidity <= 30){
  					$("#div12 .a").show();
  					$("#div12 .a").css({
  						'filter' : 'blur('+.02+'px)',
  					});
  					
				} 

				if (humidity > 30 && humidity <= 80){
  					$("#div12 .aa").show();
  					$("#div12 .aa").css({
  						'filter' : 'blur('+1+'px)',
  					});
				}
				 
				if (humidity > 80){
  					$("#div12 .d").show();
  					$("#div12 .d").css({
  						'filter' : 'blur('+1.6+'px)',
  					});
 
				} 

				$("#div12").mouseover(
				function(){
					$("#div12 .h").html(data["current_observation"]["relative_humidity"] + " humidity").show();
					$("#div12 .t").html(data["current_observation"]["temp_f"] + " degrees").show();
					
				});

				$("#div12").mouseleave(
				function(){
					$("#div12 .h").html(data["current_observation"]["relative_humidity"]).hide();
					$("#div12 .t").html(data["current_observation"]["temp_f"] + " degrees").hide();
					
				});

				// -------------------------
				// this is temp stuff--------
				// --------------------------

				// if less than or equal to 0 degrees its blue
				if (temp <= 0) {
					$("#div12").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div12").css("background-color", "hsl("+ r +",90%,70%)");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div12").css("background-color", "hsl("+ r +",90%,60%)");
					
				} 
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div12").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div12").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#div12").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				}
				thirteenthCall();
			}
			getJSON();
		}

		function thirteenthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/CO/Boise.json"

			parseData = function(data){
				console.log("success");

				$("#div13 .p").html(data["current_observation"]["display_location"]["full"]).show();

				humidity = parseInt(data["current_observation"]["relative_humidity"]);

				temp = data["current_observation"]["temp_f"];

				// -------------------------
				// this is humidity stuff---
				// --------------------------


if (humidity >= 0 && humidity <= 30){
  					$("#div13 .a").show();
  					$("#div13 .a").css({
  						'filter' : 'blur('+.02+'px)',
  					});
  					
				} 

				if (humidity > 30 && humidity <= 80){
  					$("#div13 .aa").show();
  					$("#div13 .aa").css({
  						'filter' : 'blur('+1+'px)',
  					});
				}
				 
				if (humidity > 80){
  					$("#div13 .d").show();
  					$("#div13 .d").css({
  						'filter' : 'blur('+1.6+'px)',
  					});
 
				}  

				$("#div13").mouseover(
				function(){
					$("#div13 .h").html(data["current_observation"]["relative_humidity"] + " humidity").show();
					$("#div13 .t").html(data["current_observation"]["temp_f"] + " degrees").show();
					
				});

				$("#div13").mouseleave(
				function(){
					$("#div13 .h").html(data["current_observation"]["relative_humidity"]).hide();
					$("#div13 .t").html(data["current_observation"]["temp_f"] + " degrees").hide();
					
				});

				// -------------------------
				// this is temp stuff--------
				// --------------------------

				// if less than or equal to 0 degrees its blue
				if (temp <= 0) {
					$("#div13").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div13").css("background-color", "hsl("+ r +",90%,70%)");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div13").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div13").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div13").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#div13").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				}
				fourteenthCall();
			}
			getJSON();
		}

		function fourteenthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/CO/Boulder.json"

			parseData = function(data){
				console.log("success");

				$("#div14 .p").html(data["current_observation"]["display_location"]["full"]).show();

				humidity = parseInt(data["current_observation"]["relative_humidity"]);

				temp = data["current_observation"]["temp_f"];

				// -------------------------
				// this is humidity stuff---
				// --------------------------


if (humidity >= 0 && humidity <= 30){
  					$("#div14 .a").show();
  					$("#div14 .a").css({
  						'filter' : 'blur('+.02+'px)',
  					});
  					
				} 

				if (humidity > 30 && humidity <= 80){
  					$("#div14 .aa").show();
  					$("#div14 .aa").css({
  						'filter' : 'blur('+1+'px)',
  					});
				}
				 
				if (humidity > 80){
  					$("#div14 .d").show();
  					$("#div14 .d").css({
  						'filter' : 'blur('+1.6+'px)',
  					});
 
				} 

				$("#div14").mouseover(
				function(){
					$("#div14 .h").html(data["current_observation"]["relative_humidity"] + " humidity").show();
					$("#div14 .t").html(data["current_observation"]["temp_f"] + " degrees").show();
					
				});

				$("#div14").mouseleave(
				function(){
					$("#div14 .h").html(data["current_observation"]["relative_humidity"]).hide();
					$("#div14 .t").html(data["current_observation"]["temp_f"] + " degrees").hide();
					
				});

				// -------------------------
				// this is temp stuff--------
				// --------------------------

				// if less than or equal to 0 degrees its blue
				if (temp <= 0) {
					$("#div14").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div14").css("background-color", "hsl("+ r +",90%,70%)");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div14").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div14").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div14").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#div14").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				}
				fifteenthCall();
			}
			getJSON();
		}

	


		function fifteenthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/CO/Colorado_Springs.json"

			parseData = function(data){
				console.log("success");

				$("#div15 .p").html(data["current_observation"]["display_location"]["full"]).show();

				humidity = parseInt(data["current_observation"]["relative_humidity"]);

				temp = data["current_observation"]["temp_f"];

				// -------------------------
				// this is humidity stuff---
				// --------------------------


if (humidity >= 0 && humidity <= 30){
  					$("#div15 .a").show();
  					$("#div15 .a").css({
  						'filter' : 'blur('+.02+'px)',
  					});
  					
				} 

				if (humidity > 30 && humidity <= 80){
  					$("#div15 .aa").show();
  					$("#div15 .aa").css({
  						'filter' : 'blur('+1+'px)',
  					});
				}
				 
				if (humidity > 80){
  					$("#div15 .d").show();
  					$("#div15 .d").css({
  						'filter' : 'blur('+1.6+'px)',
  					});
 
				} 

				$("#div15").mouseover(
				function(){
					$("#div15 .h").html(data["current_observation"]["relative_humidity"] + " humidity").show();
					$("#div15 .t").html(data["current_observation"]["temp_f"] + " degrees").show();
					
				});

				$("#div15").mouseleave(
				function(){
					$("#div15 .h").html(data["current_observation"]["relative_humidity"]).hide();
					$("#div15 .t").html(data["current_observation"]["temp_f"] + " degrees").hide();
					
				});


				// -------------------------
				// this is temp stuff--------
				// --------------------------

				// if less than or equal to 0 degrees its blue
				if (temp <= 0) {
					$("#div15").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div15").css("background-color", "hsl("+ r +",90%,70%)");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div15").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div15").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div15").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#div15").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				}
				sixteenthCall();
			}
			getJSON();
		}

		function sixteenthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/UT/St_George.json"

			parseData = function(data){
				console.log("success");

				$("#div16 .p").html(data["current_observation"]["display_location"]["full"]).show();

				humidity = parseInt(data["current_observation"]["relative_humidity"]);

				temp = data["current_observation"]["temp_f"];

				// -------------------------
				// this is humidity stuff---
				// --------------------------


if (humidity >= 0 && humidity <= 30){
  					$("#div16 .a").show();
  					$("#div16 .a").css({
  						'filter' : 'blur('+.02+'px)',
  					});
  					
				} 

				if (humidity > 30 && humidity <= 80){
  					$("#div16 .aa").show();
  					$("#div16 .aa").css({
  						'filter' : 'blur('+1+'px)',
  					});
				}
				 
				if (humidity > 80){
  					$("#div16 .d").show();
  					$("#div16 .d").css({
  						'filter' : 'blur('+1.6+'px)',
  					});
 
				} 

				$("#div16").mouseover(
				function(){
					$("#div16 .h").html(data["current_observation"]["relative_humidity"] + " humidity").show();
					$("#div16 .t").html(data["current_observation"]["temp_f"] + " degrees").show();
					
				});

				$("#div16").mouseleave(
				function(){
					$("#div16 .h").html(data["current_observation"]["relative_humidity"]).hide();
					$("#div16 .t").html(data["current_observation"]["temp_f"] + " degrees").hide();
					
				});


				// -------------------------
				// this is temp stuff--------
				// --------------------------

				// if less than or equal to 0 degrees its blue
				if (temp <= 0) {
					$("#div16").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div16").css("background-color", "hsl("+ r +",90%,70%)");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div16").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div16").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div16").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#div16").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				}
				seventeenthCall();
			}
			getJSON();
		}

		function seventeenthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/RI/Providence.json"

			parseData = function(data){
				console.log("success");

				$("#div17 .p").html(data["current_observation"]["display_location"]["full"]).show();

				humidity = parseInt(data["current_observation"]["relative_humidity"]);

				temp = data["current_observation"]["temp_f"];

				// -------------------------
				// this is humidity stuff---
				// --------------------------


if (humidity >= 0 && humidity <= 30){
  					$("#div17 .a").show();
  					$("#div17 .a").css({
  						'filter' : 'blur('+.02+'px)',
  					});
  					
				} 

				if (humidity > 30 && humidity <= 80){
  					$("#div17 .aa").show();
  					$("#div17 .aa").css({
  						'filter' : 'blur('+1+'px)',
  					});
				}
				 
				if (humidity > 80){
  					$("#div17 .d").show();
  					$("#div17 .d").css({
  						'filter' : 'blur('+1.6+'px)',
  					});
 
				} 

				$("#div17").mouseover(
				function(){
					$("#div17 .h").html(data["current_observation"]["relative_humidity"] + " humidity").show();
					$("#div17 .t").html(data["current_observation"]["temp_f"] + " degrees").show();
					
				});

				$("#div17").mouseleave(
				function(){
					$("#div17 .h").html(data["current_observation"]["relative_humidity"]).hide();
					$("#div17 .t").html(data["current_observation"]["temp_f"] + " degrees").hide();
					
				});

				// -------------------------
				// this is temp stuff--------
				// --------------------------

				// if less than or equal to 0 degrees its blue
				if (temp <= 0) {
					$("#div17").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div17").css("background-color", "hsl("+ r +",90%,70%)");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div17").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div17").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div17").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#div17").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				}
				eighteenthCall();
			}
			getJSON();
		}

		function eighteenthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/GA/Savannah.json"

			parseData = function(data){
				console.log("success");

				$("#div18 .p").html(data["current_observation"]["display_location"]["full"]).show();

				humidity = parseInt(data["current_observation"]["relative_humidity"]);

				temp = data["current_observation"]["temp_f"];

				// -------------------------
				// this is humidity stuff---
				// --------------------------


if (humidity >= 0 && humidity <= 30){
  					$("#div18 .a").show();
  					$("#div18 .a").css({
  						'filter' : 'blur('+.02+'px)',
  					});
  					
				} 

				if (humidity > 30 && humidity <= 80){
  					$("#div18 .aa").show();
  					$("#div18 .aa").css({
  						'filter' : 'blur('+1+'px)',
  					});
				}
				 
				if (humidity > 80){
  					$("#div18 .d").show();
  					$("#div18 .d").css({
  						'filter' : 'blur('+1.6+'px)',
  					});
 
				} 

				$("#div18").mouseover(
				function(){
					$("#div18 .h").html(data["current_observation"]["relative_humidity"] + " humidity").show();
					$("#div18 .t").html(data["current_observation"]["temp_f"] + " degrees").show();
					
				});

				$("#div18").mouseleave(
				function(){
					$("#div18 .h").html(data["current_observation"]["relative_humidity"]).hide();
					$("#div18 .t").html(data["current_observation"]["temp_f"] + " degrees").hide();
					
				});

				// -------------------------
				// this is temp stuff--------
				// --------------------------

				// if less than or equal to 0 degrees its blue
				if (temp <= 0) {
					$("#div18").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div18").css("background-color", "hsl("+ r +",90%,70%)");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div18").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div18").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div18").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#div18").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				}
				nineteenthCall();
			}
			getJSON();
		}

		function nineteenthCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/LA/New_Orleans.json"

			parseData = function(data){
				console.log("success");

				$("#div19 .p").html(data["current_observation"]["display_location"]["full"]).show();

				humidity = parseInt(data["current_observation"]["relative_humidity"]);

				temp = data["current_observation"]["temp_f"];

				// -------------------------
				// this is humidity stuff---
				// --------------------------


if (humidity >= 0 && humidity <= 30){
  					$("#div19 .a").show();
  					$("#div19 .a").css({
  						'filter' : 'blur('+.02+'px)',
  					});
  					
				} 

				if (humidity > 30 && humidity <= 80){
  					$("#div19 .aa").show();
  					$("#div19 .aa").css({
  						'filter' : 'blur('+1+'px)',
  					});
				}
				 
				if (humidity > 80){
  					$("#div19 .d").show();
  					$("#div19 .d").css({
  						'filter' : 'blur('+1.6+'px)',
  					});
 
				}  

				$("#div19").mouseover(
				function(){
					$("#div19 .h").html(data["current_observation"]["relative_humidity"] + " humidity").show();
					$("#div19 .t").html(data["current_observation"]["temp_f"] + " degrees").show();
					
				});

				$("#div19").mouseleave(
				function(){
					$("#div19 .h").html(data["current_observation"]["relative_humidity"]).hide();
					$("#div19 .t").html(data["current_observation"]["temp_f"] + " degrees").hide();
					
				});

				// -------------------------
				// this is temp stuff--------
				// --------------------------

				// if less than or equal to 0 degrees its blue
				if (temp <= 0) {
					$("#div19").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div19").css("background-color", "hsl("+ r +",90%,70%)");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div19").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div19").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div19").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#div19").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				}
				twentiethCall();
			}
			getJSON();
		}

		function twentiethCall() {
			// redefine URL
			wURL = "http://api.wunderground.com/api/d82300bc29b4d7cc/conditions/q/NM/Albuquerque.json"

			parseData = function(data){
				console.log("success");

				$("#div20 .p").html(data["current_observation"]["display_location"]["full"]).show();

				humidity = parseInt(data["current_observation"]["relative_humidity"]);

				temp = data["current_observation"]["temp_f"];

				// -------------------------
				// this is humidity stuff---
				// --------------------------


				if (humidity >= 0 && humidity <= 30){
  					$("#div20 .a").show();
  					$("#div20 .a").css({
  						'filter' : 'blur('+.02+'px)',
  					});
  					
				} 

				if (humidity > 30 && humidity <= 80){
  					$("#div20 .aa").show();
  					$("#div20 .aa").css({
  						'filter' : 'blur('+1+'px)',
  					});
				}
				 
				if (humidity > 80){
  					$("#div20 .d").show();
  					$("#div20 .d").css({
  						'filter' : 'blur('+1.6+'px)',
  					});
 
				} 

				$("#div20").mouseover(
				function(){
					$("#div20 .h").html(data["current_observation"]["relative_humidity"] + " humidity").show();
					$("#div20 .t").html(data["current_observation"]["temp_f"] + " degrees").show();
					
				});

				$("#div20").mouseleave(
				function(){
					$("#div20 .h").html(data["current_observation"]["relative_humidity"]).hide();
					$("#div20 .t").html(data["current_observation"]["temp_f"] + " degrees").hide();
					
				});

				// -------------------------
				// this is temp stuff--------
				// --------------------------

				// if less than or equal to 0 degrees its blue
				if (temp <= 0) {
					$("#div20").css({
						"background-color" : "hsl(180, 100%, 82%)"
					});
				}
				// shades between 0-20 are all blues
				if (temp > 0 && temp <= 20){
  					min = Math.ceil(180);
					max = Math.floor(150);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div20").css("background-color", "hsl("+ r +",90%,70%)");
					
				} 
				// shades between 20-40 are all greenish blue
				if (temp > 20 && temp <= 40){
  					min = Math.ceil(210);
					max = Math.floor(190);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div20").css("background-color", "hsl("+ r +",90%,60%)");
					
				}
				// shades between 40-60 are all purples
				if (temp > 40 && temp <= 60){
  					min = Math.ceil(215);
					max = Math.floor(240);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div20").css("background-color", "hsl("+ r +",50%,60%)");
					
				}
				// shades between 60-90 are all warm tones.... yellows orange reds
				if (temp > 60 && temp <= 90){
  					min = Math.ceil(60);
					max = Math.floor(28);
					
					r = Math.floor(Math.random() * (max - min + 1)) + min;
					$("#div20").css("background-color", "hsl("+ r +",90%,60%)");
					
				}

				// if greater than 90 its just red
				if (temp > 90) {
					$("#div20").css({
						"background-color" : "hsl(15, 100%, 60%)"
					});
				}
				
			}
			getJSON();
		}

	



























