import React, { Component } from "react";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './App/pages/Home';
import List from './App/pages/List';


class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

 componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };
  
render() {
    const App = () =>(
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
        </Switch>
      </div>
    );
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;