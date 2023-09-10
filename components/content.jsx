'use client'
import React from 'react'
import styles from '@/app/page.module.css'
import { useRef , useState } from 'react'


const Content = () => {

  


  const inputRef = useRef(null);
  let [value , setValue] =useState(0);

  function showValue() {
    
    setValue(value = inputRef.current?.value*2.2046226)
    

    console.log(inputRef.current.value);
    console.log(value)

  }

  return (
    <div>
      <ul className={styles.contentList}>
        <li>
          <label >Kilograms</label>&nbsp;&nbsp;
          <input onChange={showValue} className={styles.transFields} type="text" placeholder='KiloGrams' ref={inputRef} />
          
        </li>
        <li>
          <label >Pounds</label>&nbsp;&nbsp;
          <input className={styles.transFields} type="text" placeholder='Pounds' value={value}  />
      
        </li>
      </ul>
      

      <button className={styles.transBtn} onClick={showValue}>Trans</button>
    
    </div>
  )
}

export default Content;