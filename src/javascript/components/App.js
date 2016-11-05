import React, { Component } from 'react'
import Time from './Time'
import LastLogin from './LastLogin'
import CommandLine from './CommandLine'
import Caret from './Caret'
import CommandInput from './CommandInput'

import config from '../config'
import terminal from '../helpers/terminal'

export default class App extends Component {
    constructor (props) {
        super (props)

        this.updateInput = this.updateInput.bind(this)
        this.state = {
            path: ['Mike', 'Portfolio', 'www'],
            input: '',
            focus: true
        }
    }

    updateInput (value) {
        this.setState({
            input: value
        })
    }

    focusInput () {
        this.setState({
            focus: true
        })
    }

    render () {
        const { path, input, focus } = this.state

        return (
            <div className="container">
                <div className="status-bar">
                    <LastLogin time={Date.now()} />
                    <Time time={Date.now()} interval={1000} />
                </div>

                <div className="terminal">
                    { terminal.printEmptyLine() }
                    { terminal.printText(`Name: ${config.name} ${config.version}`) }
                    { terminal.printText(`Location: ${config.location}`) }
                    { terminal.printText(`Job: ${config.job} @ ${config.employer}`) }
                    { terminal.printText(`GitHub: ${config.github}`) }
                    { terminal.printText(`Twitter: ${config.twitter}`) }
                    { terminal.printEmptyLine() }
                    { terminal.printText('Type ‘help’ for command list')}
                    { terminal.printEmptyLine() }

                    <CommandLine focusInput={this.focusInput.bind(this)} path={terminal.printPath(path)}>
                        <CommandInput
                            updateInput={this.updateInput}
                            input={input}
                            focus={focus}
                        /><Caret/>
                    </CommandLine>
                </div>
            </div>
        )
    }
}
