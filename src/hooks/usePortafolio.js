import { useEffect, useState } from "react";
import { usersApi } from "@servicesApis/users";

export const usePortafolio = () => {
  const [portafolio, setPortafolio] = useState({
    name: {},
    picture: {},
  });
  let API = process.env.API_Portafolio;

  useEffect(() => {
    getPortafolio();
  }, []);

  const getPortafolio = async () => {
    const resp = await usersApi.get(`${API}`);
    //console.log(resp.data.results[0]);
    setPortafolio(resp.data.results[0]);
  };

  return {
    portafolio,
  };
};
