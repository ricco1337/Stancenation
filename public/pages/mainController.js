angular.module('app').controller('mainController', function($scope) {});
$(document).ready(function() {

  $('.nav-link').mouseenter(function() {
    $(this).find('.hover-box').show();
  });
  $('.nav-link').mouseleave(function() {
    $(this).find('.hover-box').hide();
  });

  $(window).scroll(function(){
    if($(window).scrollTop() > 160){
      $('.nav-bar').addClass('change');
      $('.hover-box').addClass('change');
    }
    else{
    $('.nav-bar').removeClass('change');
    $('.hover-box').removeClass('change');
    }
  });
 });
