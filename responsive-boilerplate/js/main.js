$(document).ready(function(){

	console.log("RSS - Responsive");

	var statement = "select * from feed where url='https://en.wikipedia.org/w/index.php?title=Special:NewPages&feed=rss'";
	$.queryYQL(statement, "json", undefined, function (data) {
	  

	  $("#main").append("<h1>whats goin on wiki????</h1>")

	  for (var i = 0; i < data.query.results.item.length; i++) { // for each result:
              
            console.log(data.query.results.item[i]) // console log the result's object

            $(".stuff").append("<h2>" + data.query.results.item[i].title + "<h2>" + "<h3>" + data.query.results.item[i].pubDate + "</h3" + "<p>" + data.query.results.item[i].link + "</p>")

            }

	});

})