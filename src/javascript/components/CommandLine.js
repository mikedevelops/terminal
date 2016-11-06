import React, { Component, PropTypes } from 'react'

export default class CommandLine extends Component {
    render () {
        const { path, command }= this.props

        return (
            <div className="command">
                <p className="command__path">{ path } {command}</p>
            </div>
        )
    }
}

CommandLine.propTypes = {
    path: PropTypes.string,
    command: PropTypes.string,
    children: PropTypes.array,
    focusInput: PropTypes.func
}
