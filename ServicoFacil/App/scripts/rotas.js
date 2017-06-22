angular.module('servicoFacil.rotas', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider) {
        $stateProvider

            .state('home', {
                url: '',
                views: {
                    'header': {
                        templateUrl: 'templates/header.html',
                        resolve: {
                            dps: function($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    {
                                        files: ['scripts/templates/header.js']
                                    }
                                ])
                            }
                        }
                    },
                    'conteudo': {
                        templateUrl: 'home.html'
                    }
                }
            })

            .state('cadastro-cliente', {
                url: '/cadastro-cliente',
                views: {
                    'header': {
                        templateUrl: 'templates/header.html'
                    },
                    'conteudo': {
                        templateUrl: 'cliente/cadastro_clientes/cadastro_clientes.html'
                    }
                }
            })

        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // });

        $urlRouterProvider.otherwise('home');
    });