import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SidebarComponent from './SidebarComponent';
import MainComponent from './MainComponent';

class App extends Component {
  render() {
    let urlList = [
      {
        urlName: "vinit",
        apiUrl: "https://vinitkumar.me"
      },
      {
        urlName: "Anit",
        apiUrl: "https://anit.github.io"
      },
      {
        urlName: "Apurva",
        apiUrl: "https://apurvadey.github.io"
      },
    ];
    return (
      <div className="App">
        <div className="sidebar">
          <h1> sidebar</h1>
          <SidebarComponent urllist={urlList}></SidebarComponent>
        </div>
        <div className="main data-loader">
          <h1> Main container</h1>
          <MainComponent></MainComponent>
        </div>
      </div>
    ); 
  }
}




export default App;
