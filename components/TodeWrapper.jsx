import React from 'react'
import Todo from './Todo'
import {v4 as uuidv4} from 'uuid'
import styles from '@/app/page.module.css'
uuidv4();
import { useState, useEffect } from 'react'
import TodoTasks from './TodoTasks';
import TodoEdit from './todoEdit';

const TodoWrapper = () => {

  const data = window.sessionStorage.getItem('Todo');

    const [todos,setTodos]=useState(!data? [] : JSON.parse(data));

    useEffect(() => 
    {

      

      if ( data !== null) setTodos(JSON.parse(data))

    }, [])

    useEffect(()=>{

      window.sessionStorage.setItem('Todo' , JSON.stringify(todos))

    }, [todos])


    const addTodo = todo =>
    {
        setTodos([...todos,
        {id: uuidv4(),task: todo , isEdit: false }])

        console.log(todos);
    }

    const deleteTodo = id =>
    {
      setTodos(todos.filter((todo) => todo.id !== id))
    }

    const editTodo= id =>
    {
      setTodos(todos.map(todo => todo.id === id ? {...todo , isEdit: !todo.isEdit}: todo))
    }

    const editTask= (task , id) =>
    {
      setTodos(todos.map(todo => todo.id === id ? {...todo ,task, isEdit: !todo.isEdit}: todo))
    }


    
  return (
    <div className={styles.wrapper}>

        <Todo addTodo={addTodo} />

        <br className='hiddern' />

        {todos.map((todo ,index) => 
        (

          todo.isEdit? 
          (
            <TodoEdit editTodo={editTask} task={todo} />
          ) :
          (

            <TodoTasks
            deleteTodo= {deleteTodo}
            editTodo={editTodo}
            task={todo} key={todo.id} />
          )


         
        ))}

        <br className='hiddern'/>
        <br className='hiddern'/>
    </div>
  )
}

export default TodoWrapper