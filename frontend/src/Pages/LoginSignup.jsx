import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
    return(
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign up</h1>
                <div className="loginsignuo-fileds">
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Email address' />
                    <input type="password" placeholder='Password' />
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
                <div className="loginsignup-agreee">
                    <input type="checkbox" name='' id='' />
                    <p>
                        By continuing,I agree to the terms of use & privacu policy
                    </p>
                </div>
                <div className="kali">
                    <p> Good</p>
                </div>

            </div>
            

        </div>
    )
}
export default LoginSignup