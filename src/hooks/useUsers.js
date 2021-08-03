import { useEffect, useState } from "react";
import { usersApi } from "@servicesApis/users";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  let API = process.env.API_Users;

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const resp = await usersApi.get(`${API}/users`);
    console.log(resp.data.data);
    setUsers(resp.data.data);
  };

  return {
    users,
  };
};
