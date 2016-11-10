import React, { Component } from 'react'

import printEmptyLine from '../helpers/printEmptyLine'
import printText from '../helpers/printText'

export default class Help extends Component {
    render () {
        return (
            <div className="command__output command__ouput--help">
                { printEmptyLine() }
                
                { printText('+-------------------------------------------------+') }
                { printText('| Command | Usage          | Description          |') }
                { printText('|-------------------------------------------------|') }
                { printText('| ls      | ls             | list directory       |') }
                { printText('| open    | open <file>    | view file contents   |') }
                { printText('| cd      | cd <directory> | change directory     |') }
                { printText('| home    | home           | go to home directory |') }
                { printText('| clear   | clear          | clear screen         |') }
                { printText('+-------------------------------------------------+') }

                { printEmptyLine() }
            </div>
        )
    }
}
