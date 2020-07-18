import React , {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      monsters : [],
      test:[]
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
        {
          this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
        }
      </div>
    );
  }
}

export default App;
