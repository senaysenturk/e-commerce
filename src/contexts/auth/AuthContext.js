import { createContext, useContext, useState } from "react";
import { postUser } from "../../network/requests/auth/register";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  console.log("User", user);
  const addUser = async () => {
    const response = await postUser(user);
    console.log("Reponse: " + response);
  };

  const values = { user, setUser, addUser };

  return (
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  );
};
