const { Console } = require('console');
var fs = require('fs');
const path = require('path');
var wkhtmltopdf = require('wkhtmltopdf');
const Signer = require('./utils/Signer');

var html = fs.readFileSync('./assets/template/sample.html', 'utf8');

function processPDF(htmlStr) {
    wkhtmltopdf(htmlStr, {
        output: 'generatedPDF.pdf',
        pageSize: 'letter'
    });
    signPDF();
}
function signPDF() {
    const cPassword = "joserogelio";
    let pfx = path.join(__dirname, "./assets/cert.pfx");
    let pdfDoc = path.join(__dirname, "./assets/template/example.pdf");
    let signedPDF = path.join(__dirname, "digitalSigned.pdf");

    Signer(pfx, cPassword, pdfDoc, signedPDF)
        .then(res => console.log(res))
        .catch(err => console.log(err));
}
processPDF(html);
 