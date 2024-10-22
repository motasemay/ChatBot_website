// @ts-nocheck
import React from 'react'
// @ts-ignore
import ncStyle from './NewCompany.module.css'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios';
import * as yup from 'yup'
import ourLogo from '../../assets/ourLogo.jpg';


function NewCompany() {

const NewCompanySchema=yup.object({
  companyName:yup.string().required().min(3).max(20).trim(),
  idNumber:yup.string().matches(/^[0-9]+$/).min(8).max(20).required().trim(),
  phoneNumber: yup.string().matches(/^[0-9]+$/).min(8).max(15).required().trim(),
  email: yup.string().email().required().trim(),
  password: yup.string().min(8).max(20)
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .matches(/[0-9]/, 'Password must contain at least one number')
  .matches(/[@$!%*?&]/, 'Password must contain at least one special character (@, $, !, %, *, ?, &, etc.)')
  .required(),

  cPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required(),
})


const formik=useFormik({
  initialValues:{

  companyName:'',
  idNumber:'',
  phoneNumber:'',
  email:'',
  password:'',
  cPassword:'',


  },
  
  onSubmit:async()=>{
    try {
      const { data } = await axios.post("http://localhost:3000/user", formik.values);
      console.log(data);
    } catch (error) {
      console.error('Error NewCompanying user:', error);
    }
  },
  validationSchema:NewCompanySchema

});


  return (
    <>
    
      <div className={ncStyle.newCompanyContainer}>
        <section className={ncStyle.newCompanySection}> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />
          <div className={ncStyle.signin}>
            <div className={ncStyle.content}>
              {/* <h2>NewCompany</h2> */}
              <h2>Super Admin</h2>
              <img src={ourLogo} alt="Bislan AI Logo" />


              <form onSubmit={formik.handleSubmit} className={ncStyle.form}>

                
                <div className={ncStyle.inputBox}>
                  <input type="text" name="companyName" value={formik.companyName} onChange={formik.handleChange} onBlur={formik.handleBlur} id="companyName" required />
                  <label htmlFor="companyName">Company Name</label>
                  {formik.errors.companyName&&formik.touched.companyName?<div className='formErrorAlert'>{formik.errors.companyName}</div>:null}
                </div>
                <div className={ncStyle.inputBox}>
                  <input type="text" name="idNumber" value={formik.idNumber} onChange={formik.handleChange} onBlur={formik.handleBlur} id="idNumber" required />
                  <label htmlFor="idNumber">ID Number</label>
                  {formik.errors.idNumber&&formik.touched.idNumber? <div className='formErrorAlert'>{formik.errors.idNumber}</div> :null}

                </div>

                <div className={ncStyle.inputBox}>
                  <input type="text" name="phoneNumber" value={formik.phoneNumber} onChange={formik.handleChange} onBlur={formik.handleBlur} id="phoneNumber" required />
                  <label htmlFor="phoneNumber">Phone Number</label>
                  
                  {formik.errors.phoneNumber&&formik.touched.phoneNumber?<div className='formErrorAlert'>{formik.errors.phoneNumber}</div>:null}
                </div>


                <div className={ncStyle.inputBox}>
                  <input type="text" 
                  name="email" value={formik.email} 
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   id="email" required />
                  <label htmlFor="email">Email</label>
                  {formik.errors.email&&formik.touched.email?<div className='formErrorAlert'>{formik.errors.email}</div>:null}

                </div>

                <div className={ncStyle.inputBox}>
                  <input type="password" name="password" value={formik.password} onChange={formik.handleChange} onBlur={formik.handleBlur} id="password" required />
                  <label htmlFor="password">New Password</label>
                  {formik.errors.password && formik.touched.password ?<div className='formErrorAlert'>{formik.errors.password}</div>:null}

                </div>

                <div className={ncStyle.inputBox}>
                  <input type="password" name="cPassword" value={formik.cPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} id="cPassword" required />
                  <label htmlFor="cPassword">Confirm Password</label>

                  {formik.errors.cPassword && formik.touched.cPassword ?<div className='formErrorAlert'>{formik.errors.cPassword}</div>:null}

                </div>




                <div className={ncStyle.links}> <Link to="/login">Already have Account?</Link>
                </div>
                <div className={ncStyle.inputBox}>
                  <input type="submit" value="Add New Company"  />
                </div>

              </form>

            </div>
          </div>
        </section>





      </div>
    </>
  )
}

export default NewCompany