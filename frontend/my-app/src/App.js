import './App.css';
import React from "react";
import Sidebar from './sidebar'
import Header from './header'
import Body from './body'

function App() {
  
  return (
    <div className="App">
        <Sidebar/>
        <Header/>
        <Body/>
    </div>

  );
}

export default App;
