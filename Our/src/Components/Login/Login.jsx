import React, {  useContext, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import localImage from '../../Assets/images/Mobile login-rafiki.png'; 
import {  useNavigate } from 'react-router-dom';
import { userContext } from '../../Context/userContext';

export default function Login() {

  let {setUserToken} = useContext(userContext)
    let navigate = useNavigate();
    const [error ,setError] = useState(null);
    const [isloading ,setisLoading] = useState(false);


 async function loginSubmit(values){
  setisLoading(true)
 let {data} = await axios.post(`http://localhost:5555/auths/login` , values).catch((err)=> {
    setisLoading(false)  
    let x = err.response.data.error 
    setError(x)})
    
    if ( data.data.active === true  ){
      console.log(data.token);
      setisLoading(false)
      localStorage.setItem('userToken' , data.token)
      setUserToken(data.token)
      navigate('/')
    }
    
  }


  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  let validationSchema = Yup.object({
    email: Yup.string().email("email is invalid").required("email is required!"),
    password: Yup.string().matches(passwordRegex, 'Password must contain at least 8 characters including one uppercase letter, one lowercase letter, and one digit').required('Password is required'),
  })

  let formik = useFormik({
    initialValues : {
      email :"",
      password:"",
    },validationSchema,
    onSubmit:loginSubmit
  })
  return  <>
  <div className="register-container" style={{ display: 'flex',justifyContent: 'center', alignItems: 'center', fontFamily: 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif',fontWeight: 'bold'  }}>
      <img src={localImage} alt="Profile" style={{width: '750px', height: '750px', marginRight: '50px'}} />
      <div style={{ width: '40%' }}>

      {error !== null ?  <div className='alert alert-danger'>{error}</div> :''}

      <h3 style={{ color: 'rgb(27 93 165)' }}>Login Now</h3>
     <form onSubmit={formik.handleSubmit}>

        <label htmlFor="email">Email :</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} name='email' className='form-control mb-2' type="email" id='eamil'style={{ width: '200px' }} />
        {formik.errors.email && formik.touched.email && (<div className='alert mt-2 p-2 alert-danger'>{formik.errors.email}</div>)}


        <label htmlFor="password">Password :</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} name='password' className='form-control mb-2' type="password" id='password' style={{ width: '200px' }}/>
        {formik.errors.password && formik.touched.password && ( <div className='alert mt-2 p-2 alert-danger'>{formik.errors.password}</div>)}


        {isloading ? (
          <button type="button" className="btn bg-main text-white mt-2">
            <i className="fas fa-spinner fa-spin"></i>
          </button>) : (
        <>
          <div className="d-flex align-items-center">
            <button disabled={!formik.isValid || !formik.dirty} type="submit" className="btn bg-main text-white mt-2 mx-2">
              Login
            </button>
          </div>
        </>
      )}
            <p className="mt-2">Don't have an account? <a href="/register">Register</a></p>



      </form>
    </div>
    </div>
    <br />

    </>
  
}
