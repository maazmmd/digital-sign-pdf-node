# Convert HTML to PDF and digital sign pdf using NodeJS

Usage
 - read html file and convert to pdf
 - digital sign pdf using digital signature X509 Certificate issued by Cert Authorities

## Requirements

- [Node and npm](http://nodejs.org)
- Java 8 
- wkhtmltopdf

## Installation

1. Clone the repository: `git clone https://github.com/maazmmd/`
2. Install packages : `npm install`
3. Run the file : `node html2pdf.js`
	- Path to HTML file to be convert to PDF: assets/template/sample.html
	- Path to Digital Certificate: assets/cert.pfx
	- PDF file to be ditially signed: assets/template/example.pdf (This can also be pdf generated from previous step 1)


