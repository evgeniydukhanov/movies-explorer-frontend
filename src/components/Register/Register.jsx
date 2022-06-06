import React from "react";
import { Link } from "react-router-dom";

function Register(props) {
  return (
    <section className="auth">
      <h2 className="auth__heading">Регистрация</h2>
      <form className="auth__form">
        <input
          className="auth__input"
          required
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          className="auth__input"
          required
          type="password"
          name="password"
          placeholder="Пароль"
          minLength="8"
          maxLength="16"
        />
        <button className="auth__submit" type="submit">
          {props.buttonText}
        </button>
      </form>
      <Link to="/sign-in" className="auth__redirectLink">
        Уже зарегистрированы? Войти
      </Link>
    </section>
  );
}

export default Register;