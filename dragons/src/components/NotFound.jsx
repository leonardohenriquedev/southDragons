import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/NotFound.css';
import signIn from '../images/login.png';

export default function NotFound() {
  const { push } = useHistory();
  function login() {
    push('/');
  }
  return (
    <div className="notFoundBox">
      <img src={signIn} className="signIn" alt="you must be logged in" />
      <p className="mustBeLoggedIn">
        Você precisa estar logado para ver os dragoes!
      </p>
      <button className="buttonLogin" onClick={login}>
        Fazer Login
      </button>
    </div>
  );
}
