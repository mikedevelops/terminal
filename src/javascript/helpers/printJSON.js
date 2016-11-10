export default function (json) {
    const output = ['{']
    const keyLength = Object.keys(json).length

    Object.keys(json).map((key, index) => {
        const comma = index !== keyLength - 1 ? ',' : ''
        const valueLength = json[key].length
        let value = ''

        if (typeof json[key] === 'string') value = `"${json[key]}"`
        else if (valueLength) {
            value = '['
            json[key].map((item, index) => {
                const comma = index !== valueLength - 1 ? ', ' : ''

                value += `"${item}"${comma}`
            })
            value += ']'
        }

        output.push(`    "${key}": ${value}${comma}`)

    })

    output.push('}')

    return output
}
