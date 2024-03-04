import React, { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";

const useSupport = () => {
  const [support, setSupport] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTllM2M4NTY3NGZjYjNjMTMyMzk0YTQiLCJpYXQiOjE3MDQ4NjkyODIsImV4cCI6MTczNjQwNTI4Mn0.VawfDPWR3KZNQJPQLbH7S-v2BciCqZ56c4K8BJTAoa4";
  const loadAllSupportdata = async () => {
    const data = await fetchApiData(
      "https://pu4pz7ueab.execute-api.ap-south-1.amazonaws.com/dev/api/user/help-and-support",
      token
    );
    setSupport(data?.data);
    console.log(data);
  };

  useEffect(() => {
    loadAllSupportdata();
  }, []);

  return { support };
};

export default useSupport;
