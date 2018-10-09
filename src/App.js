import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <h2>{display}</h2>
    );
  }
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  handleChange(event) {
    this.setState({text: event.target.value})
  }

  render() {
    return (
      <div className="PizzaTranslator">
        <TextInput
              label="Username:"
              placeholder="For example, @bookercodes"
              value={this.state.text}
              onChange={this.handleChange.bind(this)}
        />
        <span><p>{this.state.text.split(' ').map((word) => word && '🍕').join(' ')}</p></span>
        <span><p>{this.state.text}</p></span>
        <Button color="blue" onClick={() => console.log('Clicked!')}>
          Press me!
        </Button>
      </div>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <div className="Greeting">
        <h1>Hello {this.props.name}!</h1>
        {/* <Blink text='I love to blink'/> */}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Greeting name='Rexxar' />
          <Greeting name='Jaina' />
          <Greeting name='Valeera' />
          <PizzaTranslator/>
        </header>
      </div>
    );
  }
}

// export default App;
