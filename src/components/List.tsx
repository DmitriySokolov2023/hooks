import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ITodos} from "../types/types";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const List = () => {
    const [todos, setTodos] = useState<ITodos[]>([])

    useEffect(()=>{
        fetchTodo()
    },[])
    async function fetchTodo() {


            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            if (response){
                setTodos(response.data)
                console.log(todos)
            }
    }

    return (
        <div>
            {todos.length !=0 && todos.map(todo =>
                <div style={{border:'1px solid teal', padding:'10px', margin:'5px 30px'}}>{todo.id}. {todo.title}</div>
            )}
        </div>
    );
};

export default List;