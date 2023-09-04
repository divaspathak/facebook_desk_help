import React from 'react';
import { Link } from 'react-router-dom';
import {LoginSocialFacebook} from "reactjs-social-login"
import { FacebookLoginButton } from 'react-social-login-buttons';


const Dashboard = () => {
    return (
      <div className='FirstPage'>
        <div className='Pageintegration'>
          <div className='Home'>
            <div className='create'>Facebook Page Integration</div>
            <LoginSocialFacebook
              appId='851267589430189'
              onResolve={(response) => {
                console.log(response);
              }}
              onReject={(error) => {
                console.log(error);
              }}
            >
              <FacebookLoginButton />
            </LoginSocialFacebook>
          </div>
          <div className='inputs'>
            {/* Add your additional content here */}
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  