import React, { Component, PropTypes } from 'react'
import { List } from 'immutable'

import terminal from '../helpers/terminal'

export default class CommandDispatcher extends Component {
    constructor (props) {
        super(props)

        this.commandList = List.of('foo')
        this.result = ''
        this.count = 0
    }

    componentWillReceiveProps () {
        const { command, count } = this.props

        console.log(command, count)

        if (count > this.count && !this.commandList.find(val => val === command)) {
            this.result = `command not found: ${command}`
            this.count++
        }
    }

    render () {
        return terminal.printText(this.result)
    }
}
