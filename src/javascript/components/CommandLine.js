import React, { Component, PropTypes } from 'react'

export default class CommandLine extends Component {
    render () {
        const { path } = this.props

        return (
            <div className="command-line">
                <p className="command-line__path">{ path }</p>
                { this.props.children }
            </div>
        )
    }
}

CommandLine.propTypes = {
    path: PropTypes.string,
    children: PropTypes.element
}