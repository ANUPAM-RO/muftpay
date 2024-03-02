import React, { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";

const useTransaction = () => {
  const [transaction, setAllTrans] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTllM2M4NTY3NGZjYjNjMTMyMzk0YTQiLCJpYXQiOjE3MDQ4NjkyODIsImV4cCI6MTczNjQwNTI4Mn0.VawfDPWR3KZNQJPQLbH7S-v2BciCqZ56c4K8BJTAoa4";

  const loadTransactiondata = async () => {
    const data = await fetchApiData(
      "https://pu4pz7ueab.execute-api.ap-south-1.amazonaws.com/dev/api/user/wallet/transactions",
      token
    );
    console.log(data);
    const newRatingArr = [];
    for (let i = 0; i < data?.transactions?.length; i++) {
      const userData = await loadSingleUserdata(data?.transactions?.[i].userId);
      newRatingArr.push({ ...data?.transactions?.[i], ...userData });
    }
    setAllTrans(newRatingArr);
  };

  const loadSingleUserdata = async (userId) => {
    const data = await fetchApiData(
      `https://pu4pz7ueab.execute-api.ap-south-1.amazonaws.com/dev/api/user/byId/${userId}`,
      token
    );
    console.log(data);
    return data;
  };

  useEffect(() => {
    loadTransactiondata();
  }, []);
  return { transaction };
};

export default useTransaction;
