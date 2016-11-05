import React, { Component, PropTypes } from 'react'
import formatTime from '../helpers/formatTime'

export default class Time extends Component {
    constructor (props) {
        super(props)
        this.state = { elapsed: 0 }
    }

    componentWillMount () {
        const { interval } = this.props

        this.timer = setInterval(() => {
            this.setState(state => {
                state.elapsed = state.elapsed + interval
            })
        }, interval)
    }

    componentWillUnmount () {
        clearInterval(this.timer)
    }

    render () {
        const theTime = this.props.time + this.state.elapsed

        return (
            <div className="time">
                <time>{ formatTime(theTime) }</time>
            </div>
        )
    }
}

Time.propTypes = {
    time: PropTypes.number,
    interval: PropTypes.number
}
