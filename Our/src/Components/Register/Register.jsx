import React, { useState }   from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import localImage from '../../Assets/images/register_left_side.png'; 
import { useNavigate } from 'react-router-dom';

export default function Register() {
  let navigate = useNavigate();

  const [error, setError] = useState(null);
  const [isloading, setisLoading] = useState(false);

  async function registerSubmit(values){
    setisLoading(true)
   let {data} = await axios.post(`http://localhost:5555/auths/signup` , values).catch((err)=> {
      setisLoading(false)  
      setError(err.response.data.error)})
      
      if ( data.data.active === true  ){
        setisLoading(false)
        navigate('/login')
      }
      
    }
  
  // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  let validationSchema = Yup.object({
    name: Yup.string().min(3, 'minlength is 3').max(15, 'maxlength is 15').required('name is required!'),
    email: Yup.string().email('email is invalid').required('email is required!'),
    role: Yup.string().required('role is required'),
    password: Yup.string()
      .matches(passwordRegex, 'Password must contain at least 8 characters including one uppercase letter, one lowercase letter, and one digit')
      .required('Password is required'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Password confirmation is required'),
  });

  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      role: '',
      
    },
    validationSchema,
    onSubmit: registerSubmit,
  });

  return (
    <>
      <br />
      <div className="register-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif', fontWeight: 'bold' }}>
        <img src={localImage} alt="Profile" style={{ width: '800px', height: '600px', marginRight: '50px' }} />
        <div style={{ width: '40%' }}>
  
          {error !== null ? <div className='alert alert-danger'>{error}</div> : ''}
  
          <h3 className='custom-font' style={{ color: 'rgb(27 93 165)' }}>Register Now</h3>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor='name'>Name :</label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} name='name' className='form-control mb-2' type='text' id='name' style={{ width: '200px' }} />
            {formik.errors.name && formik.touched.name && <div className='alert mt-2 p-2 alert-danger'>{formik.errors.name}</div>}
  
            <label htmlFor='email'>Email :</label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} name='email' className='form-control mb-2' type='email' id='email' style={{ width: '200px' }} />
            {formik.errors.email && formik.touched.email && <div className='alert mt-2 p-2 alert-danger'>{formik.errors.email}</div>}
  
            <label htmlFor='password'>Password :</label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} name='password' className='form-control mb-2' type='password' id='password' style={{ width: '200px' }} />
            {formik.errors.password && formik.touched.password && <div className='alert mt-2 p-2 alert-danger'>{formik.errors.password}</div>}
  
            <label htmlFor='passwordConfirm'>Confirm Password :</label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.passwordConfirm} name='passwordConfirm' className='form-control mb-2' type='password' id='passwordConfirm' style={{ width: '200px' }} />
            {formik.errors.passwordConfirm && formik.touched.passwordConfirm && <div className='alert mt-2 p-2 alert-danger'>{formik.errors.passwordConfirm}</div>}
  
            <label htmlFor='role'>Role :</label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.role} name='role' className='form-control mb-2' type='text' id='role'  placeholder="student or admin" style={{ width: '200px' }} />
            {formik.errors.role && formik.touched.role && <div className='alert mt-2 p-2 alert-danger'>{formik.errors.role}</div>}
  
            {isloading ? (
              <button type='button' className='btn bg-main text-white mt-2'>
                <i className='fas fa-spinner fa-spin'></i>
              </button>
            ) : (
              <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-primary text-white mt-2'>
                Register
              </button>
            )}
  
            <p className="mt-2">Already a member? <a href="/login">Log in</a></p>
          </form>
        </div>
      </div>
      <br />
    </>
  );
  
}