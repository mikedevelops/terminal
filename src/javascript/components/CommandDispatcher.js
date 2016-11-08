import React, { Component, PropTypes } from 'react'
import { List } from 'immutable'

import Help from '../commands/Help'
import ListDirectory from '../commands/ListDirectory'

export default class CommandDispatcher extends Component {
    constructor (props) {
        super(props)

        this.commandList = List.of(
            'help',
            'ls'
        )
        this.result = ''
        this.count = 0
        this.output = null
    }

    componentWillMount () {
        const { command, count, currentDirectory } = this.props
        const cleanCommand = command.trim()

        this.output = null

        // return if command is empty
        if (!cleanCommand.length || command === 'clear') return
        // check for command in command list
        else if (count > this.count) {
            if (!this.commandList.find(val => val === cleanCommand)) {
                this.result = `command not found: ${command}`
                this.count++
                this.props.updateHistory(this.result)
            }
            else {
                switch(cleanCommand) {
                case 'help':
                    this.output = <Help />
                    break
                case 'ls':
                    this.output = <ListDirectory currentDirectory={currentDirectory} />
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
