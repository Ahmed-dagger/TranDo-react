import React, { useState } from 'react'
import styles from '@/app/page.module.css';

const TodoEdit = ({editTodo, task}) => {

    const [printValue,setPrintValue] = useState(task.task);

    const handleChange = (e) =>
    {
        setPrintValue(e.target.value);
        
    }

    const[ error , setError] =useState('')

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
          editTodo(printValue , task.id);
        }

        

        setPrintValue("");
        setError(validErorr);
    }

    
  return (

    
    <div className='formCenter'>

    <form className='todoForm'> 
     
        <input className={styles.todoInput} type="text" onChange={handleChange} value={printValue} placeholder='Type your update...'/>
        <button type='submit' className={styles.todoSubmit} onClick={handleSubmit}>Update</button>    

    </form>

    {error &&  <p className={styles.errorValid}>You already have things Todo today <br /> please, ADD SOME! </p>}

    </div>
  )
}

export default TodoEdit