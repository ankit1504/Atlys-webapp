/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm, { AuthType } from '../../components/loginForm';
import './styles.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('./feed');
  };

  return (
      <div className='login-page'>
          <img src={require('../../assets/logo.png')} className='logo-container'/>
          <LoginForm authType={AuthType.Login} onSubmit={handleSubmit}/>
      </div>
  );
}

export default LoginPage;