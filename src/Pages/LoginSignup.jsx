import React, { useState } from "react";
import "./CSS/LoginSignup.css";
import { useNavigate } from "react-router-dom";

const INITIAL_USER_INFO = {
  firstName: "",
  lastName: "",
  email: "",
  userName: "",
  passwordHash: "",
};

const Signup = (props) => {
  const [userInfo, setUserInfo] = useState(INITIAL_USER_INFO);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const onChangeHandler = (inputType, newValue) => {
    setUserInfo((prev) => ({ ...prev, [inputType]: newValue }));
  };

  const validateForm = () => {
    const { firstName, lastName, email, userName, passwordHash } = userInfo;
    const errors = [];
    if (!firstName) errors.push("No name");
    if (!lastName) errors.push("No lastname");
    if (!email) errors.push("No email");
    if (!userName) errors.push("No username");
    if (!passwordHash) errors.push("No password");

    if (errors.length) {
      alert(errors.join(", "));
      setErrors(errors); // Set errors state to show errors in UI
    } else {
      setErrors([]); // Clear errors state if no errors
    }
  };

  const registrujSe = async () => {
    validateForm();
    if (errors.length) return; // Stop registration if there are errors

    try {
      const response = await fetch(`https://localhost:7123/api/Login/DodajKorisnika`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo)
      });

      if (response.ok) {
        alert("Korisnik uspješno registrovan!");
        setUserInfo(INITIAL_USER_INFO); // Reset form fields after successful registration
        navigate(`/login`); // Redirect to login page after registration
      } else {
        alert("Neuspješna registracija. Molimo pokušajte ponovo.");
      }
    } catch (error) {
      console.error("Greška prilikom registracije:", error);
      alert("Greška prilikom registracije. Molimo pokušajte ponovo.");
    }
  };

  return (
    <div className="loginsignup">
      <div className="container-login">
        <h1>Registruj se</h1>
        <div className="fields">
          <input
            type="text"
            placeholder="Ime"
            value={userInfo.firstName}
            onChange={(e) => onChangeHandler("firstName", e.target.value)}
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
            value={userInfo.passwordHash}
            onChange={(e) => onChangeHandler("passwordHash", e.target.value)}
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
