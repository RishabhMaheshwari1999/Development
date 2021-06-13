import React, { Component } from 'react';
import TodosList from './components/TodosList/TodosList';
import InputBox from './components/InputBox/InputBox';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
        <InputBox></InputBox>
        <TodosList></TodosList>
      </div>
     );
  }
}
 
export default App;
