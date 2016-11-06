import React, { Component, PropTypes } from 'react'

export default class Caret extends Component {
    getCaretPosition () {
        const { position, input } = this.props
        const { length } = input
        const diff = position - length
        let newPosition = 0

        if (length !== 0 && length !== position) newPosition = this.width * diff
        return `${newPosition}px`
    }

    componentDidMount () {
        this.width = this.refs.caret.getBoundingClientRect().width
    }

    render () {
        const style = { left: this.getCaretPosition() }
        return <div ref="caret" style={style} className="terminal__caret"></div>
    }
}

Caret.propTypes = {
    position: PropTypes.number,
    input: PropTypes.string
}
