import React, { Component } from 'react';
import styled from 'styled-components';


const Template = styled.div `
  padding: 50px;
  border-width: 20px;
  border-color: teal;
`

const PlayerDiv = styled.div `
  background-color: #5cb85c;
  padding-bottom: 100px;
  position: relative;
  box-shadow: 45px;
`

const Canvas = styled.canvas `
  border-width: 15px;
  border-style: solid transparent;
  box-shadow: 30px;
  border-color: #fff;
  margin: 30px auto;

`

const Score = styled.div `
  padding: 30px;
  text-align: center;
  font-size: 3em;

`

const Game = (props) =>
{

let newScore = 0;

let updateScore = (e) => {
  newScore = e.target.innerHTML;
  console.log(newScore);
}


  return (
      <Template className="col-md-6" id="parent">
        <div id="player-template">
          <PlayerDiv className="player">
            <Score className="scoreHolder">Score: <span onChange={(e) => {updateScore(e)}} id="score">{props.score}</span></Score>
            <Canvas className="tetris" width="240" height="400"></Canvas>
          </PlayerDiv>
        </div>
      </Template>
    )

}


export default Game;
