/**
 * Format time
 * @param  {Number} timestamp
 * @return {String} 00:00:00
 */
export default function (timestamp, options = { verbose: false}) {
    const local = 'en-us'
    const time = new Date(timestamp)
    const month = time.toLocaleString(local, { month: 'short' })
    const day = time.toLocaleString(local, { weekday: 'short' })
    const date = time.getDate()
    let hour = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()

    hour = (hour < 10 ? '0' : '') + hour
    min = (min < 10 ? '0' : '') + min
    sec = (sec < 10 ? '0' : '') + sec

    const digital = `${hour}:${min}:${sec}`

    if (!options.verbose) return digital
    else return `${day} ${month} ${date} ${digital}`
}
