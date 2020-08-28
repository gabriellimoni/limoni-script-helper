module.exports = function (print_console, ...message) {
    if (print_console) console.log(...message)

    const date_iso = new Date().toISOString()
    let logging_string = [date_iso, '-', ...message, '\n'].join(' ')
    const logging_file = global.env == 'test' ? 'log-dev.txt' : 'log.txt'

    if (message.length == 1 && message[0] == '\n') logging_string = '\n'

    require('fs').appendFileSync(logging_file, logging_string)
}