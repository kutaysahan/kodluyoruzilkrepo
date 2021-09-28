import React from 'react';
import Form from './Form';
import List from './List';
import {useState,useEffect} from 'react';

function Todos() {

    const [todoList,setTodoList] = useState(JSON.parse(localStorage.getItem('todoList')));

    const [counter,setCounter] = useState(parseInt(localStorage.getItem('counter')));

    useEffect( () => {

        localStorage.setItem('todoList',JSON.stringify(todoList));

        localStorage.setItem('counter',counter);
        
    },[todoList,counter]);

    return (
        <div>
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>

                    <Form todoList = {todoList} addTodoList = {setTodoList}
                    
                    counter = {counter} setCounter = {setCounter}

                    ></Form>
                </header>

                <section className="main">
                    <input className="toggle-all" type="checkbox" />
                    <label htmlFor="toggle-all">
                        Mark all as complete
                    </label>

                    <List todoList = {todoList} updateTodo = {setTodoList}
                    
                    counter = {counter} setCounter = {setCounter}

                    ></List>

                </section>

            </section>
        </div>
    )
}

export default Todos;
