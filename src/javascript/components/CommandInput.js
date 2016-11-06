import React, { Component, PropTypes } from 'react'

export default class CommandInput extends Component {
    constructor (props) {
        super(props)

        const { count, commandCacheCount } = this.props

        this.count = count
        this.commandCacheCount = commandCacheCount
    }

    focusInput () {
        this.refs.input.focus()
    }

    componentWillReceiveProps (props) {
        const { count, focus, commandCacheCount, input } = props


        if (focus) this.focusInput()
        // clear input on 'enter'
        if (count > this.count) {
            this.refs.input.value = ''
            this.count = count
        }
        // replace value with cached command on 'up arrow'
        else if (commandCacheCount !== this.commandCacheCount) {
            this.refs.input.value = input
            this.commandCacheCount = commandCacheCount
        }
    }

    componentDidMount () {
        if (this.props.focus) this.focusInput()
    }

    render () {
        const { input } = this.props

        return (
            <div className="command__input">
                <input
                    type="text"
                    className="command__hidden"
                    ref="input"
                 />
                <p className="command__text">{ input }</p>
            </div>
        )
    }
}

CommandInput.propTypes = {
    updateInput: PropTypes.func,
    input: PropTypes.string,
    focus: PropTypes.bool,
    count: PropTypes.number,
    commandCacheCount: PropTypes.number
}
