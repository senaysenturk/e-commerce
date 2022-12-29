import { createContext, useContext, useState } from "react";
import { postUser } from "../../network/requests/auth/register";

import DataContext from './DataContext';
import authReducer from '../../reducers/auth/AuthReducer';
import { signUp, signIn, setCurrentUser } from '../../actions/auth';

export const initialState = {
  user: null,
  isAuthenticated: false,
  signUpErr: "",
  signInErr: "",
};

export const { Context, Provider } = DataContext(
  authReducer,
  { signUp, signIn, setCurrentUser },
  initialState
);

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

export const useAuth = () => useContext(AuthContext);
