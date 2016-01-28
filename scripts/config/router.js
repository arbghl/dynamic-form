(function(){

  angular.module('dynamic.form.module')
    .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            views: {
              'view1': {
                templateUrl: 'templates/form.html',
                controller: 'dynamicFormController as vm',
              }
            }
        })

      });
})();
