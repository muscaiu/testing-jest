import React, { Component } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import logo from './logo.svg';
import './App.css';
import Header from './Header'
import * as AppActions from './actions/app'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'state in App'
    }
  }

  handleToggleClick() {
    console.log('toggle clicked')
    this.props.toggleClick()
  }

  render() {
    console.log(this.props)

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <Header />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{this.state.name}</p>
        <button onClick={() => this.handleToggleClick()}>Toggle</button>
        <p>ssss{this.props.clicked}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    clicked: state.app.clicked
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)