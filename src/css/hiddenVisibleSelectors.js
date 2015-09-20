define( [
	"../core",
	"../selector"
], function( jQuery ) {

jQuery.expr.filters.hidden = function( elem ) {
	return !jQuery.expr.filters.visible( elem );
};
jQuery.expr.filters.visible = function( elem ) {
	
	return !!( elem.offsetWidth || elem.offsetHeight || hasNonZeroDimensions(elem));
};

function hasNonZeroDimensions(elem) {
	//Logic dictates this is how dimensionsVisible should be initialized independently.
	//As a helper method to jQuery.expr.filters.visible it is completely unnecessary
	//And could be set to false.
	var dimensionsVisible = !!( elem.offsetWidth || elem.offsetHeight);
	var clientRects;
	
	if(!dimensionsVisible) { 			//Again, completely unnecessary in helper scenario
		clientRects = elem.getClientRects();	//Helper scenario, combine with declaration 
		for(var i = 0; i < clientRects.length && !dimensionsVisible; i++) {
			dimensionsVisible = !!(clientRects.item(i).width || clientRects.item(i).height);
		}
	}
	
	return dimensionsVisible;
}


} );
