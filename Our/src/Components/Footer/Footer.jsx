import React from 'react';
import styles from './Footer.module.css'; 
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


export default function App() {
  return (
    <MDBFooter className={`text-center text-lg-start text-muted ${styles.customPrimaryOpacity }`}style={{ fontFamily: 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif',fontWeight: 'bold'  }}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block text-white' >
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5 text-white'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4 text-white'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='light' icon='user-graduate' className='me-3' />
                Seniors Pal
              </h6>
              <p style={{ color: 'white' }}>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-white'style={{ textDecoration: 'none' }}>
               111111
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'style={{ textDecoration: 'none' }}>
                 22222
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'style={{ textDecoration: 'none' }}>
                 33333
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'style={{ textDecoration: 'none' }}>
                  4444
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-white'style={{ textDecoration: 'none' }}>
                  1111
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'style={{ textDecoration: 'none' }}>
                  22222
                </a>
              </p>
              <p>
                <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                  3333
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'style={{ textDecoration: 'none' }}>
                  4444
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 '>Contact</h6>
              <p style={{ color: 'white' }}>
                <MDBIcon color='light' icon='home' className='me-2' />
                Helwan
              </p>
              <p style={{ color: 'white' }}>
                <MDBIcon color='light' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p style={{ color: 'white' }}>
                <MDBIcon color='light' icon='phone' className='me-3' /> + 00000000
              </p>
              <p style={{ color: 'white' }}>
                <MDBIcon color='light' icon='print' className='me-3' /> + 00000000
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center text-white p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-white fw-bold' href=''style={{ textDecoration: 'none' }}>
          Seniors Pal Team
        </a>
      </div>
    </MDBFooter>
  );
}