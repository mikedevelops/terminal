import React from 'react'

/**
 * Print 1 line of terminal output
 * @param  {String}     content
 * @param  {String}     [tag='p']   HTML tag
 * @param  {String}     [link='']   [description]
 * @return {JSX}                    console output
 */
export default function (content, tag = 'p', link = false, key = false) {
    const className = 'terminal__text'
    let output

    switch (tag) {
    case 'p':
        output = (
            <p key={key || content.replace(' ', '')} className={className}>{ content }</p>
        )
        break
    case 'a':
        output =  (
            <p key={key || content.replace(' ', '')} className={className}>
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
