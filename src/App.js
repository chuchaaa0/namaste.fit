import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './Calendar.js';

const style = {
  position: "relative",
  margin: "50px auto"
}

class App extends React.Component {
  onDayClick = (e, day) => {
    alert(day);
  }
  
  render() {
    return (
      <div className="App">
        <Calendar style={style} width="302px" 
          onDayClick={(e, day)=> this.onDayClick(e, day)}/>     
      </div>
    );
  }
}

export default App;
