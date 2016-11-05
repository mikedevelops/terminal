import React, { Component } from 'react'
import Immutable from 'immutable'
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
        this.focusInput = this.focusInput.bind(this)
        this.execute = this.execute.bind(this)
        this.state = {
            path: ['Mike', 'Portfolio', 'www'],
            input: '',
            focus: true,
            command: '',
            count: 0,
            history: Immutable.List()
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

    execute (event) {
        if (event.key === 'Enter') {
            const { history, path } = this.state
            const newHistory = history.push({ path: path, command: this.state.input })

            this.setState({
                command: this.state.input,
                history: newHistory,
                input: '',
                count: this.state.count + 1
            })
        }
    }

    render () {
        const { path, input, focus, count } = this.state
        const CommandHistory = this.state.history.map((history, index) => {
            return (
                <CommandLine
                    key={`${history.command}_${index}`}
                    path={terminal.printPath(history.path)}
                    command={history.command} />
            )
        })

        return (
            <div onClick={this.focusInput} className="container">
                <div className="status-bar">
                    <LastLogin time={Date.now()} />
                    <Time time={Date.now()} interval={1000} />
                </div>

                <div onKeyPress={this.execute} className="terminal">
                    { terminal.printEmptyLine() }
                    { terminal.printText(`Name: ${config.name} ${config.version}`) }
                    { terminal.printText(`Location: ${config.location}`) }
                    { terminal.printText(`Job: ${config.job} @ ${config.employer}`) }
                    { terminal.printText(`GitHub: ${config.github}`) }
                    { terminal.printText(`Twitter: ${config.twitter}`) }
                    { terminal.printEmptyLine() }
                    { terminal.printText('Enter ‘help’ for command list')}
                    { terminal.printEmptyLine() }

                    <div className="command-line__history">
                        { CommandHistory }
                    </div>

                    <CommandLine path={terminal.printPath(path)} />
                    <CommandInput
                        updateInput={this.updateInput}
                        input={input}
                        focus={focus}
                        count={count}
                    /><Caret/>
                </div>
            </div>
        )
    }
}
