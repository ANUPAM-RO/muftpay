import axios from "axios";
import { useState } from "react";
import { errorToast, successToast } from "../components/Toast";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCpassword, setShowCpassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleCPasswordVisibility = () => {
    setShowCpassword(!showCpassword);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!userName || !email || !phone || !password) {
      return errorToast("Fill all the fields");
    }
    if (password !== confirmPassword) {
      return errorToast("password and confirm password not same");
    }
    if (password.length > 8) {
      return errorToast("password atleast 8 characters");
    }
    if (!isChecked) {
      return errorToast("Please Agree to Privacy policy & terms");
    }
    const formData = {
      name: userName,
      phone,
      email,
      password,
    };
    console.log(formData);
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        "https://pu4pz7ueab.execute-api.ap-south-1.amazonaws.com/dev/api/admin/registration",
        formData,
        headers
      );
      successToast("Register Successfully");
      navigate("/");
      setUserName("");
      setPhone("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setIsChecked(false);
    } catch (error) {
      console.log(error);
      errorToast(error.message);
      return error;
    }
  };
  return {
    userName,
    setUserName,
    phone,
    setPhone,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    showPassword,
    isChecked,
    showCpassword,
    setIsChecked,
    setConfirmPassword,
    togglePasswordVisibility,
    toggleCPasswordVisibility,
    handleCheckboxChange,
    handleRegister,
  };
};

export default useRegister;
