angular.module("app", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
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
});
