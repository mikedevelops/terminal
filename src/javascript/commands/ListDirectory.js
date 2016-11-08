import React, { Component } from 'react'
import terminal from '../helpers/terminal'

export default class List extends Component {
    render () {
        const { currentDirectory } = this.props;
        const items = currentDirectory.map(item => item.name)

        return (
            <div className="command__output command__output--list">
                { terminal.printEmptyLine() }

                { terminal.printText(items.join('   ')) }

                { terminal.printEmptyLine() }
            </div>
        )
    }
}
