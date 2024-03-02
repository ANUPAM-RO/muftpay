import React, { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";

const useUsers = () => {
  const [users, setAllUsers] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTllM2M4NTY3NGZjYjNjMTMyMzk0YTQiLCJpYXQiOjE3MDQ4NjkyODIsImV4cCI6MTczNjQwNTI4Mn0.VawfDPWR3KZNQJPQLbH7S-v2BciCqZ56c4K8BJTAoa4";
  const loadAllUserdata = async () => {
    const data = await fetchApiData(
      "https://pu4pz7ueab.execute-api.ap-south-1.amazonaws.com/dev/api/user/getAll",
      token
    );
    setAllUsers(data);
    console.log(data);
  };

  useEffect(() => {
    loadAllUserdata();
  }, []);
  return { users };
};

export default useUsers;
