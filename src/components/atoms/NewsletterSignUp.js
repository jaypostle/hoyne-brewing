import React from 'react'

function NewsletterSignUp() {
  return (
    <form className="newsletter-form" action="">
      <div className="container">
      {/* <h1>Sign Up</h1> */}
      <p>We’d love to stay in touch. Sign up for all the latest Hoyne happenings here:</p>
      </div>
      {/* <label for="email"><b>Email</b></label> */}
    <div className="form-element-wrapper">
      <input type="text" placeholder="Enter Email" name="email" required></input>
      <button type="submit" class="signupbtn">Sign Up</button>
    </div>
    </form>
  )
}

export default NewsletterSignUp