$(window).ready(function() {
	bindEventHandlers();
});

function bindEventHandlers() {
	$("#searchBar").keyup(function(e) {
		if (e.keyCode == 13) {
			doSearch();
		}
	});

	$("#searchButton").click(function() {
		doSearch();
	});

	$("#symbolContainer").on("click", "tr", function() {
		getStockQuote($(this).attr("data-symbol"));
	})
};

function doSearch() {
	var searchField = $('#searchBar');
	// do search
	$.get({
		data: {
			input: $('#searchBar').val(),
		},
		dataType: "jsonp",
		url: "http://dev.markitondemand.com/Api/v2/Lookup/jsonp",
		complete: function(data){
			if (data.responseJSON) {
				showSearchResults(data.responseJSON);
			}
		}
	});
}

function showSearchResults(json) {
	var stock,
		error = $('#errorContainer'),
		searchResults = $('#symbolContainer'),
		table = searchResults.find("table"),
		tableBody = table.find("tbody");

	if (json.length > 0) {
		error.hide();
		tableBody.empty();
		for (var i = json.length - 1; i >= 0; i--) {
			symbol = json[i];
			tableRow = $('<tr data-symbol=' + symbol.Symbol + '></tr>');
			tableRow.append("<td>" + symbol.Name + "</td>");
			tableRow.append("<td>" + symbol.Symbol + "</td>");
			tableBody.append(tableRow);
		}
		searchResults.show();
	}
	else {
		searchResults.hide();
		error.empty();
		error.text("No Search Results");
		error.show();
	}
}

function getStockQuote(symbol){

	$.get({
		data: {
			symbol: symbol
		},
		dataType: "jsonp",
		url: "http://dev.markitondemand.com/Api/v2/Quote/jsonp",
		complete: function(data){
			console.log(data);
			response = data.responseJSON;

			// symbol info
			var symbol = response.Symbol;
			var name = response.Name;

			// price info
			var low = response.Low;
			var high = response.High;
			var open = response.Open;
			var lastPrice = response.LastPrice; //used
			var timestamp = response.Timestamp; //used

			// change info
			var change = response.Change.toFixed(2); //used
			var changePercent = response.ChangePercent.toFixed(2); //used

			// YTD info
			var changeYTD = response.ChangeYTD;
			var changePercentYTD = response.ChangePercentYTD.toFixed(2); //used

			// stock qty info
			var marketCap = response.MarketCap;
			var volume = response.Volume;

			$('#stock').css('display','block');
			$('#stockName').html(name + ' (' + symbol + ')');
			$('#stockLastPrice').html('Last Price: $' + lastPrice);
			$('#stockChange').html('Change: ' + change);
			$('#stockChangePercent').html('Change Percent: ' + changePercent + '%');
			$("#stockChangePercentYTD").html('Change Percent YTD: ' + changePercentYTD);
			$("#stockLastTraded").html('Last Traded: ' + timestamp);
		}
	});
}
