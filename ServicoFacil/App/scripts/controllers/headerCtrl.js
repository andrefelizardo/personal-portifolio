angular
    .module('servicoFacil')
    .controller('headerCtrl',
    function ($scope, $state) {

        $scope.$state = $state;

        $scope.$on('$viewContentLoaded', function () {
            $('.button-collapse').sideNav({
                closeOnClick: true
            });
        });
    });
