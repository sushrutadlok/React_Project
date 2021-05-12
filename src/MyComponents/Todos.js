import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "30px auto"
    }
    return (
        <div className="container my-3" style={myStyle}>
            <h3 className="text-center my-3">Todos List</h3>
            {props.todos.length === 0 ? "No Todos To Display" :
                props.todos.map((todo, sno) => {
                    return (<TodoItem key={sno} todo={todo} onDelete={props.onDelete} />)
                })
            }

        </div>
    )
}
