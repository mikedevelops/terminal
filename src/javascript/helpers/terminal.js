import React from 'react'

export default {
    /**
     * Print text line
     * @return  {JSX}
     */
    printText (content) {
        return <p className="terminal__text">{ content }</p>
    },

    /**
     * Print empty line
     * @return  {JSX}
     */
    printEmptyLine () {
        return <div className="terminal__empty-line"></div>
    },

    /**
     * Print terminal path
     * @param   {Array} paths
     * @return  {String} path
     */
    printPath (path) {
        return `~/${path.join('/')} $`
    }
}
