import React, { useState } from 'react';
import styles from './loginForm.module.css';

export enum AuthType {
  Login = 'LOGIN',
  Register = 'REGISTER'
}

interface ILoginForm {
  authType: AuthType;
  onSubmit: (value?: any) => void;
}

const LoginForm: React.FunctionComponent<ILoginForm> = (props: ILoginForm) => {

  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [currentAuthType, setCurrentAuthType] = useState(props.authType);

  const onChangeAuthType =  () => {
    if (currentAuthType === AuthType.Login) {
      setCurrentAuthType(AuthType.Register);
    } else {
      setCurrentAuthType(AuthType.Login);
    }
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    props.onSubmit(false);
  };

  return (
    <div className={styles.loginForm}>
      <div className={styles.headerContainer}>
        <p className={styles.headerTitle}>{currentAuthType === AuthType.Login ? 'WELCOME BACK' : 'SIGN UP'}</p>
        <p className={styles.headerSubtitle}>{currentAuthType === AuthType.Login ?'Log into your account' : 'Create an account to continue'}</p>
      </div>
      <form onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor='emailOrUsername' className={styles.inputLabel}>{currentAuthType === AuthType.Login ? 'Email or Username' : 'Email'}</label>
        <input
          type='text'
          id='emailOrUsername'
          value={emailOrUsername}
          placeholder={currentAuthType === AuthType.Login ? 'Enter your email or username' : 'Enter your email'}
          onChange={(e) => setEmailOrUsername(e.target.value)}
        />
      </div>
      {currentAuthType === AuthType.Register && (
        <div className={styles.formGroup}>
        <label htmlFor='userName' className={styles.inputLabel}>Username</label>
        <input
          type='text'
          id='userName'
          value={userName}
          placeholder='Choose a preferred username'
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      )}
      <div className={styles.formGroup}>
        <div className={styles.passwordLabelContainer}>
          <label htmlFor='password' className={styles.inputLabel}>Password</label>
          {currentAuthType === AuthType.Login && <label htmlFor='password' className={styles.inputLabel}>Forgot password?</label>}
        </div>
        <div className={styles.passwordInputContainer}>
          <input
            type='password'
            id='password'
            value={password}
            placeholder={currentAuthType === AuthType.Login ? 'Enter your password' : 'Choose a strong password'}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={styles.eyeIcon}>👁️</div>
        </div>
      </div>
      <button type="submit" className={styles.loginButton}>{currentAuthType === AuthType.Login ? 'Login Now' : 'Continue'}</button>
      </form>
      <p className={styles.footerText}>{currentAuthType === AuthType.Login ? 'Not registered yet?' : 'Already have an account?'}
      <button className={styles.registerButton} onClick={() => onChangeAuthType()}>{currentAuthType === AuthType.Login ? 'Register →' : 'Login →'}</button></p> 
  </div>
  );
}

export default LoginForm;