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
                formatSubmit: 'mm/dd/yyyy',
                onClose: function () {
                    if ($('input[name=rg_data_expedicao_submit]').val() !== '') {
                        $('#rg_data_expedicao').removeClass('invalid');
                        $('#rg_data_expedicao').addClass('valid');
                        $scope.cliente.rg_data_expedicao = new Date($('input[name=rg_data_expedicao_submit]').val());
                        $scope.$apply();
                    }
                }
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

        $scope.validarFormulario = function () {
            if ($scope.cadastro_cliente.$valid) {
                $('.modal .modal-content h4').text('Salvando');
                $('.modal .modal-content p').text('Salvando dados');
                $('.modal .modal-close').hide();
                // $('.modal').modal('open');
            } else {
                $('.modal .modal-content h4').text('Erro');
                $('.modal .modal-content p').text('Verifique se todos os campos obrigatórios foram preenchidos corretamente.');
                $('.modal').modal('open');
                $('.ng-invalid-required').addClass('invalid');
                $scope.scrollToFirstInputWithError();
            }
        }

        $scope.scrollToFirstInputWithError = function () {
            // não consegui traduzir essa, ficou melhor em inglês
            var firstElement = $('input.invalid:first').offset().top;
            $('body').animate({
                scrollTop: firstElement
            }, 500, 'easeOutElastic');

        }

        $scope.$on('$viewContentLoaded', function () {
            $scope.inicializarDatePicker();
            $('select').material_select();
            $scope.inicializarAutocomplete();
            $scope.setarMascaras();
            $('#nome_social, #nome_completo').characterCounter();
            $('form').removeClass('hide');
            $('.preloader-wrapper').addClass('hide');
        });
    });
