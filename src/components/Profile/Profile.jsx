import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext, defaultUserState } from "../../contexts/user-context";
import mainApi from "../../utils/MainApi";
import Header from "../Header/Header";

function Profile() {
  const { userState, setUserState } = useContext(CurrentUserContext);
  const { name, email } = userState;
  const [form, setForm] = useState({ name, email });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleLogout() {
    mainApi
      .logout()
      .then((msg) => {
        setUserState({ ...defaultUserState, loggedIn: false });
        console.log(defaultUserState)
      })
      .catch(console.log);
  }

  return (
    <section className="profile">
      <Header />
      <h1 className="profile__heading">Привет, {name}!</h1>
      <form className="profile__form">
        <div className="profile__inputs">
          <label className="profile__input-name">Имя</label>
          <input
            className="profile__input"
            required
            type="text"
            name="name"
            onChange={handleChange}
            value={form.name}
          />
        </div>
        <div className="profile__inputs">
          <label className="profile__input-name">E-mail</label>
          <input
            className="profile__input"
            required
            type="text"
            name="email"
            onChange={handleChange}
            value={form.email}
          />
        </div>
        <button className="profile__submitBtn-edit" type="submit">
          Редактировать
        </button>
      </form>
      <Link to="/signin">
        <button className="profile__submitBtn-logout" onClick={handleLogout}>
          Выйти из аккаунта
        </button>
      </Link>
    </section>
  );
}

export default Profile;
