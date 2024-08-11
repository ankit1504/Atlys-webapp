import React from 'react';
import LoginForm, { AuthType } from '../loginForm';
import './styles.css';

interface ILoginModal {
  authType: AuthType;
  setShowLoginForm: (value: boolean) => void;
}

const LoginModal: React.FunctionComponent<ILoginModal> = (props: ILoginModal) => {

  const handleBackdropClick = (e: { target: any; currentTarget: any; }) => {
    if (e.target === e.currentTarget) {
      props.setShowLoginForm(false);
    }
  };
  
  const onClose = () => {
    props.setShowLoginForm(false);
  }
    
  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
        <LoginForm authType={props.authType} onSubmit={props.setShowLoginForm} onClose={onClose}/>
    </div>
  );
}

export default LoginModal;