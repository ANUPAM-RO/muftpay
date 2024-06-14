import React, { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";

const useUsers = () => {
  const [users, setAllUsers] = useState([]);

  const loadAllUserdata = async () => {
    const data = await fetchApiData(
      "https://pu4pz7ueab.execute-api.ap-south-1.amazonaws.com/dev/api/user/getAll"
    );
    setAllUsers(data);

  };

  useEffect(() => {
    loadAllUserdata();
  }, []);
  return { users };
};

export default useUsers;
