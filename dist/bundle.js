angular.module("app", ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
  $stateProvider

.state('home',{
  url:'/home',
  templateUrl:'pages/home/home.html',
  controller:'homeController',
})

.state('features',{
  url:'/features',
  templateUrl:'pages/features/features.html',
  controller:'featuresController',
})

.state('coverage',{
  url:'/coverage',
  templateUrl:'pages/coverage/coverage.html',
  controller:'coverageController',
})

$urlRouterProvider.otherwise('/home');
}]);

angular.module('app').controller('mainController', ["$scope", function($scope) {}]);
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

angular.module('app').controller('featuresController', ["$scope", function($scope){

}])

angular.module('app').controller('coverageController', ["$scope", function($scope){

}])

angular.module('app').controller('homeController', ["$scope", function($scope){

}])
