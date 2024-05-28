/* eslint-disable no-undef */
/* eslint-disable default-case */
import React, { useState } from "react";
import "./CSS/LoginSignup.css";
import { useNavigate } from "react-router-dom";

const INITIAL_USER_INFO = {
  name: "",
  lastName: "",
  email: "",
  userName: "",
  password: "",
};

const Signup = (props) => {
  const [userInfo, setUserInfo] = useState(INITIAL_USER_INFO);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const onChangeHandler = (inputType, newValue) => {
    setUserInfo((prev) => ({ ...prev, [inputType]: newValue }));
  };

  const validateForm = () => {
    const { name, lastName, email, userName, password } = userInfo;
    const errors = [];
    if (!name) errors.push("No name");
    if (!lastName) errors.push("No lastname");
    if (!email) errors.push("No email");
    if (!userName) errors.push("No username");
    if (!password) errors.push("No password");

    if (errors.length) alert(errors.join(", "));

    setErrors(errors);
  };

  const registrujSe = async () => {
    validateForm();
    if (errors.length) return;

    await fetch(`https://localhost:7123/api/Login/dodajKorisnika`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then(() => {
        setErrors([]);
        setUserInfo(INITIAL_USER_INFO);
        navigate(`/login`);
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="loginsignup">
      <div className="container-login">
        <h1>Registruj se</h1>
        <div className="fields">
          <input
            type="text"
            placeholder="Ime"
            value={userInfo.name}
            onChange={(e) => onChangeHandler("name", e.target.value)}
          />
          <input
            type="text"
            placeholder="Prezime"
            value={userInfo.lastName}
            onChange={(e) => onChangeHandler("lastName", e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={userInfo.email}
            onChange={(e) => onChangeHandler("email", e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            value={userInfo.userName}
            onChange={(e) => onChangeHandler("userName", e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={userInfo.password}
            onChange={(e) => onChangeHandler("password", e.target.value)}
          />
        </div>
        <button onClick={registrujSe}>Registruj se</button>
        <p className="loginsignup-login">
          Imaš account? <span onClick={() => navigate("/login")}>Prijavi se</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
