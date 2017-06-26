(function () {

    var servicoFacil = angular.module('servicoFacil', ['oc.lazyLoad', 'servicoFacil.rotas']);

    servicoFacil.run(function ($rootScope) {
        $rootScope.$on('$stateChangeStart', function () {
            console.log('carregando');
        });

        $rootScope.$on('$stateChangeSucess', function () {
            console.log('terminou de carregar');
        });

        $rootScope.$on('$stateChangeError', function () {
            console.log('deu erro');
        });

        $rootScope.$on('$viewContentLoading', function (event, viewConfig) {
            if(viewConfig == 'conteudo' || viewConfig == '$default') {
                // $('.preloader-wrapper').addClass('active');
            }
        });
    });

})();