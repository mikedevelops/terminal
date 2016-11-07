import React, { Component, PropTypes } from 'react'
import { List } from 'immutable'

export default class CommandDispatcher extends Component {
    constructor (props) {
        super(props)

        this.commandList = List.of()
        this.result = ''
        this.count = 0
    }

    componentDidMount () {
        const { command, count } = this.props

        if (count > this.count && !this.commandList.find(val => val === command)) {
            this.result = `command not found: ${command}`
            this.count++
            this.props.updateHistory(this.result)
        }
    }

    render () {
        return <p>DISPATCHER!</p>
    }
}

CommandDispatcher.propTypes = {
    command: PropTypes.string,
    count: PropTypes.number,
    updateHistory: PropTypes.func
}
