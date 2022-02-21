import PropTypes from 'prop-types';
import React from 'react';
import logo from '../images/whiteLogo.png';

export default function LoginBox(props) {
  const {
    handleEmail,
    handlePassword,
    handleLogin,
    emailIsValid,
    passwordIsValid,
  } = props;

  return (
    <div className="loginBox">
      <img src={logo} alt="logo" className="logo" />
      <div className="loginWrapper">
        <div>
          <div className="label">Email</div>
          <input
            type="email"
            onChange={handleEmail}
            className="inputLogin"
            defaultValue="tester@southsystem.com"
          ></input>
        </div>

        <div>
          <div className="label">Senha</div>
          <input
            type="password"
            onChange={handlePassword}
            className="inputLogin"
            autoComplete="off"
            defaultValue="123456"
          ></input>
        </div>
        <button
          disabled={!(emailIsValid && passwordIsValid)}
          onClick={handleLogin}
          className="buttonLogin"
        >
          Entrar
        </button>
      </div>
      <div className="developedWrapper">
        <p className="developed">Desenvolvido por</p>
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/leonardohenriquemachado/"
          target="_blank"
          rel="noreferrer"
        >
          Leonardo Henrique
        </a>
        <a
          href="https://github.com/leonardohenriquedev/desafioSouthSystem/pull/1"
          target="_blank"
          rel="noreferrer"
          className="repository"
        >
          Repositório 📦
        </a>
      </div>
    </div>
  );
}

LoginBox.propTypes = {
  emailIsValid: PropTypes.bool,
  handleEmail: PropTypes.func,
  handleLogin: PropTypes.func,
  handlePassword: PropTypes.func,
  passwordIsValid: PropTypes.bool,
}.isRequired;
