import React from 'react'
// @ts-ignore
import regStyle from './Register.module.css'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <>
    
      <div className={regStyle.registerContainer}>
        <section className={regStyle.registerSection}> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />
          <div className={regStyle.signin}>
            <div className={regStyle.content}>
              <h2>Register</h2>

              <div className={regStyle.form}>

                
                <div className={regStyle.inputBox}>
                  <input type="text" name="userName" id="userName" required />
                  <label htmlFor="userName">Name</label>
                </div>
                <div className={regStyle.inputBox}>
                  <input type="text" name="idNumber" id="idNumber" required />
                  <label htmlFor="idNumber">ID Number</label>
                </div>

                <div className={regStyle.inputBox}>
                  <input type="text" name="phoneNumber" id="phoneNumber" required />
                  <label htmlFor="phoneNumber">Phone Number</label>
                </div>


                <div className={regStyle.inputBox}>
                  <input type="text" name="email" id="email" required />
                  <label htmlFor="email">Email</label>
                </div>

                <div className={regStyle.inputBox}>
                  <input type="password" name="password" id="password" required />
                  <label htmlFor="password">New Password</label>
                </div>

                <div className={regStyle.inputBox}>
                  <input type="password" name="cPassword" id="cPassword" required />
                  <label htmlFor="cPassword">Confirm Password</label>
                </div>




                {/* */}
                <div className={regStyle.links}> <Link to="/login">Already have Account?</Link>
                </div>
                <div className={regStyle.inputBox}>
                  <input type="submit" value="Sign Up" defaultValue="Sign Up" />
                </div>
              </div>
            </div>
          </div>
        </section>





      </div>
    </>
  )
}

export default Register