const { log } = require('../index')
const fs = require('fs')

describe ('Testing logging', function () {
    const LOG_STRING = 'LOG_STRINGGGG'
    
    afterEach (function () {
        if (fs.existsSync('log.txt')) fs.unlinkSync('log.txt')
        if (fs.existsSync('log-dev.txt')) fs.unlinkSync('log-dev.txt')
    })

    it ('Should write log into production file -> log.txt', function () {
        global.env = 'prod'
        log(false, LOG_STRING)

        const buffer = fs.readFileSync('log.txt')
        expect(buffer.includes(LOG_STRING)).toBeTruthy()
    })
    it ('Should write log into production file -> log-dev.txt', function () {
        global.env = 'test'
        log(false, LOG_STRING)

        const buffer = fs.readFileSync('log-dev.txt')
        expect(buffer.includes(LOG_STRING)).toBeTruthy()
    })
})