$(window).ready(function() {
	bindEventHandlers();
});

function bindEventHandlers() {
	$("#chartUpdate").click(function() {
		updateChart();
	});
};

function updateChart() {
	var startDate = $("#startDate"),
		endDate = $("#endDate"),
		stockVal = $("#chartText"),
		chartHolder = $("#chartContainer")

	console.log(startDate.val());
	console.log(endDate.val());
	console.log(stockVal.val());
}
