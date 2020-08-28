module.exports = function (time_ms) {
    return new Promise(resolve => {
        setTimeout(resolve, time_ms)
    })
}