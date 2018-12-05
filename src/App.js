import React, { Component } from 'react';
import './App.css';
import SpanishProvinceSelector from './components/SpanishProvinceSelector/SpanishProvinceSelector'
import Utils from './utils'

class App extends Component {
  constructor() {
    super()

    //here we defined the initial state, which will cater for province and celsius conversion
    this.state = {
      chosenProvince:  undefined,
      convertedCelsius: undefined
    }
  }

  //example of lifting state function ,which will receive a new province everytime we 
  //change the value in the province selector
  provinceSelection = (newProvince) => {
    //here, we clone the state and assign the new chosen province received in the argument
    this.setState({...this.state, chosenProvince: newProvince})
  }
  
  convertToCelsius = (e) => {
    //here, we clone the state and assign the converted celsius temperature
    //here we leverage the power of Utils import, which you will have to use in the future
    this.setState({...this.state, convertedCelsius: Utils.toCelsius(e.target.value)})
  }

  render() {
    return (
      <div className="App">
        <h1>The chosen province is {this.state.chosenProvince}</h1>
        {/* we set the value of celsius degrees which we want to convert */}
        <p>Conversión a celsius desde faren {this.state.convertedCelsius}</p>
        <input type="text" onChange={this.convertToCelsius} placeholder="200"></input>
        {/* here we pass the function which will lift the state into this parent container */}
        {/* here we pass an xx value to the child */}
        {/* therefore here we show parent->child and child->parent communication */}
        <SpanishProvinceSelector teststr="xx" provinceSelection={this.provinceSelection}></SpanishProvinceSelector>
      </div>
    );
  }
}

export default App;
