import React, { Component } from 'react'
import { List } from 'immutable'
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
            history: List(),
            commandCache: List(),
            commandCacheCount: 0
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
        const { input, count, commandCache, history, path, commandCacheCount } = this.state

        const cleanInput = input.toLocaleLowerCase().trim()
        let newCommandCache = commandCache.push(input)
        let newInput = ''
        let newHistory

        switch (event.keyCode) {
        // Enter
        case 13:
            if (cleanInput === 'clear') {
                newHistory = history.clear()
            }
            else {
                newHistory = history.push({
                    path: path, command: cleanInput
                })
            }

            this.setState({
                command: input,
                commandCache: newCommandCache,
                history: newHistory,
                input: newInput,
                count: count + 1
            })
            break
        // Up Arrow
        case 38:
            newInput = commandCache.last() || ''

            if (commandCache.size) {
                // move last command to the first position in cache
                newCommandCache = commandCache.unshift(commandCache.last()).pop()
            }

            this.setState({
                input: newInput,
                commandCache: newCommandCache,
                commandCacheCount: commandCacheCount + 1
            })
        }

    }

    render () {
        const { path, input, focus, count, commandCacheCount } = this.state
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

                <div onKeyDown={this.execute} className="terminal">
                    { terminal.printEmptyLine() }

                    { terminal.printText(`Name: ${config.name} ${config.version}`) }
                    { terminal.printText(`Location: ${config.location}`) }
                    { terminal.printText(`Job: ${config.job} @ ${config.employer}`) }
                    { terminal.printText(`GitHub: `, 'a', config.github) }
                    { terminal.printText(`Twitter: `, 'a', config.twitter) }

                    { terminal.printEmptyLine() }

                    { terminal.printText('Type ‘help’ for command list')}

                    { terminal.printEmptyLine() }

                    <div className="command__history">
                        { CommandHistory }
                    </div>

                    <CommandLine path={terminal.printPath(path)} />
                    <CommandInput
                        updateInput={this.updateInput}
                        commandCacheCount={commandCacheCount}
                        input={input}
                        focus={focus}
                        count={count}
                    /><Caret/>
                </div>
            </div>
        )
    }
}
