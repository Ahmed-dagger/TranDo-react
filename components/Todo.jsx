import React, { useRef, useState } from 'react'
import styles from '@/app/page.module.css';


const Todo = ({addTodo}) => {

    const [printValue,setPrintValue] = useState('');

    const[ error , setError] =useState('')

    const handleChange = (e) =>
    {
        setPrintValue(e.target.value);
        
    }

    

    const handleSubmit= e =>
    {
        e.preventDefault();
        let validErorr = '';
        

        if(!printValue.trim())
        {
          /*alert('You already have things Todo today please, ADD SOME!')*/

          validErorr = 'You already have things Todo today please, ADD SOME!'

          


        }

        else
        {
          addTodo(printValue);
        }

        

        setPrintValue("");
        setError(validErorr);
    }



  return (
    <>
    <div className={styles.todoContent}>

      <br />
       <div className='headTodoCenter'>
       <h1 className={styles.headTextTodo}>ToDo to get things DONE!</h1>
       </div>

        <br />

        <div className='formCenter'>

        <form className='todoForm'> 
         
            <input className={styles.todoInput} type="text" onChange={handleChange} value={printValue} placeholder='What is your tasks today?'/>
            <button type='submit' className={styles.todoSubmit} onClick={handleSubmit}>Add Task</button>    

        </form>

        {error &&  <p className={styles.errorValid}>You already have things Todo today <br /> please, ADD SOME! </p>}

        </div>
        
    </div>

  

    </>
    
  )
}

export default Todo