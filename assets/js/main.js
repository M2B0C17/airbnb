$(document).ready(function() {
	$('select').material_select();

	$("#range_07").ionRangeSlider({
	    type: "double",
	    grid: true,
	    from: 1,
	    to: 5,
	    values: [0, 10, 100, 1000, 10000, 100000, 1000000]
	});
});