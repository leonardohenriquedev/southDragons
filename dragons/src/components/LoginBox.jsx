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
          ></input>
        </div>

        <div>
          <div className="label">Senha</div>
          <input
            type="password"
            onChange={handlePassword}
            className="inputLogin"
            autoComplete="off"
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
          Repositorio
        </a>
      </div>
    </div>
  );
}
