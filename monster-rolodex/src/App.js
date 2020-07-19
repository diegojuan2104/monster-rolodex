import React , {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';
import axios from 'axios';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      monsters : [],
    };
  }

  componentDidMount(){
    this.getInfo()
  }

  getInfo = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(res.data);
    this.setState({ monsters: res.data });
  };

  render(){
    return (
      <div className="App">
        <CardList monsters = {this.state.monsters}/> 
      </div>
    );
  }
}

export default App;
