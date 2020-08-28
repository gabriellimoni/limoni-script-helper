const XLSX = require('xlsx')

module.exports = function (path) {
    const workbook = XLSX.readFile(path)
    const sheet_name_list = workbook.SheetNames
    const xl_data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]], { raw: false })
    
    return xl_data
}
