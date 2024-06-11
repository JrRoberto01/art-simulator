const form = document.getElementById('form-art');
const radioButtons = document.querySelectorAll('input[name="forma-registro"]');
const radioButtonsSec = document.querySelectorAll('input[name="part-tecnica"]');
const artType = document.querySelectorAll('input[name="tipo-registro"]');
const radioButtonsThi = document.querySelectorAll('input[name="tipo-registro"]');
const artPrincipalInput = document.getElementById('art-principal');
const artPartTec = document.getElementById('art-part-tec');
const modalInfosAtv = document.getElementById('modal-infos');
const closeBtn = document.getElementById('close-btn');

const lista_ent_classe = [
    "ABENC – Associação Brasileira de Engenheiros Civis",
    "AEVR – Associação de Engenheiros de Volta Redonda",
    "ASSEA – Associação de Engenheiros e Arquitetos de Três Rios e Região",
    "CLUBE – Clube de Engenharia",
    "SENGE–RJ – Sindicato dos Engenheiros do Estado do Rio de Janeiro",
    "SENGE–VR – Sindicato dos Engenheiros de Volta Redonda",
    "NENHUMA"
];
const ramo = [
    "1101 - Engenharia Civil",
    "1109 - Engenharia Industrial Mod. Civil"
];      
const atividade = [
    { nome: "Análise", codigo: '1' },
    { nome: "Assessoria", codigo: '3' },
    { nome: "Assistência", codigo: '4' },
    { nome: "Avaliação", codigo: '5' },
    { nome: "Condução de Equipe de Instalação", codigo: '6' },
    { nome: "Condução de Equipe de Manutenção", codigo: '7' },
    { nome: "Condução de Equipe de Montagem", codigo: '8' },
    { nome: "Condução de Trabalho Técnico", codigo: '11' },
    { nome: "Coordenação Técnica", codigo: '14' },
    { nome: "Desempenho de Cargo Técnico", codigo: '15' },
    { nome: "Desempenho de Função Técnica", codigo: '16' },
    { nome: "Elaboração de Orçamento", codigo: '20' },
    { nome: "Especificação", codigo: '23' },
    { nome: "Estudo de Viabilidade Técnico-Econômica", codigo: '25' },
    { nome: "Execução de Desenho Técnico", codigo: '26' },
    { nome: "Execução de Instalação", codigo: '27' },
    { nome: "Execução de Montagem", codigo: '28' },
    { nome: "Execução de Obra", codigo: '29' },
    { nome: "Execução de Reparo", codigo: '30' },
    { nome: "Execução de Serviço Técnico", codigo: '31' },
    { nome: "Fiscalização de Obra", codigo: '34' },
    { nome: "Fiscalização de Serviço Técnico", codigo: '35' },
    { nome: "Laudo Técnico", codigo: '36' },
    { nome: "Manutenção de Equipamento", codigo: '37' },
    { nome: "Manutenção de Instalação", codigo: '38' },
    { nome: "Mensuração", codigo: '39' },
    { nome: "Orientação Técnica", codigo: '42' },
    { nome: "Perícia", codigo: '45' },
    { nome: "Pesquisa", codigo: '46' },
    { nome: "Planejamento", codigo: '47' },
    { nome: "Produção Técnica Especializada", codigo: '48' },
    { nome: "Projeto", codigo: '49' },
    { nome: "Responsável Técnico por Empresa", codigo: '68' },
    { nome: "Supervisão Técnica", codigo: '50' },
    { nome: "Vistoria", codigo: '51' }
];
const especificacao_atividade = [
    { nome: "Aferição", codigo: "01" },
    { nome: "Aplicação", codigo: "02" },
    { nome: "Calçamento", codigo: "06" },
    { nome: "Cálculo", codigo: "07" },
    { nome: "Classificação", codigo: "10" },
    { nome: "Concretagem", codigo: "11" },
    { nome: "Conservação", codigo: "12" },
    { nome: "Construção", codigo: "13" },
    { nome: "Contenção", codigo: "14" },
    { nome: "Demolição", codigo: "16" },
    { nome: "Desmembramento", codigo: "17" },
    { nome: "Desmonte", codigo: "18" },
    { nome: "Detalhamento", codigo: "19" },
    { nome: "Dimensionamento", codigo: "20" },
    { nome: "Dragagem", codigo: "21" },
    { nome: "Drenagem", codigo: "22" },
    { nome: "Escoramento", codigo: "23" },
    { nome: "Estaqueamento", codigo: "25" },
    { nome: "Fundação", codigo: "31" },
    { nome: "Gerência", codigo: "32" },
    { nome: "Legalização", codigo: "37" },
    { nome: "Limpeza", codigo: "38" },
    { nome: "Loteamento", codigo: "40" },
    { nome: "Melhoramento", codigo: "42" },
    { nome: "Modificação", codigo: "43" },
    { nome: "Nivelamento", codigo: "45" },
    { nome: "Pavimentação", codigo: "47" },
    { nome: "Reforma", codigo: "60" },
    { nome: "Remembramento", codigo: "61" },
    { nome: "Restauração", codigo: "62" },
    { nome: "Saneamento", codigo: "64" },
    { nome: "Sondagem", codigo: "65" },
    { nome: "Terraplenagem", codigo: "66" },
    { nome: "Transformação", codigo: "68" }
];
const complemento = [
  { nome: "Aeroporto", codigo: "03" },
  { nome: "Aerofotogrametria", codigo: "04" },
  { nome: "Alvenaria", codigo: "08" },
  { nome: "Andaime", codigo: "09" },
  { nome: "Aqueduto", codigo: "12" },
  { nome: "Arquitetura", codigo: "13" },
  { nome: "Barragem", codigo: "15" },
  { nome: "Canal", codigo: "24" },
  { nome: "Central de Gás", codigo: "28" },
  { nome: "Cimento", codigo: "31" },
  { nome: "Concreto", codigo: "34" },
  { nome: "Edificação Residencial", codigo: "40" },
  { nome: "Edificação Comercial", codigo: "41" },
  { nome: "Encosta", codigo: "47" },
  { nome: "Escola", codigo: "58" },
  { nome: "Estação de Tratamento", codigo: "61" },
  { nome: "Estrutura de Concreto Armado", codigo: "64" },
  { nome: "Estrada", codigo: "66" },
  { nome: "Estrutura", codigo: "67" },
  { nome: "Ferrovia", codigo: "71" },
  { nome: "Laje", codigo: "91" },
  { nome: "Lay-out", codigo: "92" },
  { nome: "Galeria", codigo: "75" },
  { nome: "Galpão", codigo: "76" },
  { nome: "Gleba", codigo: "81" },
  { nome: "Hidrossanitária", codigo: "83" },
  { nome: "Hospital", codigo: "84" },
  { nome: "Moradia Econômica", codigo: "100" },
  { nome: "Passarela", codigo: "108" },
  { nome: "Piscina", codigo: "110" },
  { nome: "Praça", codigo: "124" },
  { nome: "Rede Elétrica", codigo: "128" },
  { nome: "Rede de Esgoto", codigo: "129" },
  { nome: "Rede de Gás", codigo: "130" },
  { nome: "Rede Hidráulica", codigo: "131" },
  { nome: "Rodovia", codigo: "141" },
  { nome: "Sinalização", codigo: "143" },
  { nome: "Sistema de Abastecimento D'água", codigo: "144" },
  { nome: "Topografia", codigo: "166" },
  { nome: "Viabilidade", codigo: "173" },
  { nome: "Outros", codigo: "17" }
];

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
/*preencherDropdown("atividade", atividade);
preencherDropdown("espec-atv", especificacao_atividade);
preencherDropdown("compl-atv", complemento);*/

