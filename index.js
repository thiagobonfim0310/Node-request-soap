const soapRequest = require('easy-soap-request')
const fs = require('fs')

const url = 'https://servicos.spc.org.br/spc/remoting/ws/consulta/consultaWebService'
const sampleHeaders = {
    'Content-Type': 'text/xml;charset=UTF-8',
    'Authorization': 'Basic OTk5MDQ1MTI6UGJodWJAMjAyMw==',
    SOAPAction: 'http://webservice.consulta.spcjava.spcbrasil.org/consultaWebService/listarProdutosRequest'
}   
const xml = fs.readFileSync('schema.xml', { encoding: 'utf-8' })

async function requestSoap() {
    const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml, timeout: 1000 }); // Optional timeout parameter(milliseconds)
    const { headers, body, statusCode } = response;
    // console.log(headers);
    // console.log(body);
    // console.log(statusCode);
}

requestSoap()
