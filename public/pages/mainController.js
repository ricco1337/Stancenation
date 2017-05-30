angular.module('app').controller('mainController', function($scope) {});
$(document).ready(function() {

  $('.nav-link').mouseenter(function() {
    $(this).find('.hover-box').show();
  });
  $('.nav-link').mouseleave(function() {
    $(this).find('.hover-box').hide();
  });

  $(window).scroll(function(){
    if($(document).scrollTop() > 160){
      $('.nav-bar').addClass('change');
    }
    else{
    $('.nav-bar').removeClass('change');
    }
  });
 });
