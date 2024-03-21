import React, { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";

const useSupport = () => {
  const [support, setSupport] = useState([]);

  const loadAllSupportdata = async () => {
    const data = await fetchApiData(
      "https://pu4pz7ueab.execute-api.ap-south-1.amazonaws.com/dev/api/user/help-and-support"
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
