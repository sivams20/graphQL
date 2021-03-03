import { Component } from "react";

//Components
import BookList from './components/BookList';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <h1>Introduction to GraphQL</h1>
        <BookList />
      </div>
    );
  }
}

export default App;
