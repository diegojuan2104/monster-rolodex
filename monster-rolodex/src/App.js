import React , {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';
import axios from 'axios';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField : ''
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
        <input type = 'search' placeholder='search monsters' onChange={
          
          e => {this.setState({searchField:e.target.value}, () =>
            console.log(this.state)
          )
        }}/>
        <CardList monsters = {this.state.monsters}/> 
      </div>
    );
  }
}

export default App;
