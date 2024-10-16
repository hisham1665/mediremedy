import React from 'react'

function Login() {
  return (
    <div className='grid justify-center' >
      <div class="login_form">
     Login form container 
    <form action="#">
      <h3>Log in with</h3>
      <div class="login_option">
         Google button 
        <div class="option">
          <a href="#">
            <img src="logos/google.png" alt="Google" />
            <span>Google</span>
          </a>
        </div>
         Apple button 
        <div class="option">
          <a href="#">
            <img src="logos/apple.png" alt="Apple" />
            <span>Apple</span>
          </a>
        </div>
      </div>
       Login option separator 
      <p class="separator">
        <span>or</span>
      </p>
       Email input box 
      <div class="input_box">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter email address" required />
      </div>
       Paswwrod input box 
      <div class="input_box">
        <div class="password_title">
          <label for="password">Password</label>
          <a href="#">Forgot Password?</a>
        </div>
        <input type="password" id="password" placeholder="Enter your password" required />
      </div>
        Login button 
      <button type="submit">Log In</button>
      <p class="sign_up">Don't have an account? <a href="signup.html">Sign up</a></p>
    </form>
  </div>
    </div>
  )
}

export default Login