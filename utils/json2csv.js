const { Parser } = require('json2csv')
const fs = require('fs')

module.exports = function (json_array, fields, output) {
    const opts = { fields, delimiter: ';' }
    
    try {
        const parser = new Parser(opts)
        const csv = parser.parse(json_array)
        
        fs.writeFileSync(output, csv)
    } catch (err) {
        console.error(err)
        return false
    }

}