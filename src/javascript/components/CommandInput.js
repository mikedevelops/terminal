import React, { Component, PropTypes } from 'react'

export default class CommandInput extends Component {
    constructor (props) {
        super(props)

        this.count = this.props.count
    }

    handleInput (event) {
        this.props.updateInput(event.target.value)
    }

    focusInput () {
        this.refs.input.focus()
    }

    componentWillReceiveProps (props) {
        const { count, focus } = props

        if (focus) this.focusInput()
        if (count > this.count) {
            this.refs.input.value = ''
            this.count = count
        }
    }

    componentDidMount () {
        if (this.props.focus) this.focusInput()
    }

    render () {
        const { input } = this.props

        return (
            <div className="command-line__input">
                <input
                    type="text"
                    onChange={this.handleInput.bind(this)}
                    className="command-line__hidden"
                    ref="input"
                 />
                <p className="command-line__text">{ input }</p>
            </div>
        )
    }
}

CommandInput.propTypes = {
    updateInput: PropTypes.func,
    input: PropTypes.string,
    focus: PropTypes.bool,
    count: PropTypes.number
}
