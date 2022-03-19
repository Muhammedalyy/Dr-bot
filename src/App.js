import React from "react";
import {Component} from "react";
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Chat from './pages/Chat';
import Start from './pages/Start';
import Testin from './pages/Testin';



function App() {  

  // class Appp extends Component {
  //   state = {
  //     response: '',
  //     post: '',
  //     responseToPost: '',
  //   };
    
  //   componentDidMount() {
  //     this.callApi()
  //       .then(res => this.setState({ response: res.express }))
  //       .catch(err => console.log(err));
  //   }
    
  //   callApi = async () => {
  //     const response = await fetch('/api/hello');
  //     const body = await response.json();
  //     if (response.status !== 200) throw Error(body.message);
      
  //     return body;
  //   };
    
  //   handleSubmit = async e => {
  //     e.preventDefault();
  //     const response = await fetch('/api/world', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ post: this.state.post }),
  //     });
  //     const body = await response.text();
      
  //     this.setState({ responseToPost: body });
  //   };
  // }
    
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/chatbot">
            <div style={{maxWidth: "300px"}} ></div>
            <Chat />
          </Route>
          <Route path="/start">
            <Start />
          </Route>
          <Route path="/Testin">
            <Testin/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
