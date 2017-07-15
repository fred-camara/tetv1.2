import React, { Component } from 'react';
import {Title, List, Person} from './grandchildren/list.js';
import styled from 'styled-components';


const LeaderBoard = styled.div `
  font-family: 'Roboto Mono', monospace;
  font-size: 25px;
  width: 650px;
  background: #FFFFFF;
  padding: 50px;
  margin: 50px;
  border-color: #228B22;
  border-width: 15px;
  box-shadow: 35px;
  box-shadow: 0 5px 10px -5px rgba(black, .2);
`

class Leaderboard extends Component
{

  constructor(props) {
    super(props);
    this.state = {
      title: "Leaderboard"
    }
  }

  render() {
		return (
			<LeaderBoard className="Leaderboard col-md-6">
				<Title title={this.state.title} />
				<List people={this.props.leaderScores} />
			</LeaderBoard>
		);
  }
}


export default Leaderboard;
