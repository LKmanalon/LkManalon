/** Smooth scroll to top **/
jQuery('.RegisterTop').click(function(){
    jQuery('html, body').animate({scrollTop : 0},600);
    return false;
});

jQuery(document).ready(function(){ 
	jQuery('.mobile-hamburger').click(function(){

			if( (jQuery('.navigation').hasClass('show')) )
			{
				jQuery('.navigation').removeClass('show');
				jQuery('.mobile-hamburger span').html('&#9776;');
			}
			else
			{
				jQuery('.navigation').addClass('show');
				jQuery('.mobile-hamburger span').html('&#x2715');
			}
	 		
	});

	jQuery('.mobile-tooltip').click(function(){

			if( (jQuery('.header-nap').hasClass('show')) )
			{
				jQuery('.header-nap').removeClass('show');
				jQuery('.mobile-tooltip span').html('<i class="fas fa-caret-down"></i>');
			}
			else
			{
				jQuery('.header-nap').addClass('show');
				jQuery('.mobile-tooltip span').html('<i class="fas fa-caret-up"></i>');
			}
	 		
	});

});
