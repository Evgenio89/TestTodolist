import React from "react";
import {FilterValueType} from "../App";


type taskType = {
    id: number
    title: string
    isDone: boolean
}

type todolistType = {
    title: string
    tasks: taskType[]
    removeTask: (taskId: number) => void
    changeFilter: (value: FilterValueType) => void
}

export const Todolist = (props: todolistType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map(t => <li key={t.id}>
                        <button onClick={() => props.removeTask(t.id)}>X</button>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                    </li>)
                }

            </ul>
            <div>
                <button onClick={() => {props.changeFilter('all')}}>All</button>
                <button onClick={() => {props.changeFilter('active')}}>Active</button>
                <button onClick={() => {props.changeFilter('completed')}}>Completed</button>
            </div>
        </div>)
}