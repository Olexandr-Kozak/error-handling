import React from 'react';

export default class Wigget extends React.Component {
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
       throw new Error('You have some ERROR! :(');
     }
     return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
   }
 }

