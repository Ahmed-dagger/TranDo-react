import React from 'react'
import styles from '@/app/page.module.css'
import { useState } from 'react'


const Nav = () => {

  const [ toggle , setToggleDropdown]=useState(false);
  

  return (
   
      <header className='header'>
        
        <div className={styles.mobNav}>
        <img src={'/TranDo.png'} alt="" className={styles.headerLogo} />
        <button onClick={()=> setToggleDropdown (!toggle)} className={styles.mobMenu}>≡</button>

        {toggle && (

          <ul className={styles.mobList}>
            <li>About</li>
            <li>Contact</li>
          </ul>


        )}
        
        </div>

        

        
        
        <div className={styles.buttons}>
          <ul>
            <li><button className={styles.btn}>About</button></li>
            <li><button className={styles.btn}>Contact</button></li>
          </ul>
          
          
        </div>
        
      </header>
   
    
  )
}

export default Nav;
