import React from 'react'

/**
 * Print 1 line of terminal output
 * @param  {String}     content
 * @param  {String}     [tag='p']   HTML tag
 * @param  {String}     [link='']   [description]
 * @return {JSX}                    console output
 */
export default function (content, tag = 'p', link = false) {
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
}
