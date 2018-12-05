import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SpanishProvinceSelector from './components/SpanishProvinceSelector/SpanishProvinceSelector'
import Utils from './utils'


class App extends Component {
  constructor() {
    super()
    this.state = {
      chosenProvince:  undefined,
      convertedCelsius: undefined
    }
  }

  provinceSelection = (newProvince) => {
    this.setState({...this.state, chosenProvince: newProvince})
  }
  
  convertToCelsius = (e) => {
    this.setState({...this.state, convertedCelsius: Utils.toCelsius(e.target.value)})
  }

  render() {
    return (
      <div className="App">
        <h1>The chosen province is {this.state.chosenProvince}</h1>
        <p>Conversión a celsius desde faren {this.state.convertedCelsius}</p>
        <input type="text" onChange={this.convertToCelsius} placeholder="200"></input>
        <SpanishProvinceSelector teststr="xx" provinceSelection={this.provinceSelection}></SpanishProvinceSelector>
      </div>
    );
  }
}

export default App;
