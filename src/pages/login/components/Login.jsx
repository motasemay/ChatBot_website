// @ts-nocheck
import React from 'react'
import logStyle from './Login.module.css'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { useFormik } from 'formik'
import axios from 'axios'

function Login() {

  const loginSchema=yup.object({
    
    email: yup.string().email().required().trim(),
    password: yup.string().min(8).max(20).required(),
  })
  
  const formik=useFormik({

    initialValues:{
    email:'',
    password:'',  

    },
    
    onSubmit:async()=>{
      try {
        const { data } = await axios.post("https://ecommerce-node4.onrender.com/auth/signin", formik.values);
        console.log(data);

        if(data.message==='success'){
          localStorage.setItem("userToken",data.token);
          // 16/10
        }
        
      } catch (error) {
        console.error(response.data.message);
      }
    },
    validationSchema:loginSchema
  
  });
  
  return (
    <>
      <div className={logStyle.loginContainer}>
        <section> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />
          <div className={logStyle.signin}>
            <div className={logStyle.content}>
              <h2>log in</h2>

              <form className={logStyle.form} onSubmit={formik.handleSubmit}>


                <div className={logStyle.inputBox}>
                  <input type="text" name="email" id="email" 
                  value={formik.email} 
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur} required />
                  <label htmlFor="email">Your Email</label>
                  {formik.errors.email && formik.touched.email ?<div className='formErrorAlert'>{formik.errors.email}</div>:null}

                </div>

                <div className={logStyle.inputBox}>
                  <input type="password" name="password" id="password" 
                  value={formik.password}
                   onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                   required />
                  <label htmlFor="password">Your Password</label>

                  {formik.errors.password && formik.touched.password ?<div className='formErrorAlert'>{formik.errors.password}</div>:null}
                </div>





                <div className={logStyle.links}>
                  <Link to="#">Forgot Password?</Link>
                  <Link to="/register">Create New Account</Link>
                </div>
                <div className={logStyle.inputBox}>
                  <input type="submit" value="Enter" />
                </div>
              </form>
            </div>
          </div>
        </section>





      </div>
    </>
  )
}

export default Login