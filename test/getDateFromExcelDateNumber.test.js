const { getDateFromExcelDateNumber } = require('../index')

describe ('Testing getting date from excel date number', function () {
    const EXCEL_DATE_NUMBER = '44070' // --> 27/08/2020

    it ('Should return the correct date', function () {
        const formattedDate = getDateFromExcelDateNumber(EXCEL_DATE_NUMBER)
        
        const year = formattedDate.getFullYear()
        const month = formattedDate.getMonth() + 1
        const day = formattedDate.getDate()

        expect(year).toBe(2020)
        expect(month).toBe(8)
        expect(day).toBe(27)
    })
})