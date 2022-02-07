import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import DragonsContext from '../Context/DragonsContext';

import LoginBox from '../components/LoginBox';
import { playMusic } from '../services/HandleMusic';

import '../styles/Login.css';
import dragon from '../images/dragon.png';

export default function Login() {
  const { setMusic } = useContext(DragonsContext);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setpasswordIsValid] = useState(false);

  function handleEmail({ target: { value } }) {
    if (value === localStorage.getItem('userEmail')) {
      setEmailIsValid(true);
    } else setEmailIsValid(false);
  }

  function handlePassword({ target: { value } }) {
    if (value === localStorage.getItem('password')) {
      setpasswordIsValid(true);
    } else setpasswordIsValid(false);
  }

  const { push } = useHistory();
  function handleLogin() {
    playMusic();
    setMusic(true);

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
