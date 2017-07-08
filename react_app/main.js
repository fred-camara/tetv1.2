import NavBar from './components/navbar.js';
import Header from './components/header.js';
import Game from './components/game.js';
import Login from "./components/signin.js";
import LeaderBoard from "./components/leaderboard.js"
import CreateUser from "./components/createuser.js";
import {Reset, StartButton} from "./components/startGame.js"
import React, {Component} from 'react';
import styled from 'styled-components';
import helper from "./utils/helpers.js";

import jquery from 'jquery';
import reactDom from 'react-dom';

const Border = styled.div `
  border: 100px solid transparent;
  position: relative;
  padding: 15px;
  height: 700px;
`

const MainDiv = styled.div `
  align-items: center;
`

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
     gameStarted: false,
     authenticated: false,
     value: "",
     score: 0,
     currentPlayer: "Tetris Jedi",
     name: "",
     password: "",
     email: "",
     leaderScores: []
   }

   this.handleloginSubmit = this.handleloginSubmit.bind(this);
   this.handlecreateSubmit = this.handlecreateSubmit.bind(this);
   this.handleGameStart = this.handleGameStart.bind(this);
   this.handleGameStop = this.handleGameStop.bind(this);
   this.handleGameName = this.handleGameName.bind(this);
 }

    componentDidMount() {
      helper.getScores().then((response) => {
         console.log(response);
         if (response.data !== this.state.leaderScores) {
           //console.log("Saved Articles", response.data);
           this.setState({ leaderScores: response.data });
         }
      });
    }

    handleGameName(name) {
      this.setState({currentPlayer: name})
    }

    handleGameStart() {
      this.setState({gameStarted: true});
    }

    handleGameStop() {
      this.setState({gameStarted: false});
    }

   handlecreateSubmit(name, email, password) {

     jquery.ajax({
       type: "POST",
       url: "/signup",
       data: {name: name,
              email: email,
              password: password},
       dataType: "json",
        success: function(data) {
          alert("Success");
          console.log(data);
          $("#createUser").modal("hide");
        }
     });
   }

  //  handleLoginNameChanges(event) {
  //    this.setState({
  //      name: event.target.value
  //    });
  //  }
   //
  //  handleLoginEmailChanges(event) {
  //    this.setState({
  //      email: event.target.value
  //    });
  //  }
   //
  //  handleLoginPasswordChanges(event) {
  //    this.setState({
  //      password: event.target.value
  //    });
  //  }

  handleloginSubmit(name, email, password) {

     event.preventDefault();
     jquery.ajax({
       type: "POST",
       url: "/login",
       data: {
         name: username,
         password: password,
         email: email
       },
       dataType: "json",
        success: function(data) {
          alert("Success");
          this.setState({
            authenticated: true
          });
          $("#login").modal("hide");
        }
     });
   }
  //the state for main will contain:
  //score for the leaderboard
  //username, email, password for the forms
  //boolean if the user has been authenticated (affects what's displayed)
  //game toggler - whether the game is on or not

  //functions: login function, create user function,
  //handle passwordChanges, usernameChanges, scoreChanges
  //a toggler that shows the respective modals

  //the states that can be changed in the game

  //the game needs to be constructed

  render() {

  // let button = null;
  // if (gameStarted) {
  //   button = <Reset onClick={this.handleGameStop} />;
  // } else {

  // }

    return (
       <Border>
        <NavBar />
        <Header currentPlayer={this.state.currentPlayer} />
        <MainDiv>
          <StartButton onClick={this.handleGameName} />
          <Game score={this.state.score} />
          <LeaderBoard leaderScores={this.state.leaderScores}/>
        </MainDiv>

        <CreateUser handlecreateSubmit={this.handlecreateSubmit} />
        <Login handleloginSubmit={this.handleloginSubmit} />

       </Border>
    );
  }
}
reactDom.render(React.createElement(Main), document.getElementById('react'));
