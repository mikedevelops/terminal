import React from 'react'

const defaults = {
    tag: 'p',
    href: false,
    key: false,
    invert: false
}

/**
 * Print 1 line of terminal output
 * @param  {String}     content
 * @param  {String}     [tag='p']   HTML tag
 * @param  {String}     [link='']   [description]
 * @return {JSX}                    console output
 */
export default function (content, options) {
    options = Object.assign({}, defaults, options)

    const { key, href, tag, invert} = options
    const className = `terminal__text${ invert ? ' terminal__text--invert' : '' }`
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
                <a href={href} className={className + ' terminal__link'}>
                    { href }
                </a>
            </p>
        )
        break
    }

    return output
}
