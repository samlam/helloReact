import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {currentEvent: '---'}
    this.update = this.update.bind(this)
  }

  update(e){
    this.setState({currentEvent: e.type})
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <Button>This is a button <Heart symbol="&hearts; &hearts; &hearts;"/> </Button>
        </p>
        <p>
          <textarea 
            onKeyPress={this.update}
            onFocus={this.update}
            onCopy={this.update}
            onCut={this.update}
            onPaste={this.update}
            onBlur={this.update}
            onDoubleClick={this.update}
            onTouchStart={this.update}
            onTouchMove={this.update}
            onTouchEnd={this.update}
            cols="40" 
            rows="5"/>
        </p>
        <h4>{this.state.currentEvent}</h4>
      </div>
    );
  }
}

const Button = (props) =>
  <button>{props.children}</button>
  
const Heart = (props) =>
  <span>{props.symbol} </span>

// Heart.propTypes = {
//   symbol : React.PropTypes.string.isRequired
// }

/*
 * validation example
 */
Heart.propTypes = {
  symbol(props, propName, component){
    if (!(propName in props)){
      return new Error(`missing ${propName}`);
    }
    if (props[propName].length < 3){
      return new Error(`${propName} is less than three characters`)
    }
  }
}


export default App;
