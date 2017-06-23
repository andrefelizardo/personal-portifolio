angular
    .module('servicoFacil')
    .controller('homeCtrl', ['$scope',
        function ($scope) {

            $scope.autoplayCarousel = function() {
                $('.carousel').carousel('next');
                setTimeout($scope.autoplayCarousel, 4500);
            }

            $scope.$on('$viewContentLoaded', function () {
                $('.carousel').carousel();
                $scope.autoplayCarousel();
            });
        }]);
