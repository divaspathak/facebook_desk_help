import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {Navigate} from "react-router-dom"

function LogIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    try {
      const response = await fetch("http://localhost:4500/login", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.status === 200) {
        console.log("Yes");
        // Redirect to the dashboard or another page on successful login
        return <Navigate to = "/dashboard" />
      } else {
        // Handle login failure (e.g., show an error message to the user)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='FirstPage'>
        <div className='LogIn'>
          <div className='Home'>
            <div className='create'>Log In to your account</div>

            <div className='inputs'>
              <div className='Email'>
                <div>Email</div>
                <input
                  type="email"
                  className='email-input'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className='Password'>
                <div>Password</div>
                <input
                  type="password"
                  className='password-input'
                  name='password'
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>

              <div className='RememberMe'>
                <input type="checkbox" />
                <div>Remember Me</div>
              </div>

              <button type='submit' className="button">Log In</button>

              <div className='account-present'>
                New to MyApp? <Link to={"/"}>SignUp</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LogIn;
