import { useState } from "react";
import { createApiData } from "../utiils";
import { successToast } from "../components/Toast";

const useChangePass = () => {
  const [currentPassword , setCurrentPassword] = useState("")
  const [newPassword , setNewPassword] = useState("")


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
        currentPassword,newPassword
    };
  
    try {
      const response = await createApiData(
        "https://pu4pz7ueab.execute-api.ap-south-1.amazonaws.com/dev/api/admin/changePassword",
        formData
      )
    successToast('Change Password Successfully')
    setCurrentPassword('')
    setNewPassword('')
    } catch (error) {
      console.log(error);

      return error;
    }
  };

  return { currentPassword, setCurrentPassword,newPassword, setNewPassword, handleSubmit  };
};

export default useChangePass;