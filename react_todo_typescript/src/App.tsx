import React, {ChangeEvent, FC} from 'react';
// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ITask } from './Interface';

const App : FC = () => {

  const [task, setTask] = useState<string>('')
  const [deadline, setDeadline] = useState<number>(0)
  const [todo, setTodo] = useState<ITask[]>([])

  //if function not returning anything ,set return type as void
  const handleChange = (event: ChangeEvent <HTMLInputElement>) : void => {
    if (event.target.name === "task"){
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  }

  const addTask = () : void => {
    const newTask = {taskName: task, deadline: deadline}
    setTodo([...todo, newTask])
    setTask('')
    setDeadline(0)
    console.log(todo)
  }

  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'>
          <input 
          type="text" 
          placeholder='Insert Task' 
          name='task' 
          value={task}
          onChange={handleChange}/>
          <input 
          type="number" 
          placeholder='Days' 
          name='deadline' 
          value={deadline}
          onChange={handleChange}/>
        </div>
        <button onClick={addTask}>Add</button>
      </div>
      <div className='todoList'></div>
    </div>
  );
}

export default App;
