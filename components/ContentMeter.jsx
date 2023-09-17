'use client'
import React from 'react'
import styles from '@/app/page.module.css'
import { useRef , useState } from 'react'

const ContentMeter = () => {

  


  const inputRef = useRef(null);
  let [value , setValue] =useState(0);
  let [switching, setSwitching] = useState(false);

  function showValueMeters() {
    
    setValue(value = inputRef.current?.value/1609.344)
    

    console.log(inputRef.current.value);
    console.log(value)

  }

  const showValueMiels= () =>
  {
    setValue(value = inputRef.current?.value*1609.344)
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
   
 
    <label>Meters</label>
    <br />
    <input onChange={showValueMeters} className={styles.transFields} type="text" placeholder='Meters' ref={inputRef} />
    
  </li>
  <li>

    <label >Miels</label>
<br />
    <input className={styles.transFields} type="text" placeholder='Miels' value={value}  />

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
   
 
    <label htmlFor="">Miels</label>
    <br />
    <input onChange={showValueMiels} className={styles.transFields} type="text" placeholder='Miels' ref={inputRef} />
    
  </li>
  <li>
    <label htmlFor="">Meters</label>
<br />
    <input className={styles.transFields} type="text" placeholder='Meters' value={value}  />

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

export default ContentMeter;