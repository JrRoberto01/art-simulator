<?php

require __DIR__ . "/vendor/autoload.php";
use Dompdf\Dompdf;
use Dompdf\Options;

// Variáveis
//Resgate e Formatação da Data para "Celebrado"
date_default_timezone_set('America/Sao_Paulo');
$data = date('m/d/Y', time());

//Gerador de número aleatório para ART
$numero_art = random_int(100000000, 999999999);

// Campos
$campos = [
    "nome-profissional" => $_POST["nome-profissional"],
    "reg-profissional" => $_POST["reg-profissional"],
    "nome-empresa" => $_POST["nome-empresa"],
    "num-reg-emp" => $_POST["num-reg-emp"],
    "nome-contratante" => $_POST["nome-contratante"],
    "id-contratante" => $_POST["id-contratante"],
    "compl-contratante" => $_POST["compl-contratante"],
    "bairro-contratante" => $_POST["bairro-contratante"],
    "num-contratante" => $_POST["num-contratante"],
    "cidade-contratante" => $_POST["cidade-contratante"],
    "uf-contratante" => $_POST["uf-contratante"],
    "cep-contratante" => $_POST["cep-contratante"],
    "num-contrato" => $_POST["num-contrato"],
    "valor-contrato" => $_POST["valor-contrato"],
    "end-contrato" => $_POST["end-contrato"],
    "compl-contrato" => $_POST["compl-contrato"],
    "bairro-contrato" => $_POST["bairro-contrato"],
    "end-num-contrato" => $_POST["end-num-contrato"],
    "cidade-contrato" => $_POST["cidade-contrato"],
    "uf-contrato" => $_POST["uf-contrato"],
    "cep-contrato" => $_POST["cep-contrato"],
    "data-inicio" => formatDate($_POST["data-inicio"]),
    "prazo-contrato" => formatDate($_POST["prazo-contrato"]),
    "descricao" => $_POST["descricao"],
    "data-celebrado" => $data,
    "input-atv1" => $_POST["atividade1"],
    "input-atv2" => $_POST["atividade2"],
    "input-atv3" => $_POST["atividade3"],
    "input-espec1" => $_POST["espec-atv1"],
    "input-espec2" => $_POST["espec-atv2"],
    "input-espec3" => $_POST["espec-atv3"],
    "input-compl1" => $_POST["compl-atv1"],
    "input-compl2" => $_POST["compl-atv2"],
    "input-compl3" => $_POST["compl-atv3"],
    "quantidade" => $_POST["quantidade"],
    "num-pav" => $_POST["num-pav"],
    "unidade" => $_POST["unidade"]
];

// Adiciona o número ART ao array de campos
$campos["numero-art"] = $numero_art;

$options = new Options;
$options->setChroot(__DIR__);
$options->setIsRemoteEnabled(true);
$dompdf = new Dompdf($options);

$dompdf->setPaper("A4");
$dompdf->addInfo("Title", "PDF ART Simulado");
$dompdf->addInfo("Author", "Simulador ART UNIVASSOURAS");
$html = file_get_contents("art-template.html");

//Substituir HMTL dos campos
foreach ($campos as $key => $value) {
    $html = str_replace("{{ $key }}", $value, $html);
}

//Formatando data dos campos Date
function formatDate($date) {
    try {
        $dateTime = new DateTime($date);
        return $dateTime->format('d/m/Y');
    } catch (Exception $e) {
        return $date;
    }
}

$dompdf->loadHtml($html);
$dompdf->render();
$dompdf->stream("art-document.pdf", ["Attachment" => 0]);

?>