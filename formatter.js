import Parser from './parser';

module.exports = class Formatter {
    static convertJsonToSoapRequest(jsonArgumets){
        let soapBody = Parser.parseJSONBodyToXML(jsonArgumets)

        return `<soap:Envelope xmlns:xsi="htttp://www.w3.org/20`
    }
}