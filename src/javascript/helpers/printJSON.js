export default function (json) {
    const output = ['{']
    const keyLength = Object.keys(json).length

    Object.keys(json).map((key, index) => {
        const comma = index !== keyLength - 1 ? ',' : ''

        output.push(`    "${key}": "${json[key]}"${comma}`)

    })

    output.push('}')

    return output
}
