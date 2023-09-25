import React from 'react'
import styles from '@/app/page.module.css'

import { useState , useEffect} from 'react';

const TodoTasks = ({task , deleteTodo , editTodo , Complete}) => {

  
  return (
    <div className='taskCenter'>

        <p 

          
         onClick={() => Complete(task.id)}
         onDoubleClick={() => editTodo (task.id)} className={`${task.isComplete ? 'completed' : "tasks"}`}
         >
         {task.task} 
        
        <img
          onClick={() => deleteTodo (task.id)}
          className={styles.trash}
          width="20"
          height="20"
          src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-trash-can-homeware-tanah-basah-glyph-tanah-basah.png"
          alt="external-trash-can-homeware-tanah-basah-glyph-tanah-basah"/>

          

        <img
          className={styles.edit}
          onClick={() => editTodo (task.id)}
          width="20"
          height="20"
          src="https://img.icons8.com/material-outlined/24/edit--v1.png"
          alt="edit--v1"/>
        </p>

    </div>
  )
}

export default TodoTasks