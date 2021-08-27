import React, { Component } from 'react';
import Form from './components/Form';
// import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        {/* <Post name="bob" text="Hello world"/> */}
      </div>
    );
  }
}
export default App;