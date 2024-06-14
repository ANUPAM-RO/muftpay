import React, { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";

const useTransaction = () => {
  const [transaction, setAllTrans] = useState([]);


  const loadTransactiondata = async () => {
    const data = await fetchApiData(
      "https://pu4pz7ueab.execute-api.ap-south-1.amazonaws.com/dev/api/user/send-money/history/all"
     
    );
   
    setAllTrans(data?.data);
  };

  const handleFilter = async (month) => {
    const searchData = await fetchApiData(`https://pu4pz7ueab.execute-api.ap-south-1.amazonaws.com/dev/api/user/filter-transactions?month=${month}&type=transfer`);
    setAllTrans(searchData?.data);
  }


  useEffect(() => {
    loadTransactiondata();
  }, []);
  return { transaction , handleFilter};
};

export default useTransaction;
