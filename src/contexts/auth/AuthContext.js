import { createContext, useContext, useState } from "react";
import { postUser } from "../../network/requests/auth/register";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  console.log("Auth", auth);
  /* const addUser = async () => {
    const response = await postUser(user);
    console.log("Reponse: " + response);
  };

  const values = { user, setUser, addUser };
 */
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

/* 
export const useAuth = () => {
    const { auth } = useContext(AuthContext);
    useDebugValue(auth, auth => auth?.user ? "Logged In" : "Logged Out")*/
