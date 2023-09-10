import React from 'react'
import styles from '@/app/page.module.css'
import { Container} from 'react-bootstrap'
import { useState } from 'react'


const Nav = () => {

  const [ toggle , setToggleDropdown]=useState(false);
  

  return (
    <Container>
      <header className='header'>
        
        <div className={styles.mobNav}>
        <h1 className={styles.headerLogo}>Tran</h1>
        <button onClick={()=> setToggleDropdown (!toggle)} className={styles.mobMenu}>≡</button>

        {toggle && (

          <ul className={styles.mobList}>
            <li><Link > </Link></li>
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
    </Container>
    
  )
}

export default Nav;