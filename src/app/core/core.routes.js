(function () {
    'use strict';

    angular
        .module('ngaApp.core')
        .config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    function configure($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('main', {
                url: '/',
                template: '<nga-character-list></nga-character-list>'
            })
            .state('quiz', {
                url: '/quiz',
                template: '<nga-quiz></nga-quiz>'
            });

        $urlRouterProvider.otherwise('/');
    }
})();
