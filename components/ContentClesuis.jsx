'use client'
import React from 'react'
import styles from '@/app/page.module.css'
import { useRef , useState } from 'react'

const ContentCelsuis = () => {

  


  const inputRef = useRef(null);
  let [value , setValue] =useState(0);

  function showValue() {
    
    setValue(value = (inputRef.current?.value*9/5)+32)
    

    console.log(inputRef.current.value);
    console.log(value)

  }

  
  return (
    <div className={styles.main}>
      <ul className={styles.contentList}>
        <li>
          <label >Celsuis</label>&nbsp;&nbsp;
          <input onChange={showValue} className={styles.transFields} type="text" placeholder='Celsuis' ref={inputRef} />
          
        </li>
        <li>
          <label >Fahrenhiet</label>&nbsp;&nbsp;
          <input className={styles.transFields} type="text" placeholder='Fahrenhiet' value={value}  />
      
        </li>
      </ul>
      
      
      <div className={styles.center}>
        <button onClick={showValue} className={styles.transBtn} >Trans</button>
      </div>
    </div>
  )
}

export default ContentCelsuis;