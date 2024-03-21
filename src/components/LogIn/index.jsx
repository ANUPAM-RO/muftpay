import "./login.css";

import Form from "../common/Form";
import useLogin from "../../hooks/useLogin";
const LogIn = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    isChecked,
    togglePasswordVisibility,
    handleCheckboxChange,
    handleLogin,
  } = useLogin();
  return (
    <div className="loginContainer">
      <Form
        isLogin={true}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        isChecked={isChecked}
        togglePasswordVisibility={togglePasswordVisibility}
        handleCheckboxChange={handleCheckboxChange}
        handleLogin={handleLogin}
      />
    </div>
  );
};

export default LogIn;
