import React, { Component } from 'react'

import printJSON from '../helpers/printJSON'
import printText from '../helpers/printText'
import printEmptyLine from '../helpers/printEmptyLine'
import about from '../files/about.json'

export default class OpenFile extends Component {
    render () {
        const file = printJSON(about).map(line => printText(line))

        return (
          <div className="command__output command__output--open">
            { printEmptyLine() }

            { file }

            { printEmptyLine() }
          </div>
        )
    }
}
