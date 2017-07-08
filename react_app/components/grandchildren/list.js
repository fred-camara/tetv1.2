import React, { Component } from 'react';
import styled from 'styled-components';


const TitleStyle = styled.div `
  padding: 20px;
  background: #121212;
	color: white;
  font-size: 40px;
	font-weight: 700;
	text-transform: uppercase;
	text-align: center;
`
const ul = styled.ul `
    padding: 20px;
`
const Personli = styled.li `
  align-items: center;
  background-size: cover;
  display: flex;
  margin-bottom: 10px;
`

const Name = styled.div `

  font-size: 30px;
  color: black;

`
const Score = styled.div `

  font-size: 30px;
  margin-left: auto;
  font-weight: 700;
  color: black;
`


let Title = React.createClass({
	render: function() {
		return (
			<TitleStyle>{this.props.title}</TitleStyle>
		);
	}
});

let List = React.createClass({
	compareArray: function(a,b) {
		if (a.score < b.score)
			return 1;
		if (a.score > b.score)
			return -1;
		return 0;
	},
	sortArray: function() {
		return this.props.people.sort(this.compareArray);
	},
	render: function() {

		let peopleList = this.sortArray();

		let people = peopleList.map(function(person, i) {
			return <Person key={i} name={person.name} score={person.score} />
		});

		return (
			<ul>
				{people}
			</ul>
		);
	}
});

let Person = React.createClass({
	render: function() {
		return (
			<Personli>
				<Name>{this.props.name}</Name>
				<Score>{this.props.score}</Score>
			</Personli>
		);
	}
})

export {Title, Person, List};
