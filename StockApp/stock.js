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
	console.log("searching");
}