import React from 'react'

export default {
    /**
     * Print text line
     * @return  {JSX}
     */
    printText (content, tag = 'p', link = false) {
        const className = 'terminal__text'
        let output

        switch (tag) {
        case 'p':
            output = (
                <p className={className}>{ content }</p>
            )
            break
        case 'a':
            output =  (
                <p className={className}>
                    { content }
                    <a href={link} className={className + ' terminal__link'}>
                        { link }
                    </a>
                </p>
            )
            break
        }

        return output
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
