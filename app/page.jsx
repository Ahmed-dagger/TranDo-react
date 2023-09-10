'use client'
import React  from 'react'
import Nav from '@/components/nav';
import Content from '@/components/content';
import styles from './page.module.css';
import { useRef , useState } from 'react'
import ContentMeter from '@/components/ContentMeter';
import Footer from '@/components/footer';
import HeaderText from '@/components/HeaderText';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentOunce from '@/components/Contentounce';
import ContentCelsuis from '@/components/ContentClesuis';
import Todo from '@/components/Todo';
import TodoWrapper from '@/components/TodeWrapper';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';






const Home = () => {

  
  const [selectValue,setSelect]=useState();

  console.use

  const selectOptions = 
  [
    {label : 'Kilograms - Pounds' } , 
    {label : 'Meters - Miels' },
    {label : 'Kilograms - Ounce' },
    {label : 'Fahrenhiet - Celsius' }

  ]

  const handleSelect = (event) =>
  {

    setSelect(event.target.value);


  }
  return (
    
    <>
   <div className='page'>

   <div> 

<Nav />

</div>

<br  className='hidden'/>


<div className={styles.headTextwrapper}>
<HeaderText />
</div>



<br className='hidden'/>

<div>
<select className={styles.select} name="" id="" onChange={handleSelect}>
<option value="" disabled selected hidden>Choose who you want to transform</option>
{selectOptions.map(option => (
  <option> {option.label}</option>
))}
</select>


</div>

<br className='hidden'/>

<div>
  
{selectValue==='Kilograms - Pounds' && <Content />}

</div>
<div>

{selectValue==='Meters - Miels' && <ContentMeter />}
</div>

<div>
    {selectValue==='Kilograms - Ounce'  && <ContentOunce />}
</div>
<div>
    {selectValue==='Fahrenhiet - Celsius' && <ContentCelsuis />}
</div>

<br className='hidden' />

<div>
  <TodoWrapper />
</div>

<br className='hidden'/>
<br className='hidden' />

</div>

<br />
<br />
<br />
<br />
<br />
<br />
<footer>
<Footer />
</footer>
    </>  
  )
}

export default Home;