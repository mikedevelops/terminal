import React from 'react'
import terminal from '../helpers/terminal'

export default (
    <div className="command__output command__ouput--help">
        { terminal.printEmptyLine() }

        { terminal.printText('Usage: <command>') }

        { terminal.printEmptyLine() }

        { terminal.printText('+-------------------------------------------------+') }
        { terminal.printText('| Command | Usage          | Description          |') }
        { terminal.printText('+---------+----------------+----------------------+') }
        { terminal.printText('| ls      | ls             | list directory       |') }
        { terminal.printText('| home    | home           | go to home directory |') }
        { terminal.printText('| cd      | cd <directory> | change directory     |') }
        { terminal.printText('| open    | open <file>    | view file contents   |') }
        { terminal.printText('+---------+----------------+----------------------+') }

        { terminal.printEmptyLine() }
    </div>
)
