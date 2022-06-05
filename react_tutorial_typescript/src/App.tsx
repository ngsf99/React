import React, { useState } from 'react';
import './App.css';
import { List } from "./components/List"
import { AddList } from "./components/AddList"
import { NewList } from './components/NewList';
import { NewAddList } from './components/NewAddList';

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;  // ? = optional
  }[]
}

function App() {

  const [people, setPeople] = useState<IState['people']>([
    {
      name: "Mason",
      age: 22,
      url: "",
      note: "Learning React + TS"
    }
  ])

  return (
    <div className="App">
        <h1>Typescript Tutorial</h1>
        <List people={people}/>
        <AddList people={people} setPeople={setPeople}/>
        <NewList people={people}/>
        <NewAddList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
