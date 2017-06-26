angular.module('servicoFacil.rotas', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider) {
        $stateProvider

            .state('app.home', {
                url: '/home',
                templateUrl: 'home.html',
                controller: 'homeCtrl',
                resolve: {
                    dps: function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ['scripts/controllers/homeCtrl.js', 'styles/home.css']
                            }
                        ]);
                    }
                }
            })

            .state('app.cadastro-cliente', {
                url: '/cadastro-cliente',
                templateUrl: 'cliente/cadastro_clientes/cadastro_clientes.html',
                controller: 'cadastro_clientesCtrl',
                resolve: {
                    dps: function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ['cliente/cadastro_clientes/cadastro_clientesCtrl.js', 'scripts/lib/jquery.mask.min.js']
                            }
                        ]);
                    }
                }
            })

            .state('app', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'templates/header.html',
                        controller: 'headerCtrl',
                    },
                    'conteudo': {
                        template: '<ui-view/>'
                    }
                },
                resolve: {
                    dps: function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ['scripts/controllers/headerCtrl.js']
                            }
                        ]);
                    }
                }

            })

        $urlRouterProvider.otherwise('//home');
    });