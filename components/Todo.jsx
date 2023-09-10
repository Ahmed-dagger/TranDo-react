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
        <h1 className={styles.headTextTodo}>ToDo to get things DONE!</h1>

        <br />
        <form className={styles.todoForm}> 
          <ul>
            <li><input className={styles.todoInput} type="text" onChange={handleChange} value={printValue} placeholder='What is your tasks today?'/></li>
            <li><button type='submit' className={styles.todoSubmit} onClick={handleSubmit}>Add Task</button></li>            
          </ul>

          {error &&  <p className={styles.errorValid}>You already have things Todo today please, ADD SOME! </p>}

        
        </form>
    </div>

  

    </>
    
  )
}

export default Todo