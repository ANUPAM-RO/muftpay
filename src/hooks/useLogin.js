import axios from "axios";
import { useEffect, useState } from "react";
import { errorToast, successToast } from "../components/Toast";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  console.log(user, profile);

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      return errorToast("Fill all the fields");
    }

    const formData = {
      email,
      password,
    };
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "https://pu4pz7ueab.execute-api.ap-south-1.amazonaws.com/dev/api/admin/login",
        formData,
        headers
      );
      successToast("LogIn Successfully");
      sessionStorage.setItem("token", response?.data?.accessToken);
      navigate("/dashboard");
      console.log(response?.data?.token);
    } catch (error) {
      console.log(error);
      errorToast("Wrong email or password");
      return error;
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isChecked,
    setIsChecked,
    showPassword,
    setShowPassword,
    togglePasswordVisibility,
    handleCheckboxChange,
    handleLogin,
  };
};

export default useLogin;
