const { getJsDateFromExcel } = require("excel-date-to-js")

module.exports = function _getDateFromBrDate (excel_date) {
    let year, month, day
  
    try {
      const date_string = getJsDateFromExcel(excel_date).toISOString()
  
      year = date_string.slice(0, 4)
      month = date_string.slice(5, 7)
      day = date_string.slice(8, 10)
    } catch (error) {
      throw new Error('Data não formatada no excel')
    }
  
    return new Date(year, month-1, day)
}