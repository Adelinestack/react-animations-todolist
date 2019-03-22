import React, { Component } from 'react';
import Todolist from './Todolist';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>To do list </h1>
        </header>
        <Todolist />
      </div>
    );
  }
}
