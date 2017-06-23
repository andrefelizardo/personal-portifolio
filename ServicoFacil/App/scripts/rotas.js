angular.module('servicoFacil.rotas', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider) {
        $stateProvider

            .state('app.home', {
                url: '',
                templateUrl: 'home.html'
            })

            .state('app.cadastro-cliente', {
                url: '/cadastro-cliente',
                templateUrl: 'cliente/cadastro_clientes/cadastro_clientes.html'
            })

            .state('app', {
                url: '',
                views: {
                    'header': {
                        templateUrl: 'templates/header.html',
                        controller: 'headerCtrl'
                    },
                    'conteudo': {
                        template: '<ui-view/>'
                    }
                }

            })

        $urlRouterProvider.otherwise('home');
    });