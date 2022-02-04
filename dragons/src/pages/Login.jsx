import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginBox from '../components/LoginBox';
import DragonsContext from '../Context/DragonsContext';
import dragon from '../images/dragon.png';

import '../styles/Login.css';

export default function Login() {
  const { userEmail, userPassword, setLogged } = useContext(DragonsContext);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setpasswordIsValid] = useState(false);

  function handleEmail({ target: { value } }) {
    if (value === userEmail) {
      setEmailIsValid(true);
    } else setEmailIsValid(false);
  }

  function handlePassword({ target: { value } }) {
    if (value === userPassword) {
      setpasswordIsValid(true);
    } else setpasswordIsValid(false);
  }

  const { push } = useHistory();
  function handleLogin() {
    localStorage.setItem('logged', true);
    push('/dragons');
  }

  return (
    <div className="loginPage">
      <LoginBox
        handleEmail={handleEmail}
        handlePassword={handlePassword}
        handleLogin={handleLogin}
        emailIsValid={emailIsValid}
        passwordIsValid={passwordIsValid}
      />
      <div className="imageBox">
        <img src={dragon} alt="dragon" className="dragonLogin"></img>
      </div>
    </div>
  );
}
