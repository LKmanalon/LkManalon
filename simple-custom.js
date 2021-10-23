function openTab(evt, openTab) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(openTab).style.display = "block";
  evt.currentTarget.className += " active";
}

jQuery(document).ready(function(){ 

  jQuery('#onethree-oneeight .step-heading-1').addClass('active');
  jQuery('#onethree-oneeight .step-content-1').addClass('active');

  jQuery('#call-tracking .step-heading-1').addClass('active');
  jQuery('#call-tracking .step-content-1').addClass('active');

  jQuery('#hosted-pbx .step-heading-1').addClass('active');
  jQuery('#hosted-pbx .step-content-1').addClass('active');

  jQuery('#ivr-attendant .step-heading-1').addClass('active');
  jQuery('#ivr-attendant .step-content-1').addClass('active');

  jQuery('.tab button').click(function(e){
      e.preventDefault();

      jQuery('#onethree-oneeight .step-heading-1').addClass('active');
      jQuery('#onethree-oneeight .step-content-1').addClass('active');
      jQuery('#onethree-oneeight .step-heading-2').removeClass('active');
      jQuery('#onethree-oneeight .step-content-2').removeClass('active');
      jQuery('#onethree-oneeight .step-heading-3').removeClass('active');
      jQuery('#onethree-oneeight .step-content-3').removeClass('active');
      jQuery('#onethree-oneeight .step-heading-4').removeClass('active');
      jQuery('#onethree-oneeight .step-content-4').removeClass('active');

      jQuery('#call-tracking .step-heading-1').addClass('active');
      jQuery('#call-tracking .step-content-1').addClass('active');
      jQuery('#call-tracking .step-heading-2').removeClass('active');
      jQuery('#call-tracking .step-content-2').removeClass('active');
      jQuery('#call-tracking .step-heading-3').removeClass('active');
      jQuery('#call-tracking .step-content-3').removeClass('active');
      jQuery('#call-tracking .step-heading-4').removeClass('active');
      jQuery('#call-tracking .step-content-4').removeClass('active');

      jQuery('#hosted-pbx .step-heading-1').addClass('active');
      jQuery('#hosted-pbx .step-content-1').addClass('active');
      jQuery('#hosted-pbx .step-heading-2').removeClass('active');
      jQuery('#hosted-pbx .step-content-2').removeClass('active');
      jQuery('#hosted-pbx .step-heading-3').removeClass('active');
      jQuery('#hosted-pbx .step-content-3').removeClass('active');
      jQuery('#hosted-pbx .step-heading-4').removeClass('active');
      jQuery('#hosted-pbx .step-content-4').removeClass('active');

      jQuery('#ivr-attendant .step-heading-1').addClass('active');
      jQuery('#ivr-attendant .step-content-1').addClass('active');
      jQuery('#ivr-attendant .step-heading-2').removeClass('active');
      jQuery('#ivr-attendant .step-content-2').removeClass('active');
      jQuery('#ivr-attendant .step-heading-3').removeClass('active');
      jQuery('#ivr-attendant .step-content-3').removeClass('active');
      jQuery('#ivr-attendant .step-heading-4').removeClass('active');
      jQuery('#ivr-attendant .step-content-4').removeClass('active');

  });

  jQuery('#onethree-oneeight .next-button').click(function(e){
      e.preventDefault();

      if( (jQuery('#onethree-oneeight .step-heading-1').hasClass('active')) )
      {
        jQuery('#onethree-oneeight .step-heading-1').removeClass('active');
        jQuery('#onethree-oneeight .step-content-1').removeClass('active');
        jQuery('#onethree-oneeight .step-heading-2').addClass('active');
        jQuery('#onethree-oneeight .step-content-2').addClass('active');
      }

      else if( (jQuery('#onethree-oneeight .step-heading-2').hasClass('active')) )
      {
        jQuery('#onethree-oneeight .step-heading-2').removeClass('active');
        jQuery('#onethree-oneeight .step-content-2').removeClass('active');
        jQuery('#onethree-oneeight .step-heading-3').addClass('active');
        jQuery('#onethree-oneeight .step-content-3').addClass('active');
      }

      else if( (jQuery('#onethree-oneeight .step-heading-3').hasClass('active')) )
      {
        jQuery('#onethree-oneeight .step-heading-3').removeClass('active');
        jQuery('#onethree-oneeight .step-content-3').removeClass('active');
        jQuery('#onethree-oneeight .step-heading-4').addClass('active');
        jQuery('#onethree-oneeight .step-content-4').addClass('active');
      }
      
  });

  jQuery('#onethree-oneeight .back-button').click(function(e){
      e.preventDefault();

      if( (jQuery('#onethree-oneeight .step-heading-2').hasClass('active')) )
      {
        jQuery('#onethree-oneeight .step-heading-2').removeClass('active');
        jQuery('#onethree-oneeight .step-content-2').removeClass('active');
        jQuery('#onethree-oneeight .step-heading-1').addClass('active');
        jQuery('#onethree-oneeight .step-content-1').addClass('active');
      }

      else if( (jQuery('#onethree-oneeight .step-heading-3').hasClass('active')) )
      {
        jQuery('#onethree-oneeight .step-heading-3').removeClass('active');
        jQuery('#onethree-oneeight .step-content-3').removeClass('active');
        jQuery('#onethree-oneeight .step-heading-2').addClass('active');
        jQuery('#onethree-oneeight .step-content-2').addClass('active');
      }

      else if( (jQuery('#onethree-oneeight .step-heading-4').hasClass('active')) )
      {
        jQuery('#onethree-oneeight .step-heading-4').removeClass('active');
        jQuery('#onethree-oneeight .step-content-4').removeClass('active');
        jQuery('#onethree-oneeight .step-heading-3').addClass('active');
        jQuery('#onethree-oneeight .step-content-3').addClass('active');
      }

  });

  jQuery('#call-tracking .next-button').click(function(e){
      e.preventDefault();

      if( (jQuery('#call-tracking .step-heading-1').hasClass('active')) )
      {
        jQuery('#call-tracking .step-heading-1').removeClass('active');
        jQuery('#call-tracking .step-content-1').removeClass('active');
        jQuery('#call-tracking .step-heading-2').addClass('active');
        jQuery('#call-tracking .step-content-2').addClass('active');
      }

      else if( (jQuery('#call-tracking .step-heading-2').hasClass('active')) )
      {
        jQuery('#call-tracking .step-heading-2').removeClass('active');
        jQuery('#call-tracking .step-content-2').removeClass('active');
        jQuery('#call-tracking .step-heading-3').addClass('active');
        jQuery('#call-tracking .step-content-3').addClass('active');
      }

      else if( (jQuery('#call-tracking .step-heading-3').hasClass('active')) )
      {
        jQuery('#call-tracking .step-heading-3').removeClass('active');
        jQuery('#call-tracking .step-content-3').removeClass('active');
        jQuery('#call-tracking .step-heading-4').addClass('active');
        jQuery('#call-tracking .step-content-4').addClass('active');
      }
      
  });

  jQuery('#call-tracking .back-button').click(function(e){
      e.preventDefault();

      if( (jQuery('#call-tracking .step-heading-2').hasClass('active')) )
      {
        jQuery('#call-tracking .step-heading-2').removeClass('active');
        jQuery('#call-tracking .step-content-2').removeClass('active');
        jQuery('#call-tracking .step-heading-1').addClass('active');
        jQuery('#call-tracking .step-content-1').addClass('active');
      }

      else if( (jQuery('#call-tracking .step-heading-3').hasClass('active')) )
      {
        jQuery('#call-tracking .step-heading-3').removeClass('active');
        jQuery('#call-tracking .step-content-3').removeClass('active');
        jQuery('#call-tracking .step-heading-2').addClass('active');
        jQuery('#call-tracking .step-content-2').addClass('active');
      }

      else if( (jQuery('#call-tracking .step-heading-4').hasClass('active')) )
      {
        jQuery('#call-tracking .step-heading-4').removeClass('active');
        jQuery('#call-tracking .step-content-4').removeClass('active');
        jQuery('#call-tracking .step-heading-3').addClass('active');
        jQuery('#call-tracking .step-content-3').addClass('active');
      }

  });

  jQuery('#hosted-pbx .next-button').click(function(e){
      e.preventDefault();

      if( (jQuery('#hosted-pbx .step-heading-1').hasClass('active')) )
      {
        jQuery('#hosted-pbx .step-heading-1').removeClass('active');
        jQuery('#hosted-pbx .step-content-1').removeClass('active');
        jQuery('#hosted-pbx .step-heading-2').addClass('active');
        jQuery('#hosted-pbx .step-content-2').addClass('active');
      }

      else if( (jQuery('#hosted-pbx .step-heading-2').hasClass('active')) )
      {
        jQuery('#hosted-pbx .step-heading-2').removeClass('active');
        jQuery('#hosted-pbx .step-content-2').removeClass('active');
        jQuery('#hosted-pbx .step-heading-3').addClass('active');
        jQuery('#hosted-pbx .step-content-3').addClass('active');
      }

      else if( (jQuery('#hosted-pbx .step-heading-3').hasClass('active')) )
      {
        jQuery('#hosted-pbx .step-heading-3').removeClass('active');
        jQuery('#hosted-pbx .step-content-3').removeClass('active');
        jQuery('#hosted-pbx .step-heading-4').addClass('active');
        jQuery('#hosted-pbx .step-content-4').addClass('active');
      }
      
  });

  jQuery('#hosted-pbx .back-button').click(function(e){
      e.preventDefault();

      if( (jQuery('#hosted-pbx .step-heading-2').hasClass('active')) )
      {
        jQuery('#hosted-pbx .step-heading-2').removeClass('active');
        jQuery('#hosted-pbx .step-content-2').removeClass('active');
        jQuery('#hosted-pbx .step-heading-1').addClass('active');
        jQuery('#hosted-pbx .step-content-1').addClass('active');
      }

      else if( (jQuery('#hosted-pbx .step-heading-3').hasClass('active')) )
      {
        jQuery('#hosted-pbx .step-heading-3').removeClass('active');
        jQuery('#hosted-pbx .step-content-3').removeClass('active');
        jQuery('#hosted-pbx .step-heading-2').addClass('active');
        jQuery('#hosted-pbx .step-content-2').addClass('active');
      }

      else if( (jQuery('#hosted-pbx .step-heading-4').hasClass('active')) )
      {
        jQuery('#hosted-pbx .step-heading-4').removeClass('active');
        jQuery('#hosted-pbx .step-content-4').removeClass('active');
        jQuery('#hosted-pbx .step-heading-3').addClass('active');
        jQuery('#hosted-pbx .step-content-3').addClass('active');
      }

  });

  jQuery('#ivr-attendant .next-button').click(function(e){
      e.preventDefault();

      if( (jQuery('#ivr-attendant .step-heading-1').hasClass('active')) )
      {
        jQuery('#ivr-attendant .step-heading-1').removeClass('active');
        jQuery('#ivr-attendant .step-content-1').removeClass('active');
        jQuery('#ivr-attendant .step-heading-2').addClass('active');
        jQuery('#ivr-attendant .step-content-2').addClass('active');
      }

      else if( (jQuery('#ivr-attendant .step-heading-2').hasClass('active')) )
      {
        jQuery('#ivr-attendant .step-heading-2').removeClass('active');
        jQuery('#ivr-attendant .step-content-2').removeClass('active');
        jQuery('#ivr-attendant .step-heading-3').addClass('active');
        jQuery('#ivr-attendant .step-content-3').addClass('active');
      }

      else if( (jQuery('#ivr-attendant .step-heading-3').hasClass('active')) )
      {
        jQuery('#ivr-attendant .step-heading-3').removeClass('active');
        jQuery('#ivr-attendant .step-content-3').removeClass('active');
        jQuery('#ivr-attendant .step-heading-4').addClass('active');
        jQuery('#ivr-attendant .step-content-4').addClass('active');
      }
      
  });

  jQuery('#ivr-attendant .back-button').click(function(e){
      e.preventDefault();

      if( (jQuery('#ivr-attendant .step-heading-2').hasClass('active')) )
      {
        jQuery('#ivr-attendant .step-heading-2').removeClass('active');
        jQuery('#ivr-attendant .step-content-2').removeClass('active');
        jQuery('#ivr-attendant .step-heading-1').addClass('active');
        jQuery('#ivr-attendant .step-content-1').addClass('active');
      }

      else if( (jQuery('#ivr-attendant .step-heading-3').hasClass('active')) )
      {
        jQuery('#ivr-attendant .step-heading-3').removeClass('active');
        jQuery('#ivr-attendant .step-content-3').removeClass('active');
        jQuery('#ivr-attendant .step-heading-2').addClass('active');
        jQuery('#ivr-attendant .step-content-2').addClass('active');
      }

      else if( (jQuery('#ivr-attendant .step-heading-4').hasClass('active')) )
      {
        jQuery('#ivr-attendant .step-heading-4').removeClass('active');
        jQuery('#ivr-attendant .step-content-4').removeClass('active');
        jQuery('#ivr-attendant .step-heading-3').addClass('active');
        jQuery('#ivr-attendant .step-content-3').addClass('active');
      }

  });


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