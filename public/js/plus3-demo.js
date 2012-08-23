// This javascript is used to initialize the various dynamic
// elements on the page (after everything else is loaded)

$(document).ready(function () {
	
	// Enable tooltip popups
	$("[rel=tooltip]").tooltip();
	
	var floating_footer = $('div.floating-footer');
	var footer_expander = floating_footer.find('div.expand');
	var footer_expander_icon = floating_footer.find('i');
	footer_expander.click(function() {
		if(!floating_footer.hasClass("expanded")){
			floating_footer.addClass("expanded");
			footer_expander.attr("data-original-title", "Click to collapse");
			footer_expander_icon.addClass("icon-chevron-down").removeClass("icon-chevron-up");
		}else{
			floating_footer.removeClass("expanded");
			footer_expander.attr("data-original-title", "Click to expand");
			footer_expander_icon.addClass("icon-chevron-up").removeClass("icon-chevron-down");
		}
	});
	
});
