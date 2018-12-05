import React, { Component } from 'react'

class SpanishProvinceSelector extends Component {
    provinceChangeHandler = (e) => {
        this.props.provinceSelection(e.target.value)
    }

    render () {
        return (
            <select onChange={this.provinceChangeHandler}>
                <option value="alava">Álava{this.props.teststr}</option>
                <option value="albacete">Albacete{this.props.teststr}</option>
                <option value="murcia">Murcia{this.props.teststr}</option>
            </select>
        )
    }
}

export default SpanishProvinceSelector