import React from 'react';

export default class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({counter}) => ({
      counter: counter + 1
    }));
  }

  render() {
    if (this.state.counter === 5) {
      throw new Error('Crashed!');
    }
    return <h1 onClick={this.handleClick}>Page 1<br/>{this.state.counter}</h1>;
  }
}

