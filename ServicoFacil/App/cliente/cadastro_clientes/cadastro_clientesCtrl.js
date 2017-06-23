angular
    .module('servicoFacil')
    .controller('cadastro_clientesCtrl',
    function ($scope) {

        $scope.$on('$viewContentLoaded', function () {
            $('.datepicker').pickadate({
                monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Out', 'Set', 'Nov', 'Dez'],
                weekdaysFull: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
                weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
                weekdaysLetter: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
                selectYears: 100,
                clear: 'Limpar',
                today: 'Hoje',
                close: 'OK',
                min: [1950, 1, 1],
                max: true,
                formatSubmit: 'dd/mm/yyyy'
            });

            $('select').material_select();
        });
    });
