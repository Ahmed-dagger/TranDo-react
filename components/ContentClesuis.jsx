'use client'
import React from 'react'
import styles from '@/app/page.module.css'
import { useRef , useState } from 'react'

const ContentCelsuis = () => {

  


  const inputRef = useRef(null);
  let [value , setValue] =useState(0);
  let [switching, setSwitching] = useState(false);

  function showValueCelsuis() {
    
    setValue(value = (inputRef.current?.value*9/5)+32)
    

    console.log(inputRef.current.value);
    console.log(value)

  }

  const showValueFahrenheit= () =>
  {
    setValue(value = (inputRef.current?.value-32)*5/9)
  }

  const switchValue = () =>
{

  setSwitching(!switching);
  
 
}


  
  return (
    <>

    {!switching ? (
    
      <> 
      <div  className='centerFields'>
    <ul className={styles.contentList}>
      <li>
       
     
        <label>Celsuis</label>
        <br />
        <input onChange={showValueCelsuis} className={styles.transFields} type="text" placeholder='Celsuis' ref={inputRef} />
        
      </li>
      <li>
    
        <label >Fahrenheit</label>
    <br />
        <input className={styles.transFields} type="text" placeholder='Fahrenheit' value={value}  />
    
      </li>
    </ul>
    </div>
    
    <div className='btnCenter'>
      <button className={styles.transBtn} onClick={switchValue}>Switch</button>
    </div>
      
      </>
    
    
    
    ) : (
     
      <> 
      <div  className='centerFields'>
    <ul className={styles.contentList}>
      <li>
       
     
        <label htmlFor="">Fahrenheit</label>
        <br />
        <input onChange={showValueFahrenheit} className={styles.transFields} type="text" placeholder='Fahrenheit' ref={inputRef} />
        
      </li>
      <li>
        <label htmlFor="">Celsuis</label>
    <br />
        <input className={styles.transFields} type="text" placeholder='Celsuis' value={value}  />
    
      </li>
    </ul>
    </div>
    
    <div className='btnCenter'>
      <button className={styles.transBtn} onClick={switchValue}>Switch</button>
    </div>
      
      </>
    )}
    
    
    </>
  )
}

export default ContentCelsuis;