import React , {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'
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

  handleChange = (e) => {
    {this.setState({searchField:e.target.value}, () =>
              console.log(this.state)
            )
          }
  }

  render(){
    //Destructuration
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) )
    return (
      <div className="App">
        <h1>Monsters Rodolex</h1>
        <SearchBox
          placeholder = 'search monsters'
          handleChange = {this.handleChange}
        ></SearchBox>
        <CardList monsters = {filteredMonsters}/> 
      </div>
    );
  }
}

export default App;
