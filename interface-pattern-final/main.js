console.log("hi")

$(document).ready(function() {

	
	var n = "";

	$("#one").mousedown(function(){

		$('#three').animate({
				top: '-=100vh'
			}, 60000)

		var clicks = 0;

		clicks++
		console.log('clicks',clicks)

		

		var timer = 0;

		
		for (var i = 0; i < 100; i++){
		setTimeout(function() { 
			n += "⋮⋯⋰⋱";
			console.log(n);	
	}, timer);
	timer += 100;
}
	for (var i = 0; i < 100; i++){
		setTimeout(function() { 
			n += "◤◢ ◣◥ ";
			console.log(n);	
	}, timer);
	timer += 80;
	}

	for (var i = 0; i < 100; i++){
		setTimeout(function() { 
			n += "▁ ▂ ▃ ";
			console.log(n);	
	}, timer);
	timer += 60;
	}

	for (var i = 0; i < 300; i++){
		setTimeout(function() { 
			n += "█ ▉ ▊";
			console.log(n);	
	}, timer);
	timer += 40;
	}

	for (var i = 0; i < 500; i++){
		setTimeout(function() { 
			n += " ▙▜";
			console.log(n);	
	}, timer);
	timer += 20;
	}

	for (var i = 0; i < 500; i++){
		setTimeout(function() { 
			n += "█ ▉▊";
			console.log(n);	
	}, timer);
	timer += 10;
	}

	for (var i = 0; i < 600; i++){
		setTimeout(function() { 
			n += " ██";
			console.log(n);	
	}, timer);
	timer += 05;
	}
	




	});	

	
});