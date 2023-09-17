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
    <div className='center'>
      <ul className={styles.contentList}>
        <li>
          <label >Meters</label>&nbsp;&nbsp;<br />
          <input onChange={showValue} className={styles.transFields} type="text" placeholder='KiloGrams' ref={inputRef} />
          
        </li>
        <li>
          <label >Miles</label>&nbsp;&nbsp; <br />
          <input className={styles.transFields} type="text" placeholder='Pounds' value={value}  />
      
        </li>
      </ul>
      

      <div className='btnCenter'>
      <button className={styles.transBtn} onClick={showValue}>Trans</button>
      </div>
    
    </div>
  )
}

export default ContentMeter;