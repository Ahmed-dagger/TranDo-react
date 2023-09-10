'use client'
import React from 'react'
import styles from '@/app/page.module.css'
import { useRef , useState } from 'react'

const ContentMeter = () => {

  


  const inputRef = useRef(null);
  let [value , setValue] =useState(0);

  function showValue() {
    
    setValue(value = inputRef.current?.value*0.0006214)
    

    console.log(inputRef.current.value);
    console.log(value)

  }

  

  
  

  
  return (
    <div className={styles.main}>
      <ul className={styles.contentList}>
        <li>
          <label >Meters</label>&nbsp;&nbsp;
          <input onChange={showValue} className={styles.transFields} type="text" placeholder='Meters' ref={inputRef} />
          
        </li>
        <li>
          <label >Miels</label>&nbsp;&nbsp;
          <input className={styles.transFields} type="text" placeholder='miles' value={value}  />
      
        </li>
      </ul>
      

      <button className={styles.transBtn} onClick={showValue}>Trans</button>
    
    </div>
  )
}

export default ContentMeter;