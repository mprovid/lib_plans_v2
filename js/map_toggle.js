$(function($){
	// Map Toggle, M. Providenti (2018) 
	$('.toggle').on(' click ', function(e) {
		 var steelyLayerId = $(this).data('layer');
		 $( "." + steelyLayerId).toggle('slow'); 
		// e.stopPropagation();
	   });
	$("input.steely-toggle[type='checkbox']").prop('checked',false);
});