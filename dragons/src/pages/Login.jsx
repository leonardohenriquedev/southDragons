import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import DragonsContext from '../Context/DragonsContext';

import LoginBox from '../components/LoginBox';
import { playMusic } from '../services/HandleMusic';

import '../styles/Login.css';
import dragon from '../images/dragon.png';

export default function Login() {
  const { setMusic } = useContext(DragonsContext);
  const [email, setEmail] = useState('tester@southsystem.com');
  const [password, setPassword] = useState('123456');

  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setpasswordIsValid] = useState(false);

  function handleEmail({ target: { value } }) {
    setEmail(value);
  }

  function handlePassword({ target: { value } }) {
    setPassword(value);
  }

  useEffect(() => {
    if (email === localStorage.getItem('userEmail')) {
      setEmailIsValid(true);
    } else setEmailIsValid(false);
  }, [email]);

  useEffect(() => {
    if (password === localStorage.getItem('password')) {
      setpasswordIsValid(true);
    } else setpasswordIsValid(false);
  }, [password]);

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
