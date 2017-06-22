angular.module('app.rotas', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'index.html'
            })

            $urlRouterProvider.othereise('index');
    });