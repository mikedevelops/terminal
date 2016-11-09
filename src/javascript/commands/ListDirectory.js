import React, { Component, PropTypes } from 'react'

import printEmptyLine from '../helpers/printEmptyLine'
import printText from '../helpers/printText'

export default class ListDirectory extends Component {
    render () {
        const { currentDirectory } = this.props
        const items = currentDirectory.map(item => item.name)

        return (
            <div className="command__output command__output--list">
                { printEmptyLine() }

                { printText(items.join('   ')) }

                { printEmptyLine() }
            </div>
        )
    }
}

ListDirectory.propTypes = {
    currentDirectory: PropTypes.array
}
