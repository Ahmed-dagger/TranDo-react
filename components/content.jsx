'use client'
import React from 'react'
import styles from '@/app/page.module.css'
import { useRef , useState } from 'react'


const Content = () => {

  


  const inputRef = useRef(null);
  let [value , setValue] =useState(0);
  let [switching, setSwitching] = useState(false);
  

  function showValueKilos() {
    
    setValue(value = inputRef.current?.value*2.2046226)
    

    console.log(inputRef.current.value);
    console.log(value)

  }

  function showValuePounds() {
    
    setValue(value = inputRef.current?.value/2.2046226)
    

    console.log(inputRef.current.value);
    console.log(value)

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
   
 
    <label>Kilograms</label>
    <br />
    <input onChange={showValueKilos} className={styles.transFields} type="text" placeholder='KiloGrams' ref={inputRef} />
    
  </li>
  <li>

    <label >Pounds</label>
<br />
    <input className={styles.transFields} type="text" placeholder='Pounds' value={value}  />

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
   
 
    <label htmlFor="">Pounds</label>
    <br />
    <input onChange={showValuePounds} className={styles.transFields} type="text" placeholder='Pounds' ref={inputRef} />
    
  </li>
  <li>
    <label htmlFor="">Kilograms</label>
<br />
    <input className={styles.transFields} type="text" placeholder='Kilograms' value={value}  />

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

export default Content;


