import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form `
  align-items: center;
  font-size: 40px;
  padding: 20px;
  margin: 20px;
`


const StartButton = (props) => {

  let name = '';

  let grabName = (e) => {
    name = e.target.value;
  };

  return (
        <Form>
          Enter your Name:<br />
          <input onChange={(e) => {grabName(e)}} type="text" name="name" /><br />
          <button id="gameStart" type="button" className="btn-success" onClick={()=> props.onClick(name)}>
            Start Game
          </button>
        </Form>
  );
}

const Reset = (props) => {
  return (
      <button type="button" className="btn-primary" onClick={props.onClick}>
        Save Score & Reset Game
      </button>
  );
}

export {Reset, StartButton};
