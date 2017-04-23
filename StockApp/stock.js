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
	var searchResults = $('#symbolContainer');
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

/* test purposes only
$(document).ready(function(){
	getStockQuote("AAPL");
});
*/