var lista_ent_classe = [
    "ABENC – Associação Brasileira de Engenheiros Civis",
    "AEVR – Associação de Engenheiros de Volta Redonda",
    "ASSEA – Associação de Engenheiros e Arquitetos de Três Rios e Região",
    "CLUBE – Clube de Engenharia",
    "SENGE–RJ – Sindicato dos Engenheiros do Estado do Rio de Janeiro",
    "SENGE–VR – Sindicato dos Engenheiros de Volta Redonda",
    "NENHUMA"];

var ex2 = ["Opção A", "Opção B", "Opção C", "Opção D"];


function gerAutoComp() {
    gerAutoCompFF( 'pesq-entidade', lista_ent_classe);
    gerAutoCompFF( 'optEx2', ex2);
}

function gerAutoCompFF( datalistId, options) {
    var datalist = document.getElementById(datalistId);
    datalist.innerHTML = '';

    options.forEach(function(option) {
        var optionElement = document.createElement('option');
        optionElement.value = option;
        datalist.appendChild(optionElement);
    });
}

gerAutoComp();

