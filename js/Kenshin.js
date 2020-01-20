 jQuery(document).ready(function($) {

            $('#pickerEmissao').datetimepicker({
                format: 'L',
                locale: 'pt-br'
            });

            $('#pickerExclusao').datetimepicker({
                format: 'L',
                locale: 'pt-br'
            });

            $('#pickerPara').datetimepicker({
                format: 'L',
                locale: 'pt-br'
            });

            $('#pickerDE').datetimepicker({
                format: 'L',
                locale: 'pt-br'
            });

        });

        function mascaraData(campo, e) {
            var kC = (document.all) ? event.keyCode : e.keyCode;
            var data = campo.value;

            if (kC != 8 && kC != 46) {
                if (data.length == 2) {
                    campo.value = data += '/';
                } else if (data.length == 5) {
                    campo.value = data += '/';
                } else
                    campo.value = data;
            }
        }

        $(document).ready(function() {
            var $campo = $("#cep");
            $campo.mask('00000-000', {
                reverse: true
            });
        });

        $(document).ready(function() {
            var $cel = $("#cel");
            $cel.mask('00-00000-0000', {
                reverse: true
            });
        });

        $(document).ready(function() {
            var $fixo = $("#fixo");
            $fixo.mask('00-0000-0000', {
                reverse: true
            });
        });

        function LimparDados() {

            $("#aluno").val("");
            $("#natural").val("");
            $("#DataAdm").val("");
            $("#DataAlta").val("");
            $("#DataExc").val("");
            $("#zempo").val("");
            $("#fpj").val("");
            $("#cpf").val("");
            $("#rg").val("");
            $("#orgemiss").val("");
            $("#DataEmis").val("");
            $("#cep").val("");
            $("#logradouro").val("");
            $("#bairro").val("");
            $("#cidade").val("");
            $("#uf").val("");
            $("#email").val("");
            $("#cel").val("");
            $("#fixo").val("");
            $("#respmenor").val("");
            $("#rgres").val("");
            $("#cpfres").val("");
            $("#profres").val("");
            $("#mae").val("");
            $("#pai").val("");
            $("#numero").val("");

        }

        function limpaEndereco() {

            $("#cep").val("");
            $("#logradouro").val("");
            $("#bairro").val("");
            $("#cidade").val("");
            $("#uf").val("");
            $("#numero").val("");

        }

        function enviarValor() {

            var valorAluno = document.getElementById("aluno").value;
            var valorNatural = document.getElementById("natural").value;
            var valorDataAdm = document.getElementById("DataAdm").value;
            var valorDataAlta = document.getElementById("DataAlta").value;
            var valorDataExc = document.getElementById("DataExc").value;
            var valorZempo = document.getElementById("zempo").value;
            var valorFpj = document.getElementById("fpj").value;
            var valorCpf = document.getElementById("cpf").value;
            var valorRg = document.getElementById("rg").value;
            var valorOrgemiss = document.getElementById("orgemiss").value;
            var valorDataEmis = document.getElementById("DataEmis").value;
            var valorCep = document.getElementById("cep").value;
            var valorlogradouro = document.getElementById("logradouro").value;
            var valorNumero = document.getElementById("numero").value;
            var valorBairro = document.getElementById("bairro").value;
            var valorCidade = document.getElementById("cidade").value;
            var valorEstado = document.getElementById("uf").value;
            var valorEmail = document.getElementById("email").value;
            var valorCel = document.getElementById("cel").value;
            var valorFixo = document.getElementById("fixo").value;
            var valorRespmenor = document.getElementById("respmenor").value;
            var valorRgres = document.getElementById("rgres").value;
            var valorCpfres = document.getElementById("cpfres").value;
            var valorProfr = document.getElementById("profres").value;
            var valorMae = document.getElementById("mae").value;
            var valorPai = document.getElementById("pai").value;

            ajaxLogin = $.ajax({

                type: "post",
                dataType: "JSON",
                url: "https://jsonplaceholder.typicode.com/posts",
                data:

                {

                    valorAluno: valorAluno,
                    valorNatural: valorNatural,
                    valorDataAdm: valorDataAdm,
                    valorDataAlta: valorDataAlta,
                    valorDataExc: valorDataExc,
                    valorZempo: valorZempo,
                    valorFpj: valorFpj,
                    valorCpf: valorCpf,
                    valorRg: valorRg,
                    valorOrgemiss: valorOrgemiss,
                    valorDataEmis: valorDataEmis,
                    valorCep: valorCep,
                    valorlogradouro: valorlogradouro,
                    valorNumero: valorNumero,
                    valorBairro: valorBairro,
                    valorCidade: valorCidade,
                    valorEstado: valorEstado,
                    valorEmail: valorEmail,
                    valorCel: valorCel,
                    valorFixo: valorFixo,
                    valorRespmenor: valorRespmenor,
                    valorRgres: valorRgres,
                    valorCpfres: valorCpfres,
                    valorProfr: valorProfr,
                    valorMae: valorProfr,
                    valorPai: valorProfr,
                    acao: "enviarValor"
                },
                success: function(Json) {
                    console.log(Json);
                },
                error: function(Json){
                    console.log(Json);
                }

            });

            LimparDados();

        }

        $("#cep").focusout(function() {
            //Início do Comando AJAX
            $.ajax({
                //O campo URL diz o caminho de onde virá os dados
                //É importante concatenar o valor digitado no CEP
                url: 'https://viacep.com.br/ws/' + $(this).val() + '/json/unicode/',
                //Aqui você deve preencher o tipo de dados que será lido,
                //no caso, estamos lendo JSON.
                dataType: 'json',
                //SUCESS é referente a função que será executada caso
                //ele consiga ler a fonte de dados com sucesso.
                //O parâmetro dentro da função se refere ao nome da variável
                //que você vai dar para ler esse objeto.

                success: function(resposta) {
                    //Agora basta definir os valores que você deseja preencher
                    //automaticamente nos campos acima.
                    $("#logradouro").val(resposta.logradouro);
                    $("#complemento").val(resposta.complemento);
                    $("#bairro").val(resposta.bairro);
                    $("#cidade").val(resposta.localidade);
                    $("#uf").val(resposta.uf);
                    //Vamos incluir para que o Número seja focado automaticamente
                    //melhorando a experiência do usuário
                    $("#numero").focus();
                }
            });
        });
