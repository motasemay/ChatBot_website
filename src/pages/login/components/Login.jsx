// @ts-nocheck
import React, { useState } from 'react'
import logStyle from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { useFormik } from 'formik'
import axios from 'axios'
import { Flip, Slide, toast } from "react-toastify";
import ourLogo from '../../../assets/ourLogo.jpg';

function Login({ setIsLogin }) {

  const navigate = useNavigate();
  let [loader, setLoader] = useState(false);


  const loginSchema = yup.object({

    email: yup.string().email().required().trim(),
    password: yup.string().min(8).max(20).required(),
  })

  const formik = useFormik({

    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: async () => {
      try {
        setLoader(true); 
        const { data } = await axios.post("https://ecommerce-node4.onrender.com/auth/signin", formik.values);
        console.log(data);

        if (data.message === 'success') {

          toast.success("Login Successfully", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            pauseOnFocusLoss: false,
            className: 'successToast',
            theme: "dark",
            transition: Flip,
          });
          setLoader(false)
          localStorage.setItem("userToken", data.token);
          setIsLogin(true);
          
        navigate('/');
        }
 
      } catch (error) {
        setLoader(false);
        // console.error(response.data.message);
        toast.error(error.response.data.message, {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          pauseOnFocusLoss: false,
          className: 'errorToast',
          theme: "dark",
          transition: Flip,
        });
      }
    },
    validationSchema: loginSchema

  });

  return (
    <>
      <div className={logStyle.loginContainer}>
        <section> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />
          <div className={logStyle.signin}>
            <div className={logStyle.content}>
              {/* <h2>log in</h2> */}
              {/* <img src={ourLogo} alt="Bislan AI Logo" /> */}
              <h2 className={logStyle.companyName}>FusionIQ</h2>

              <form className={logStyle.form} onSubmit={formik.handleSubmit}>


                <div className={logStyle.inputBox}>
                  <input type="text" name="email" id="email"
                    value={formik.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} required />
                  <label htmlFor="email">Your Email</label>
                  {formik.errors.email && formik.touched.email ? <div className='formErrorAlert'>{formik.errors.email}</div> : null}

                </div>

                <div className={logStyle.inputBox}>
                  <input type="password" name="password" id="password"
                    value={formik.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required />
                  <label htmlFor="password">Your Password</label>

                  {formik.errors.password && formik.touched.password ? <div className='formErrorAlert'>{formik.errors.password}</div> : null}
                </div>





                <div className={logStyle.links}>
                  <Link to="#">Forgot Password?</Link>
                  <Link to="/register">Create New Account</Link>
                </div>
                <div className={logStyle.inputBox}>
                  <input type="submit" 
                    value={loader ? "loading....." : "LOG IN"}
                  disabled={loader ?? `disabled`}
                  />
                 
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