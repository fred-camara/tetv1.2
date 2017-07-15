import React, { Component } from 'react';
import styled from 'styled-components';

const Title1 = styled.h1 `
  font-size: 5.5em;
  text-align: center;
  color: black;
`;

const H2 = styled.h2 `
  padding: 15px;
  text-align: center;
`;

const Wrapper = styled.section `
  padding: 4em;
  animation: pulse 5s infinite;
  border-style: ridge;
  border-bottom-width: 10px;
  box-shadow: 30px;
  @keyframes pulse {
    0% {
  background-color: teal;
    }
    75% {
      background-color: green;
    }
  }
`;

class Header extends Component {

  render() {
    return (
    <div>
      <Wrapper>
      <Title1>Welcome to Ultimate Tetris, Young <span id="userName">{this.props.currentPlayer}</span></Title1>
      <H2>Do you have what it takes to be the ultimate tetris master?</H2>
      <H2>Controls: <br />
          Move: Left, Right & Down Arrow Keys <br />
          Rotate Piece: Spacebar
          </H2>
      </Wrapper>
    </div>
    )
  }
}

export default Header;
