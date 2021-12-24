import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./src/Todolist";

export  type FilterValueType = 'all' |'active' | 'completed';

function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'Reast API', isDone: false},
        {id: 5, title: 'GraphQL', isDone: false},
    ])
    let [filter, setFilter] = useState<FilterValueType>('all')
    let taskForTodolist = tasks
    if (filter === 'active') {
        taskForTodolist = tasks.filter(t => t.isDone === false)
    }
    if (filter === 'completed') {
        taskForTodolist = tasks.filter(t => t.isDone === true)
    }


    const removeTask = (id: number) => {
        let filteredTask = tasks.filter(t => t.id !== id)
        setTasks(filteredTask);
    }
  const changeFilter = (value: FilterValueType) => {
    setFilter(value);
  }


    return (
        <div className="App">
            <Todolist title={'What to lear'}
                      tasks={taskForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
