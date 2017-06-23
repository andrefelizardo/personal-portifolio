angular
    .module('servicoFacil')
    .controller('headerCtrl', ['$scope',
        function ($scope) {

            $scope.pageLoad = function () {
                $('.button-collapse').sideNav();
            }
            $scope.pageLoad();
        }]);
