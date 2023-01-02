import { useState, createContext, useEffect, useContext } from "react";
import { postUser, getUsers, postMe, fetchMe, fetchLogout } from "../../network/requests/auth/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    (async () => {
      try {
        const me = await fetchMe();
        console.log(me);

        console.log(me.data);
        (me.data.length === 0) ? setLoggedIn(false) : setLoggedIn(true);

        setUser(me.data);
        setCurrentUser(me.data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    })();
  }, []);

  const register = async (userData) => {
    await postUser(userData.data);
  }

  const AddAddress = async () => {
    const users = await getUsers();

    const id = users.filter(
      (userObject) => userObject.mail === user.user || userObject.user === user.user
    );
    console.log(id);
  }

  const login = async (userData) => {
    setLoggedIn(true);
    setUser(userData.data);
    // setCurrentUser(userData.data);
    console.log(userData.data);

    await postMe(userData.data);

    localStorage.setItem("access-token", userData.accessToken);
    localStorage.setItem("refresh-token", userData.refreshToken);
  };

  const logout = async (callback) => {
    setLoggedIn(false);
    setUser(null);

    const id = currentUser[0].id;
    setCurrentUser(null);

    await fetchLogout(id);

    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");

    callback();
  };

  const values = {
    loggedIn,
    user,
    register,
    login,
    logout,
    currentUser,
    setCurrentUser,
  };

  /* if (loading) {
		return (
			<Flex justifyContent="center" alignItems="center" height="100vh">
				<Spinner
					thickness="4px"
					speed="0.65s"
					emptyColor="gray.200"
					size="xl"
					color="red.500"
				/>
			</Flex>
		);
	} */

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
