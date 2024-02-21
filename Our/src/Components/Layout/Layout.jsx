import React, { useContext, useEffect } from 'react'
import Navber from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { userContext } from '../../Context/userContext'

export default function Layout() {
  
  let {setUserToken} = useContext(userContext);

  useEffect(()=>{
    if(localStorage.getItem('userToken') !== null){
      setUserToken(localStorage.getItem('userToken'))
    }
  }, []);


  return  <>
  <Navber/>
      <Outlet></Outlet>
  <Footer/>
    </>
  
}
