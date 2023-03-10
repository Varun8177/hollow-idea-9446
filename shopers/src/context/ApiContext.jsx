import { useState } from "react";
import { createContext } from "react";
import { useParams } from "react-router-dom";

export const ApiContext = createContext();

export default function ApiContextProvider({ children }) {
  const [api, setApi] = useState("");
  const [category, setEndpoint] = useState("");
  const [email, setEmail] = useState("NA");
  const params = useParams();
  console.log("params", params);

  const handleApi = (val, endpoint) => {
    setApi(val);
    setEndpoint(endpoint);
    sessionStorage.setItem("api", val);
  };
  const handleEmail = (val) => {
    setEmail(val);
  };
  return (
    <ApiContext.Provider value={{ handleApi, api, handleEmail, email }}>
      {children}
    </ApiContext.Provider>
  );
}
