angular
    .module('servicoFacil')
    .controller('cadastro_clientesCtrl',
    function ($scope, $rootScope) {

        $scope.$watch('cliente.tipo_cliente', function (novo, antigo) {
            if (novo !== antigo) {
                $scope.inicializarDatePicker();
                $('select').material_select();
                $scope.inicializarAutocomplete();
            }
        });

        $scope.setarMascaras = function () {
            $('#cpf').mask('000.000.000-00', { reverse: true });
            $('#cnpj').mask('00.000.000/0000-00', { reverse: true });
            var MascaraTelefone = function (val) {
                return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
            },
                telefoneOpcoes = {
                    onKeyPress: function (val, e, field, options) {
                        field.mask(MascaraTelefone.apply({}, arguments), options);
                    }
                };

            $('#telefone_principal, #telefone_adicional1, #telefone_adicional2').mask(MascaraTelefone, telefoneOpcoes);
        }

        $scope.inicializarDatePicker = function () {
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
        }

        $scope.inicializarAutocomplete = function () {
            $('input.autocomplete').autocomplete({
                data: {
                    'Analista de Requisitos': null,
                    'Analista e Desenvolvedor de Software': null,
                    'Designer': null,
                    'Gerente de Projeto': null
                },
                limite: 5,
                ouAutocomplete: function (val) {

                },
                minLength: 1,
            });
        }

        $scope.validarFormulario = function() {
            console.log('validando');
            if($scope.cadastro_cliente.$valid) {
                console.log('válido');
            } else {
                console.log('inválido');
            }
        }

        $scope.$on('$viewContentLoaded', function () {
            $scope.inicializarDatePicker();
            $('select').material_select();
            $scope.inicializarAutocomplete();
            $scope.setarMascaras();
            $('form').removeClass('hide');
            $('.preloader-wrapper').addClass('hide');
        });
    });
