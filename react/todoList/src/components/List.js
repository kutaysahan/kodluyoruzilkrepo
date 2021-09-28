import React from 'react';
import { useState, useEffect } from 'react';

function List({ todoList, updateTodo, counter, setCounter }) {

    const [filteredTodo, setFilteredTodo] = useState([]);

    const [isFiltered, setIsFiltered] = useState(false);

    const [selectedActive, setSelectedActive] = useState("");

    const [selectedCompleted, setSelectedCompleted] = useState("");

    const [selectedAll, setSelectedAll] = useState("");

    const [isVisible, setIsVisible] = useState(Boolean(localStorage.getItem('isVisible')));

    useEffect(() => {
        localStorage.setItem('isVisible',isVisible);
    },[isVisible]);


    useEffect(() => {

        if (todoList.length === 0) {

            setIsVisible(false);

        }

    }, [todoList]);



    const checkedTrueTodos = todoList.filter(item => item.completed === true);

    useEffect(() => {
        if(checkedTrueTodos.length === 0){

            setIsVisible(false);

        }
        
    },[checkedTrueTodos]);

    const completeTodo = (event) => {

        let index = event.target.parentElement.parentElement.getAttribute("index");

        if (event.target.checked === true) {

            todoList[index].completed = true;

            updateTodo([...todoList]);

            setCounter(counter - 1);

        } else {

            todoList[index].completed = false;

            updateTodo([...todoList]);

            setCounter(counter + 1);
        }

        const completeTodoList = todoList.filter(item => item.completed === true);

        if (completeTodoList.length > 0) {

            setIsVisible(true);

        } else {

            setIsVisible(false);
        }
    }


    

    
    const removeHandler = (event) => {

        const todoName = event.target.parentElement.parentElement.getAttribute("name");

        const unRemovedTodos = todoList.filter(item => item.todo !== todoName);

        updateTodo(unRemovedTodos);

        const unRemovedFilteredTodos = filteredTodo.filter(item => item.todo !== todoName);

        setFilteredTodo(unRemovedFilteredTodos);
        
        if (event.target.parentElement.children[0].checked === false) {
            setCounter(counter - 1);
        } 
        
        
    }


    const completeTodoHandler = () => {

        const filteredCompleteTodo = todoList.filter(item => item.completed === true);

        setFilteredTodo(filteredCompleteTodo);

        setIsFiltered(true);

        setSelectedActive("");

        setSelectedAll("");

        setSelectedCompleted("selected");

    }


    const completeFilteredTodo = (event) => {

        let index = event.target.parentElement.parentElement.getAttribute("index");

        if (event.target.checked === true) {

            filteredTodo[index].completed = true;

            const newFilteredTodo2 = filteredTodo.filter(item => item.completed === false);

            setFilteredTodo(newFilteredTodo2);

            setCounter(counter - 1);

        } else {

            filteredTodo[index].completed = false;

            const newFilteredTodo = filteredTodo.filter(item => item.completed === true);

            setFilteredTodo(newFilteredTodo);

            setCounter(counter + 1);

        }


        const completeFilteredTodoList = filteredTodo.filter(item => item.completed === true);

        if (completeFilteredTodoList.length === 0) {

            setIsVisible(false);

        }
    }

   
    const renderFiltered = () => {
        return (
            <ul className="todo-list">
                {
                    filteredTodo.map((item, index) => {
                        return (
                            <li key={index} index={index} name={item.todo}
                                className={item.completed === true ? "completed" : ""}>
                                <div className="view">
                                    <input className="toggle" type="checkbox"
                                        onChange={completeFilteredTodo}
                                        checked={item.completed === true ? true : false}
                                    />
                                    <label>{item.todo}</label>

                                    <button className="destroy"
                                        onClick={removeHandler}
                                    ></button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }


    const allTodoHandler = () => {

        setIsFiltered(false);

        setSelectedActive("");

        setSelectedAll("selected");

        setSelectedCompleted("");

    }

    const activeTodoHandler = () => {

        const filteredActiveTodo = todoList.filter(item => item.completed === false);

        setFilteredTodo(filteredActiveTodo);

        setIsFiltered(true);

        setSelectedActive("selected");

        setSelectedAll("");

        setSelectedCompleted("");

    }

    const clearCompleted = () => {

        const clearAllCompletedTodo = todoList.filter(item => item.completed === false);

        updateTodo(clearAllCompletedTodo);

        const clearAllCompletedFilteredTodo = filteredTodo.filter(item => item.completed === false);

        setFilteredTodo(clearAllCompletedFilteredTodo);

        setIsVisible(false);

    }   

    return (
        <div>
            {   
                isFiltered ? renderFiltered() :

                    <ul className="todo-list">
                        {   
                            todoList.map((item, index) => {
                                return (
                                    <li key={index} index={index} name={item.todo}
                                        className={item.completed === true ? "completed" : ""}>
                                        <div className="view">
                                            <input className="toggle" type="checkbox"
                                                onChange={completeTodo}
                                                checked={item.completed === true ? true : false}
                                            />
                                            <label>
                                                {item.todo}</label>
                                            <button className="destroy"
                                                onClick={removeHandler}
                                            ></button>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
            }

            <footer className="footer">
                <span className="todo-count">
                    <strong>{counter}</strong> items left
                </span>

                <ul className="filters">
                    <li>
                        <a className={selectedAll}
                            onClick={allTodoHandler}>All</a>
                    </li>
                    <li>
                        <a className={selectedActive}
                            onClick={activeTodoHandler}>Active</a>
                    </li>
                    <li>
                        <a className={selectedCompleted}
                            onClick={completeTodoHandler}>Completed</a>
                    </li>
                </ul>

                <button className="clear-completed" onClick={clearCompleted}
                    style={isVisible ? { display: "block" } : { display: "none" }}
                >
                    Clear completed
                </button>
            </footer>

        </div>

    )
}

export default List;
