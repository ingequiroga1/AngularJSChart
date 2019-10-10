(function (){
  'use strict';

  angular 
      .module('AppPan',['ngRoute', 'ngCookies'])
      .config(config)
      .run(run);

  config.$inject=['$routeProvider','$locationProvider']; 
  function config($routeProvider, $locationProvider) {
      debugger;
        $routeProvider
          .when('/', {
            controller: 'HomeController',
            templateUrl: 'home/home.view.html',
            controllerAs: 'vm'
          })

          .when('/login', {
                controller: 'LoginController',
                templateUrl: 'Login/login.view.html',
                controllerAs: 'vm'
            })

          .otherwise({ redirectTo: '/login' });
      }

      run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
      function run($rootScope, $location, $cookies, $http){
          debugger;
        $rootScope.globals = $cookies.getObject('globals') || {};
        if($rootScope.globals.currentUser){
            $http.defaults.headers.common['Authorization'] = 'Basic '+ $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function(event, next, current) {

          debugger;
          var restrictedPage = $.inArray($location.path(), ['/login']) === -1;
          var loggedIn = $rootScope.globals.currentUser;
          if(restrictedPage && !loggedIn) {
            $location.path('/login');
          }
        });
      }


})();