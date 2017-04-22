$(document).ready(function(){

	$.get({
		data: {
			input: "AAPL"
		},
		dataType: "jsonp",
		url: "http://dev.markitondemand.com/Api/v2/Lookup/jsonp",
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
			var change = response.Change; //used
			var changePercent = response.ChangePercent; //used

			// YTD info
			var changeYTD = response.ChangeYTD;
			var changePercentYTD = response.ChangePercentYTD //used

			// stock qty info
			var marketCap = response.MarketCap;
			var volume = response.Volume;
		}
	});

});