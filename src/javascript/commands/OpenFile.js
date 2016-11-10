import React, { Component, PropTypes } from 'react'

import printJSON from '../helpers/printJSON'
import printText from '../helpers/printText'
import printEmptyLine from '../helpers/printEmptyLine'
import about from '../files/about.json'

export default class OpenFile extends Component {
    componentWillMount () {
        const { file } = this.props

        switch (file) {
        case 'about.json':
            this.file = about
            break
        }
    }

    render () {
        const { file } = this.props
        let output

        if (this.file) {
            output = (
                printJSON(this.file).map(line => printText(line))
            )
        }
        else {
            output = printText(`Could not find ${file}`)
        }

        return (
          <div className="command__output command__output--open">
              { printEmptyLine() }

              { this.file && printText(`File: ${file}`, { invert: true }) }

              { this.file && printEmptyLine() }

              { output }

              { printEmptyLine() }
          </div>
        )
    }
}

OpenFile.propTypes = {
    file: PropTypes.string
}
