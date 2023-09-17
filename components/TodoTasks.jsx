import React from 'react'
import styles from '@/app/page.module.css'

import { useState } from 'react';

const TodoTasks = ({task , deleteTodo , editTodo}) => {

  

  const handleClick = (event) => {
    // 👇️ set to true
    if (event.currentTarget.style.backgroundColor) {
      event.currentTarget.style.backgroundColor = null;
      event.currentTarget.style.color = null;
      event.currentTarget.style.transition='0.3s';
      event.currentTarget.style.textDecoration='none'

    } else {
      event.currentTarget.style.backgroundColor = '#333';
      event.currentTarget.style.color = 'white';
      event.currentTarget.style.transition='0.3s';
      event.currentTarget.style.textDecoration='line-through'
    }
  };
  return (
    <div className='taskCenter'>

        <p 

          
         onClick={handleClick}
         onDoubleClick={() => editTodo (task.id)} className={styles.tasks}>
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