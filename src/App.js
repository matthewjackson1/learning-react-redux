import React, { Component } from 'react';
import { voteAngular, voteReact, voteVuejs } from './actions'
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }
  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  }
  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  }
  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  }
  render() {
    return (
      <div>
        <div className="jumbotron" style={{'textAlign': 'center'}}>
          <h2>What is your favorite front-end development framework 2017?</h2>
          <h4>Click on the logos below to vote!</h4>
          <br />
          <div className="row">
            <div className="col-xs-offset-3 col-xs-2">
              <img src="img/angular-logo.png" height="96" alt="Angular" onClick={this.handleVoteAngular}></img>
            </div>
            <div className="col-xs-2">
              <img src="img/react-logo.png" height="96" alt="React" onClick={this.handleVoteReact}></img>
            </div>
            <div className="col-xs-2">
              <img src="img/vue-logo.png" height="96" alt="Vue.js" onClick={this.handleVoteVuejs}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;