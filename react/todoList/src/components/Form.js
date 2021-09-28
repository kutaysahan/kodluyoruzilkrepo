import React from 'react'
import {useState} from 'react';

const initialFormValues = {todo:"",completed:false};

function Form({todoList,addTodoList,counter,setCounter}) {

    const [form,setForm] = useState(initialFormValues);

    const onChangeHandler = (event) => {

        setForm({...form,[event.target.name]:event.target.value});
    }

    const onSubmitHandler = (event) => {
        
        event.preventDefault();

        if(form.todo === ""){
            return false
        }

        addTodoList([...todoList,form]);
        
        setCounter(counter+1);  

        setForm(initialFormValues);

    }

    return (
        <div>
            <form onSubmit ={onSubmitHandler}>
                <input className="new-todo" placeholder="What needs to be done?" autoFocus name = "todo"
                value = {form.todo}
                onChange = {onChangeHandler}
                />
            </form>
        </div>
    )
}

export default Form;
