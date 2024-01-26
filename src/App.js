import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      result: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleOperation = (operation) => {
    const { num1, num2 } = this.state;
    let result = 0;

    switch (operation) {
      case '+':
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        result = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        break;
    }

    this.setState({ result: result.toString() });
  };

  handlePower = () => {
    const { num1, num2 } = this.state;
    const result = Math.pow(parseFloat(num1), parseFloat(num2));
    this.setState({ result: result.toString() });
  };

  handleSquareRoot = () => {
    const { num1 } = this.state;
    const result = Math.sqrt(parseFloat(num1));
    this.setState({ result: result.toString() });
  };

  render() {
    const { num1, num2, result } = this.state;

    return (
      <div>
        <input type="text" name="num1" value={num1} onChange={this.handleInputChange} />
        <input type="text" name="num2" value={num2} onChange={this.handleInputChange} />
        <br />
        <button onClick={() => this.handleOperation('+')}>+</button>
        <button onClick={() => this.handleOperation('-')}>-</button>
        <button onClick={() => this.handleOperation('*')}>*</button>
        <button onClick={() => this.handleOperation('/')}>/</button>
        <button onClick={this.handlePower}>^</button>
        <button onClick={this.handleSquareRoot}>&radic;</button>
        <br />
        <div>Result: {result}</div>
      </div>
    );
  }
}

export default Calculator;
