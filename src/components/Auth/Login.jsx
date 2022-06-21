import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/user-context";
import logo from "../../images/logo.svg";
import mainApi from "../../utils/MainApi";
import InfoToolTip from "../InfoTooltip/InfoTooltip";

function Login() {
  const { userState, setUserState } = useContext(CurrentUserContext);
  const [validation, setValidation] = useState({
    email: { message: "" },
    password: { message: "" },
  });
  const [form, setForm] = useState({ email: "", password: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    mainApi
      .login(form)
      .then((user) => {
        if (user.token) {
          setUserState({ ...userState, loggedIn: true });
        }
      })
      .catch(console.log);
  }

  useEffect(() => {
    if (userState.loggedIn) history.push("/");
  }, [userState.loggedIn]);

  return (
    <section className="auth">
      <Link className="auth__goHome" to="/">
        <img
          className="header__logo header__logo_auth"
          src={logo}
          alt="Логотип"
        ></img>
      </Link>
      <h1 className="auth__heading">Рады видеть!</h1>
      <form className="auth__form" onSubmit={handleSubmit}>
        <p className="auth__input-name">E-mail</p>
        <input
          className="auth__input"
          required
          type="text"
          name="email"
          onChange={handleChange}
          value={form.email}
        />
        <p className="auth__input-name">Пароль</p>
        <input
          className="auth__input"
          required
          type="password"
          name="password"
          minLength="3"
          maxLength="16"
          onChange={handleChange}
          value={form.password}
        />
        <button className="auth__submitBtn auth__submitBtn_login" type="submit">
          Войти
        </button>
      </form>
      <div className="auth__redirect">
        <p className="auth__redirect-text">Еще не зарегистрированы?</p>
        <Link to="/signup" className="auth__redirect-link">
          Регистрация
        </Link>
      </div>
      <InfoToolTip />
    </section>
  );
}

export default Login;
