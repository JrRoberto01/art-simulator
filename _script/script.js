let refNumber = '123'

var lista_ent_classe = [
    "ABENC – Associação Brasileira de Engenheiros Civis",
    "AEVR – Associação de Engenheiros de Volta Redonda",
    "ASSEA – Associação de Engenheiros e Arquitetos de Três Rios e Região",
    "CLUBE – Clube de Engenharia",
    "SENGE–RJ – Sindicato dos Engenheiros do Estado do Rio de Janeiro",
    "SENGE–VR – Sindicato dos Engenheiros de Volta Redonda",
    "NENHUMA"];
var ramo = [
    "Engenharia Civil",
    "Engenharia Industrial Mod. Civil"];
var atividade = [
    "Análise",
    "Assessoria",
    "Assistência",
    "Avaliação",
    "Condução de Equipe de Instalação",
    "Condução de Equipe de Manutenção",
    "Condução de Equipe de Montagem",
    "Condução de Trabalho Técnico",
    "Coordenação Técnica",
    "Desempenho de Cargo Técnico",
    "Desempenho de Função Técnica",
    "Elaboração de Orçamento",
    "Especificação",
    "Estudo de Viabilidade Técnico-Econômica",
    "Execução de Desenho Técnico",
    "Execução de Instalação",
    "Execução de Montagem",
    "Execução de Obra",
    "Execução de Reparo",
    "Execução de Serviço Técnico",
    "Fiscalização de Obra",
    "Fiscalização de Serviço Técnico",
    "Laudo Técnico",
    "Manutenção de Equipamento",
    "Manutenção de Instalação",
    "Mensuração",
    "Orientação Técnica",
    "Perícia",
    "Pesquisa",
    "Planejamento",
    "Produção Técnica Especializada",
    "Projeto",
    "Responsável Técnico por Empresa",
    "Supervisão Técnica",
    "Vistoria"];
var especificacao_atividade= [
    "Aferição",
    "Aplicação",
    "Calçamento",
    "Cálculo",
    "Classificação",
    "Concretagem",
    "Conservação",
    "Construção",
    "Contenção",
    "Demolição",
    "Desmembramento",
    "Desmonte",
    "Detalhamento",
    "Dimensionamento",
    "Dragagem",
    "Drenagem",
    "Escoramento",
    "Estaqueamento",
    "Fundação",
    "Gerência",
    "Legalização",
    "Limpeza",
    "Loteamento",
    "Melhoramento",
    "Modificação",
    "Nivelamento",
    "Pavimentação",
    "Reforma",
    "Remembramento",
    "Restauração",
    "Saneamento",
    "Sondagem",
    "Terraplenagem",
    "Transformação"];
var complemento = [
    "Aeroporto",
    "Aerofotogrametria",
    "Alvenaria",
    "Andaime",
    "Aqueduto",
    "Arquitetura",
    "Barragem",
    "Canal",
    "Central de Gás",
    "Cimento",
    "Concreto",
    "Edificação Residencial",
    "Edificação Comercial",
    "Encosta",
    "Escola",
    "Estação de Tratamento",
    "Estrutura de Concreto Armado",
    "Estrada",
    "Estrutura",
    "Ferrovia",
    "Laje",
    "Lay-out",
    "Galeria",
    "Galpão",
    "Gleba",
    "Hidrossanitária",
    "Hospital",
    "Moradia Econômica",
    "Passarela",
    "Piscina",
    "Praça",
    "Rede Elétrica",
    "Rede de Esgoto",
    "Rede de Gás",
    "Rede Hidráulica",
    "Rodovia",
    "Sinalização",
    "Sistema de Abastecimento D'água",
    "Topografia",
    "Viabilidade",
    "Outros"];

function preencherDropdown(dropdown, lista) {
    var select = document.getElementById(dropdown);
    lista.forEach(function(item) {
        var option = document.createElement("option");
        option.text = item;
        select.add(option);
    });
}

preencherDropdown("entidade-classe", lista_ent_classe);
preencherDropdown("ramo", ramo);
preencherDropdown("atividade", atividade);
preencherDropdown("espec-atv", especificacao_atividade);
preencherDropdown("compl-atv", complemento);
function initialConfig(){
    document.getElementById('refNumber').innerText = (`Nº ${refNumber}`)
}

initialConfig();