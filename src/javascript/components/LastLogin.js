import React, { Component, PropTypes } from 'react'
import formatTime from '../helpers/formatTime'

export default class LastLogin extends Component {
    componentWillMount () {
        const { time } = this.props
        const storageStamp = localStorage.getItem('lastLogin')

        if (storageStamp) this.stamp = parseInt(storageStamp)
        else this.stamp = time

        localStorage.setItem('lastLogin', JSON.stringify(time))
    }

    render () {    
        return (
            <div className="last-login">
                <p className="last-login__text">
                    Last Login: { formatTime(this.stamp, { verbose: true }) }
                </p>
            </div>
        )
    }
}

LastLogin.propTypes = {
    time: PropTypes.number
}
