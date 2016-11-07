import React, { Component } from 'react'
import { List } from 'immutable'
import Time from './Time'
import LastLogin from './LastLogin'
import CommandLine from './CommandLine'
import Caret from './Caret'
import CommandInput from './CommandInput'
import CommandDispatcher from './CommandDispatcher'

import config from '../config'
import terminal from '../helpers/terminal'
import getMyVersion from '../helpers/getMyVersion'

const theDate = Date.now()

export default class App extends Component {
    constructor (props) {
        super (props)

        this.focusInput = this.focusInput.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.handleCaret = this.handleCaret.bind(this)
        this.state = {
            path: ['Mike', 'Portfolio', 'www'],
            input: '',
            focus: true,
            command: '',
            count: 0,
            history: List(),
            commandCache: List(),
            commandCacheCount: 0,
            position: 0
        }
    }

    focusInput () {
        this.setState({
            focus: true
        })
    }

    handleCaret (event) {
        const { history, path, count, position, commandCache, commandCacheCount, input } = this.state
        const { value } = event.target
        const { keyCode } = event
        const cleanInput = value.toLocaleLowerCase().trim()
        const valueLength = value.length

        let newHistory = history
        let newCount = count
        let newPosition = position
        let newInput = input
        let newCommandCache = commandCache
        let newCommandCacheCount = commandCacheCount

        switch (keyCode) {
        // Enter
        case 13:
            if (cleanInput === 'clear') {
                newHistory = history.clear()
            }
            else {
                newHistory = history.push({
                    path: path, command: value
                })
            }

            newCommandCache = newCommandCache.push(value)

            return this.setState({
                history: newHistory,
                count: newCount + 1,
                command: value,
                commandCache: newCommandCache,
                input: '',
                position: 0
            })
        // Left Arrow
        case 37:
            newPosition = newPosition === 0 ? 0 : newPosition - 1

            return this.setState({ position: newPosition })
        // Right Arrow
        case 39:
            newPosition = position === valueLength ? valueLength : position + 1
            return this.setState({ position: newPosition })
        // Up Arrow
        case 38:
            newInput = commandCache.last() || ''

            if (commandCache.size) {
                // move last command to the first position in cache
                newCommandCache = commandCache.unshift(commandCache.last()).pop()
            }

            return this.setState({
                input: newInput,
                commandCache: newCommandCache,
                commandCacheCount: newCommandCacheCount + 1
            })
        }
    }

    handleInput (event) {
        const { position, input } = this.state
        const { value } = event.target

        let newPosition

        if (value.length < input.length) newPosition = position === 0 ? position : position - 1
        else newPosition = position + 1

        this.setState({ input: value, position: newPosition })
    }

    render () {
        const { path, input, focus, count, commandCacheCount, position, command, history } = this.state
        const CommandCache = history.map((history, index) => {
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
                    <LastLogin time={theDate} />
                    <Time time={theDate} interval={1000} />
                </div>

                <div onChange={this.handleInput} onKeyDown={this.handleCaret} className="terminal">
                    { terminal.printEmptyLine() }

                    { terminal.printText(`Name: ${config.name} ${getMyVersion(theDate)}`) }
                    { terminal.printText(`Location: ${config.location}`) }
                    { terminal.printText(`Job: ${config.job} @ ${config.employer}`) }
                    { terminal.printText('GitHub: ', 'a', config.github) }
                    { terminal.printText('Twitter: ', 'a', config.twitter) }

                    { terminal.printEmptyLine() }

                    { terminal.printText('Type ‘help’ for command list')}

                    { terminal.printEmptyLine() }

                    <div className="command__history">
                        { CommandCache }
                    </div>

                    <CommandLine path={terminal.printPath(path)} />
                    <CommandInput
                        commandCacheCount={commandCacheCount}
                        input={input}
                        focus={focus}
                        count={count}
                    /><Caret position={position} input={input} />

                    // TODO: this needs to live above inital comand line
                    // should only render if count has updated

                    <CommandDispatcher
                        command={command}
                        count={count}
                        path={terminal.printPath(history)} />
                </div>
            </div>
        )
    }
}
