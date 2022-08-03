import { Component } from "react";
import "./App.css";
import { Cardlist } from "./component/card-list/card-list-component";
import { Searchbox } from "./component/search/search-box-component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <Searchbox
          placeholder="search monsters"
          handleChange={(e) => 
           ( this.setState({ searchField: e.target.value }))
          }
        />
        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
