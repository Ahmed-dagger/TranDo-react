import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (

    <MDBFooter bgColor='dark' className='text-center text-lg-left'>
      <div className='text-center text-light p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-light' href='#'>
          TranDo.github.io
        </a>
      </div>
    </MDBFooter>
   
  )
}

export default Footer;