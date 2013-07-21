// Delete me when ready


var myScroll;
function loaded() {
	myScroll = new iScroll('SubNavBar',  { 
		hScrollbar: false, 
		vScrollbar: false, 
		vScroll: false 
	});
}

// document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', loaded, false);


