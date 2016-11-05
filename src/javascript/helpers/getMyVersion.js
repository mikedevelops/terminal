/**
 * Get my version
 * @param  {Number} stamp
 * @return {String} v.years.months.0
 */
export default function (stamp) {
    const today = new Date(stamp)
    const bday = new Date('1988/10/03')
    const years = today.getFullYear() - bday.getFullYear()
    const months = today.getMonth() - bday.getMonth()

    return `v${years}.${months}.0`
}
