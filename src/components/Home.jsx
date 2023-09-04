import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = this.state;
    console.log(name, email, password);
    fetch("http://localhost:4500/", {
        method: "POST", 
        crossDomain: true, 
        headers:{
            "Content-Type": "application/json", 
            Accept: "application/json", 
            "Access-Control-Allow-Origin": "*",
        },
        body:JSON.stringify({
            name, 
            email, 
            password, 
        }), 
    }).then((res) => res.json())
    .then((data) =>{
        console.log(data, "userRegister"); 
    }); 
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='FirstPage'>
          <div className='FirstPageParent'>
            <div className='Home'>
              <div className='create'>Create Account</div>
              <div className='inputs'>
                <div className='YourName'>
                  <div>Name</div>
                  <input
                    type='text'
                    className='name-input'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleInputChange.bind(this)}
                  />
                </div>
                <div className='Email'>
                  <div>Email</div>
                  <input
                    type='email'
                    className='email-input'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleInputChange.bind(this)}
                  />
                </div>
                <div className='Password'>
                  <div>Password</div>
                  <input
                    type='password'
                    className='password-input'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleInputChange.bind(this)}
                  />
                </div>
                <div className='RememberMe'>
                  <input type='checkbox' />
                  <div>Remember Me</div>
                </div>
                <button type='submit' className='button'>
                  SignUp
                </button>
                <div className='account-present'>
                  Already have an account? <Link to={'/login'}>Login </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Home;
