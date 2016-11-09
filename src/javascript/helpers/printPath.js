/**
 * Returns formatted path
 * @param  {Array}  path
 * @return {String}
 */
export default function (path) {
    return `~/${path.join('/')} $`
}
