import React from "react";
import Form from "../common/Form";
import "../LogIn/login.css";
import useRegister from "../../hooks/useRegister";
const Register = () => {
  const {
    userName,
    setUserName,
    phone,
    setPhone,
    password,
    setPassword,
    confirmPassword,
    showPassword,
    email,
    setEmail,
    isChecked,
    showCpassword,
    setConfirmPassword,
    togglePasswordVisibility,
    toggleCPasswordVisibility,
    handleCheckboxChange,
    handleRegister,
  } = useRegister();
  return (
    <div className="registerContainer">
      <img src="./Group 48096235.svg" alt="" className="mx-10 my-6" />
      <Form
        isLogin={false}
        userName={userName}
        setUserName={setUserName}
        email={email}
        setEmail={setEmail}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        toggleCPasswordVisibility={toggleCPasswordVisibility}
        phone={phone}
        setPhone={setPhone}
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        showCpassword={showCpassword}
        isChecked={isChecked}
        togglePasswordVisibility={togglePasswordVisibility}
        handleCheckboxChange={handleCheckboxChange}
        handleRegister={handleRegister}
      />
    </div>
  );
};

export default Register;
