angular
    .module('servicoFacil')
    .controller('headerCtrl', ['$scope',
        function ($scope) {

            $scope.$on('$viewContentLoaded', function () {
                $('.button-collapse').sideNav({
                    closeOnClick: true
                });
            });
        }]);
