<?php

require __DIR__ . "/vendor/autoload.php";
use Dompdf\Dompdf;
use Dompdf\options;

//Variaveis
date_default_timezone_set('America/Sao_Paulo');
$data = date('m/d/Y', time());
$numero_art = random_int(100000000, 999999999);
$nome_profissional = $_POST["nome-profissional"];
$reg_profissional = $_POST["reg-profissional"];
$nome_empresa = $_POST["nome-empresa"];
$num_reg_emp = $_POST["num-reg-emp"];
$nome_contratante = $_POST["nome-contratante"];
$id_contratante = $_POST["id-contratante"];
$compl_contratante = $_POST["compl-contratante"];
$bairro_contratante = $_POST["bairro-contratante"];
$num_contratante = $_POST["num-contratante"];
$cidade_contratante = $_POST["cidade-contratante"];
$uf_contratante = $_POST["uf-contratante"];
$cep_contratante = $_POST["cep-contratante"];
$num_contrato = $_POST["num-contrato"];
$valor_contrato = $_POST["valor-contrato"];
$end_contrato = $_POST["end-contrato"];
$compl_contrato = $_POST["compl-contrato"];
$bairro_contrato = $_POST["bairro-contrato"];
$end_num_contrato = $_POST["end-num-contrato"];
$cidade_contrato = $_POST["cidade-contrato"];
$uf_contrato = $_POST["uf-contrato"];
$cep_contrato = $_POST["cep-contrato"];
$data_inicio = $_POST["data-inicio"];
$prazo_contrato = $_POST["prazo-contrato"];
$nome_contratante = $_POST["nome-contratante"];
$descricao = $_POST["descricao"];
$input_atv1 = $_POST["atividade1"];
$input_atv2 = $_POST["atividade2"];
$input_atv3 = $_POST["atividade3"];
$input_espec1 = $_POST["espec-atv1"];
$input_espec2 = $_POST["espec-atv2"];
$input_espec3 = $_POST["espec-atv3"];
$input_compl1 = $_POST["compl-atv1"];
$input_compl2 = $_POST["compl-atv2"];
$input_compl3 = $_POST["compl-atv3"];

$options = new Options;
$options-> setChroot(__DIR__);
$options-> setIsRemoteEnabled(true);
$dompdf = new Dompdf($options);

$dompdf-> setPaper("A4");
$dompdf-> addInfo("Title", "PDF ART Simulado");
$dompdf-> addInfo("Author", "Simulador ART UNIVASSOURAS");
$html = file_get_contents("art-template.html");

//Replaces
$html = str_replace([
    "{{ numero-art }}",
    "{{ nome-profissional }}", 
    "{{ reg-profissional }}",
    "{{ nome-empresa }}",
    "{{ num-reg-emp }}",
    "{{ nome-contratante }}",
    "{{ id-contratante }}",
    "{{ compl-contratante }}",
    "{{ bairro-contratante }}",
    "{{ num-contratante }}",
    "{{ cidade-contratante }}",
    "{{ uf-contratante }}",
    "{{ cep-contratante }}",
    "{{ num-contrato }}",
    "{{ valor-contrato }}",
    "{{ end-contrato }}",
    "{{ compl-contrato }}",
    "{{ bairro-contrato }}",
    "{{ end-num-contrato }}",
    "{{ cidade-contrato }}",
    "{{ uf-contrato }}",
    "{{ cep-contrato }}",
    "{{ data-inicio }}",
    "{{ prazo-contrato }}",
    "{{ descricao }}",
    "{{ data-celebrado }}",
    "{{ input-atv1 }}",
    "{{ input-atv2 }}",
    "{{ input-atv3 }}",
    "{{ input-espec1 }}",
    "{{ input-espec2 }}",
    "{{ input-espec3 }}",
    "{{ input-compl1 }}",
    "{{ input-compl2 }}",
    "{{ input-compl3 }}"], 
    [
    $numero_art,
    $nome_profissional,
    $reg_profissional,
    $nome_empresa,
    $num_reg_emp,
    $nome_contratante,
    $id_contratante,
    $compl_contratante,
    $bairro_contratante,
    $num_contratante,
    $cidade_contratante,
    $uf_contratante,
    $cep_contratante,
    $num_contrato,
    $valor_contrato,
    $end_contrato,
    $compl_contrato,
    $bairro_contrato,
    $end_num_contrato,
    $cidade_contrato,
    $uf_contrato,
    $cep_contrato,
    $data_inicio,
    $prazo_contrato,
    $descricao,
    $data,
    $input_atv1,
    $input_atv2,
    $input_atv3,
    $input_espec1,
    $input_espec2,
    $input_espec3,
    $input_compl1,
    $input_compl2,
    $input_compl3],
    $html);
$dompdf-> loadHtml($html);
//$dompdf-> loadHtmlFile("art-template.html");
$dompdf -> render();
$dompdf -> stream("art-document.pdf", ["Attachment" => 0]);