function initialConfig(){
    radioButtons.forEach(radioButton => {
        radioButton.addEventListener('change', () => {
          if (radioButton.value === 'Inicial') {
            artPrincipalInput.style.display = 'none';
          } else {
            artPrincipalInput.style.display = 'block';
          }
        });
      });
      radioButtonsSec.forEach(radioButtonsSec => {
        radioButtonsSec.addEventListener('change', () => {
          if (radioButtonsSec.value === 'Individual') {
            artPartTec.style.display = 'none';
          } else {
            artPartTec.style.display = 'block';
          }
        });
      });
      radioButtonsThi.forEach(radioButtonsThi => {
        radioButtonsThi.addEventListener('change', () => {
          switch (radioButtonsThi.value) {
            case 'Obra ou Serviço':
              document.getElementById('campo-valor-salario').style.display = 'none';
              document.getElementById('campo-valor-contrato').style.display = 'block';
              document.getElementById('campo-valor-salario').style.visibility = 'hidden';
              document.getElementById('campo-valor-contrato').style.visibility = 'visible';
              break;
            case 'Desempenho de Cargo ou função':
              document.getElementById('campo-valor-salario').style.display = 'block';
              document.getElementById('campo-valor-contrato').style.display = 'none';
              document.getElementById('campo-valor-salario').style.visibility = 'visible';
              document.getElementById('campo-valor-contrato').style.visibility = 'hidden';
              break;
            case 'Múltipla':
              document.getElementById('campo-valor-salario').style.display = 'none';
              document.getElementById('campo-valor-contrato').style.display = 'block';
              document.getElementById('campo-valor-salario').style.visibility = 'hidden';
              document.getElementById('campo-valor-contrato').style.visibility = 'visible';
            default:
              break;
          }
        });
      });
      //Definindo tipo de ART
      artType.forEach(artType => {
        artType.addEventListener('change', () => {
          if (artType.value === 'Obra ou Serviço') {
            console.log("obra ou serviço");
            form.action = "art-generator.php";
          } else {
            form.action = "art-generator-cargo-funcao.php";
            console.log("Cargo ou função");
          }
        });
      });

}
//Modal Listagem
function listagemAtividades(matriz){
  const ul = document.createElement('ul');

  matriz.forEach(item =>{
    const li = document.createElement('li');
      li.textContent = item.codigo + " - " + item.nome;
      ul.appendChild(li);
  });
  return ul;
}

closeBtn.addEventListener('click', () => {
  modalInfosAtv.style.visibility = 'hidden';
});

function abrirModalAtv(){
  if (modalInfosAtv.style.visibility === 'hidden') {
    modalInfosAtv.style.visibility = 'visible';
  }else{
    modalInfosAtv.style.visibility = 'hidden';
  }
}

const preencherLista = document.getElementById('modal-content');
preencherLista.appendChild(listagemAtividades(atividade));
initialConfig();