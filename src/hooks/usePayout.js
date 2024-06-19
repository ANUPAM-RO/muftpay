import React, { useEffect, useState } from "react";
import { createApiData, fetchApiData, updateApiData } from "../utiils";

const usePayout = ({ setSuccess1 = false , transId}) => {
  const [recipientName, setRecipientName] = useState("");
  const [recipientAccountNumber, setRecipientAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [recipientIFSC, setRecipientIFSC] = useState("");
  const [amount, setAmount] = useState("");
  const [invoiceData, setInvoiceData] = useState([]);
  const [filter, setFilter] = useState("");

  const [allPayouts, setAllPayouts] = useState([]);

  const loadAllUserdata = async () => {
    const data = await fetchApiData(
      "https://pu4pz7ueab.execute-api.ap-south-1.amazonaws.com/dev/api/user/send-money/history/all"
    );
    setAllPayouts(data?.data);
    console.log(data?.data);
    const filterData = data?.data?.filter((d) => d?.status === "Completed");
    setInvoiceData(filterData);
  };

  const handleFilterChange = async (e) => {
    const month = e.target.value;
    setFilter(e.target.value);
    const data = await fetchApiData(
      `https://pu4pz7ueab.execute-api.ap-south-1.amazonaws.com/dev/api/user/SendMoney/filter-transactions?month=${month}`
    );
    setAllPayouts(data?.data);
  };
  console.log(recipientName)
  const handleSubmit = async (event) => {
    event.preventDefault();
   
   
    const formData = {status: "Completed"}

    try {
      const response = await updateApiData(
        `https://pu4pz7ueab.execute-api.ap-south-1.amazonaws.com/dev//api/user/transactions/${transId}/status`,
        formData
      );
      setSuccess1(true)
      await loadAllUserdata()
      
    } catch (error) {
      console.log(error);

      return error;
    }
  };
  const handleStatus = async (id) => {
    const formData = {
      status: "Completed",
    };

    try {
      const response = await updateApiData(
        `https://pu4pz7ueab.execute-api.ap-south-1.amazonaws.com/dev/api/user/transactions/${id}/status`,
        formData
      );
      await loadAllUserdata();
    } catch (error) {
      console.log(error);

      return error;
    }
  };

  useEffect(() => {
    loadAllUserdata();
  }, []);
  return {
    recipientName,
    setRecipientName,
    recipientAccountNumber,
    setRecipientAccountNumber,
    bankName,
    setBankName,
    recipientIFSC,
    setRecipientIFSC,
    amount,
    setAmount,
    allPayouts,
    invoiceData,
    filter,
    setFilter,
    setAllPayouts,
    handleSubmit,
    handleStatus,
    handleFilterChange,
  };
};

export default usePayout;
