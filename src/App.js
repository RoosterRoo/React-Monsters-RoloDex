import { Component } from 'react';
import './App.css';
import CardList from './card-list/card-list.component';
import SearchBox from './search-box/search-box.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return {
            monsters: users
            }
       })
     })
  }

  searchList = (event) => {
      this.setState(() => {
        return {searchField: event.target.value}
    });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 class="app-title">Monsters RoloDex</h1>
        <SearchBox className="search-box" placeholder="search monsters" onChangeHandler={this.searchList}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
