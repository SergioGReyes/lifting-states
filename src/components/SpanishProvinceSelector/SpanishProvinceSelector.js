import React, { Component } from 'react'

class SpanishProvinceSelector extends Component {
    //here we set a handler that will triggered everytime we change the value in the dropdown
    provinceChangeHandler = (e) => {
        //remember we are receiving the lifting state function via props from our parent (in this case, App)
        //this way we decouple this component from its parent
        this.props.provinceSelection(e.target.value)
    }

    render () {
        return (
            // here we set the handler that will be triggered everytime we choose a different value in the dropdown
            <select onChange={this.provinceChangeHandler}>
                <option value="alava">Álava{this.props.teststr}</option>
                <option value="albacete">Albacete{this.props.teststr}</option>
                <option value="murcia">Murcia{this.props.teststr}</option>
            </select>
        )
    }
}

export default SpanishProvinceSelector