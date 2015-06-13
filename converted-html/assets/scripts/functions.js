// INSTAGRAM FEED

$(function() {

    //Set up instafeed
    var feed = new Instafeed({
        get:"user",
        clientId: '61c3a51efe24466db284b2953dd5b4c0',
        target: 'instafeed',
        userId: 241386756,
        accessToken:"241386756.61c3a51.70d3ca34ac4945ddba662d7b1b092af9",
        limit: 1,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',

  after: function () {
    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');
    });
  },
  template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes">&hearts; {{likes}}</div></a>'



    });
    feed.run();

});

// SCROLL TO TOP

jQuery(document).ready(function($){
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

  //hide or show the "back to top" link
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if( $(this).scrollTop() > offset_opacity ) { 
      $back_to_top.addClass('cd-fade-out');
    }
  });

  //smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
      }, scroll_top_duration
    );
  });

});


jQuery(document).ready(function($){
  // browser window scroll (in pixels) after which the "menu" link is shown
  var offset = 300;

  var navigationContainer = $('#cd-nav'),
    mainNavigation = navigationContainer.find('#cd-main-nav ul');

  //hide or show the "menu" link
  checkMenu();
  $(window).scroll(function(){
    checkMenu();
  });

  //open or close the menu clicking on the bottom "menu" link
  $('.cd-nav-trigger').on('click', function(){
    $(this).toggleClass('menu-is-open');
    //we need to remove the transitionEnd event handler (we add it when scolling up with the menu open)
    mainNavigation.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');

  });

  function checkMenu() {
    if( $(window).scrollTop() > offset && !navigationContainer.hasClass('is-fixed')) {
      navigationContainer.addClass('is-fixed').find('.cd-nav-trigger').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
        mainNavigation.addClass('has-transitions');
      });
    } else if ($(window).scrollTop() <= offset) {
      //check if the menu is open when scrolling up
      if( mainNavigation.hasClass('is-visible')  && !$('html').hasClass('no-csstransitions') ) {
        //close the menu with animation
        mainNavigation.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          //wait for the menu to be closed and do the rest
          mainNavigation.removeClass('is-visible is-hidden has-transitions');
          navigationContainer.removeClass('is-fixed');
          $('.cd-nav-trigger').removeClass('menu-is-open');
        });
      //check if the menu is open when scrolling up - fallback if transitions are not supported
      } else if( mainNavigation.hasClass('is-visible')  && $('html').hasClass('no-csstransitions') ) {
          mainNavigation.removeClass('is-visible has-transitions');
          navigationContainer.removeClass('is-fixed');
          $('.cd-nav-trigger').removeClass('menu-is-open');
      //scrolling up with menu closed
      } else {
        navigationContainer.removeClass('is-fixed');
        mainNavigation.removeClass('has-transitions');
      }
    } 
  }
});
