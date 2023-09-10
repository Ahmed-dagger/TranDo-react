'use client'
import React from 'react'
import styles from '@/app/page.module.css'
import { useRef , useState } from 'react'

const ContentOunce = () => {

  


  const inputRef = useRef(null);
  let [value , setValue] =useState(0);

  function showValue() {
    
    setValue(value = inputRef.current?.value*35.2739619)
    

    console.log(inputRef.current.value);
    console.log(value)

  }

  
  return (
    <div>
      <ul className={styles.contentList}>
        <li>
          <label >Kilograms</label>&nbsp;&nbsp;
          <input onChange={showValue} className={styles.transFields} type="text" placeholder='Kilograms' ref={inputRef} />
          
        </li>
        <li>
          <label >Ounces</label>&nbsp;&nbsp;
          <input className={styles.transFields} type="text" placeholder='Ounces' value={value}  />
      
        </li>
      </ul>
      

      <button className={styles.transBtn} onClick={showValue}>Trans</button>
    
    </div>
  )
}

export default ContentOunce;