import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import jareds from './jareds';

class Jared extends Component {

  render() {
    return (
      <div>
        <P5Wrapper sketch={jareds} ></P5Wrapper>
      </div>
    );
  }
}

export default Jared;