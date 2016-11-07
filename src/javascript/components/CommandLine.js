import React, { Component, PropTypes } from 'react'

export default class CommandLine extends Component {
    render () {
        const { path, command }= this.props
        let commandOutput

        if (typeof command === 'object') commandOutput = command
        else commandOutput = (
            <p className="command__path">{ path ? path + ' ' : ''  }{command}</p>
        )

        return (
            <div className="command">
                { commandOutput }
            </div>
        )
    }
}

CommandLine.propTypes = {
    path: PropTypes.string,
    command: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    children: PropTypes.array,
    focusInput: PropTypes.func
}
