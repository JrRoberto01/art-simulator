<?php

require __DIR__ . "/vendor/autoload.php";
use Dompdf\Dompdf;
use Dompdf\options;

$name = $_POST["name"];

//$html = "<h1>$name</h1>";

$options = new Options;
$options-> setChroot(__DIR__);
$options-> setIsRemoteEnabled(true);
$dompdf = new Dompdf($options);

$dompdf-> setPaper("A4");
$dompdf-> addInfo("Title", "PDF ART Simulado");
$dompdf-> addInfo("Author", "Simulador ART UNIVASSOURAS");
$html = file_get_contents("art-template.html");
$dompdf-> loadHtml($html);
//$dompdf-> loadHtmlFile("art-template.html");
$dompdf -> render();
$dompdf -> stream("art-document.pdf", ["Attachment" => 0]);