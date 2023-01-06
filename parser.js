import jspnxml from 'jsontoxml';
const parserString = require('xml2js').parserString
const { promisify } = require('util')

const promisifiedParsesString = promisify(parserString)

module.exports = class Parser {
    static parseJSONBodyToXML(jsonArgument) {
        return this.parseJSONBodyToXML(jsonArgument, { html: true })
    }

    static async convertXMLToJSON(xmlMessage){
        const options = {trim: true, explicitArray:false, explicitRoot: false}
        return promisifiedParsesString(xmlMessage, options)
    }
}