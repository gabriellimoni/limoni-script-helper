module.exports = function () {
    const current_date = new Date()
    const time = current_date.toLocaleTimeString().replace(':', '-').replace(':', '-')
    const date = current_date.toLocaleDateString()

    return `${date} ${time}`
}