import React, { Component, PropTypes } from 'react'
import { List } from 'immutable'

import help from '../commands/help'

export default class CommandDispatcher extends Component {
    constructor (props) {
        super(props)

        this.commandList = List.of(
            'help'
        )
        this.result = ''
        this.count = 0
        this.output = null
    }

    componentWillMount () {
        const { command, count } = this.props

        this.output = null

        if (count > this.count) {
            if (!this.commandList.find(val => val === command)) {
                this.result = `command not found: ${command}`
                this.count++
                this.props.updateHistory(this.result)
            }
            else {
                switch(command) {
                case 'help':
                    this.output = help
                    break
                }
            }
        }
    }

    componentDidMount () {
        if (this.output) this.props.updateHistory(this.output)
    }

    render () {
        return (
            <div className="dispatcher">
                { this.output && this.output }
            </div>
        )
    }
}

CommandDispatcher.propTypes = {
    command: PropTypes.string,
    count: PropTypes.number,
    updateHistory: PropTypes.func
}
