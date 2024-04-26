let refNumber = '123'

function initialConfig(){
    document.getElementById('refNumber').innerText = (`Nº ${refNumber}`)
}

initialConfig();
//Gerador PDF
function downloadPDF() {
    const item = document.querySelector(".Content");
  
    var options = {
      margin: [10,10,10,10],
      filename: "art.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "letter", orientation: "portrait" },
    };
  
    html2pdf().set(options).from(item).save();
  }