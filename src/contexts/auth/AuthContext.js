import { useState, createContext, useEffect, useContext } from "react";
import {
  postUser,
  getUsers,
  getSignUp,
  patchSignUp,
  patchUser,
  deleteUser,
  deleteSignUp,
  postMe,
  fetchMe,
  fetchLogout,
} from "../../network/requests/auth/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const [address, setAddress] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const me = await fetchMe();
        // console.log(me);

        // console.log(me.data);
        me.data.length === 0 ? setLoggedIn(false) : setLoggedIn(true);

        setUser(me.data);
        setCurrentUser(me.data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    })();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
    console.log(response.data);
  };

  const updateSignUp = async (userObj, newUser) => {
    const response = await getSignUp();

    const tempUser = response.data.filter(
      (registerObj) => registerObj.user === userObj.user
    );

    await patchSignUp(tempUser[0].id, newUser);

    getAllUsers();
  }

  const removeUser = async (userObj, userId) => {
    await deleteUser(userId);

    const response = await getSignUp();

    const tempUser = response.data.filter(
      (registerObj) => registerObj.user === userObj.user
    );

    await deleteSignUp(tempUser[0].id);

    getAllUsers();
  };

  const register = async (userData) => {
    const response = await postUser(userData.data);
  };

  const getAddresses = async () => {
    const me = await fetchMe();
    setUser(me.data);
    const response = await getUsers();
    console.log(response.data.filter((userObject) => console.log(me.data)));
    setAddress(
      response.data.filter(
        (userObject) =>
          userObject.mail === me.data[0].user ||
          userObject.user === me.data[0].user
      )[0].addresses
    );
  };

  let updatedUser;

  const editAddress = async (addressesObj, addressObj, addressName) => {
    console.log(addressesObj);
    console.log(Object.keys(addressObj));
    console.log(addressName);
    const index = addressesObj.findIndex(
      (addressObjectItem) => addressObjectItem.addressName === addressName
    );
    console.log("index", index);

    Object.keys(addressObj).every((key, i) =>
      console.log(
        key,
        addressesObj[
          addressesObj.findIndex(
            (addressObjectItem) => addressObjectItem.addressName === addressName
          )
        ][key]
      )
    );

    // Object.keys(addressObj).every((key) => console.log(key));
    Object.keys(addressObj).every(
      (key, i) =>
        (addressesObj[
          addressesObj.findIndex(
            (addressObjectItem) => addressObjectItem.addressName === addressName
          )
        ][key] = addressObj[key])
    );

    const response = await getUsers();
    updatedUser = response.data.filter(
      (userObject) =>
        userObject.mail === user[0].user || userObject.user === user[0].user
    );
    updateUser(updatedUser[0].id, {
      ...updatedUser[0],
      // addresses: [{ address: newAddress }],
      addresses: addressesObj,
    });
    getAddresses();
  };

  const deleteAddress = async (addressObj, addressName) => {
    const index = addressObj.findIndex(
      (addressObjectItem) => addressObjectItem.addressName === addressName
    );

    const newAddressData = [
      ...addressObj.slice(0, index),
      ...addressObj.slice(index + 1),
    ];
    console.log(newAddressData);
    const response = await getUsers();
    updatedUser = response.data.filter(
      (userObject) =>
        userObject.mail === user[0].user || userObject.user === user[0].user
    );
    updateUser(updatedUser[0].id, {
      ...updatedUser[0],
      // addresses: [{ address: newAddress }],
      addresses: newAddressData,
    });
    getAddresses();
  };

  const addressInfo = async (newAddress) => {
    const response = await getUsers();

    // console.log(response.data);
    // console.log(user);

    updatedUser = response.data.filter((userObject) => {
      // console.log(userObject.mail);
      // console.log(userObject.user);
      // console.log(user[0].user);
      return (
        userObject.mail === user[0].user || userObject.user === user[0].user
      );
    });

    // console.log(updatedUser);

    let userId = updatedUser[0].id;
    // console.log(userId);

    if (updatedUser[0].hasOwnProperty("addresses")) {
      // const userAddresses = [ ...updatedUser[0].addresses, {address: newAddress}];
      // console.log(updatedUser[0].addresses);
      updatedUser[0].addresses.forEach((addressObj) => {
        console.log(addressObj.addressName);
      });
      var isValidMail = updatedUser[0].addresses.some(function (addressObj) {
        return addressObj.addressName === newAddress.addressName;
      });

      if (isValidMail) {
        console.log(newAddress.addressName);
        console.log("nooo");
        alert("address name already used");
      } else {
        console.log("yes");
        updateUser(userId, {
          ...updatedUser[0],
          // addresses: [{ ...updatedUser[0].addresses, address: newAddress }],
          // addresses: [ ...updatedUser[0].addresses, {address: newAddress}],
          addresses: [...updatedUser[0].addresses, newAddress],
        });
      }

      /*  updateUser(userId, {
        ...updatedUser[0],
        // addresses: [{ ...updatedUser[0].addresses, address: newAddress }],
        // addresses: [ ...updatedUser[0].addresses, {address: newAddress}],
        addresses: [...updatedUser[0].addresses, newAddress],
      }); */
    } else {
      // const addressValue = [address: newAddress];
      // updateUser(userId, { ...updatedUser[0], addresses: [newAddress] });
      updateUser(userId, {
        ...updatedUser[0],
        // addresses: [{ address: newAddress }],
        addresses: [newAddress],
      });
    }
    // setSize((prevSize) => [...prevSize, e.target.value]);

    // updateUser(userId, { ...updatedUser[0], addresses: [newAddress] });
  };

  const updateUser = async (updatedUserId, updatedUserObject) => {
    console.log(updatedUserId);
    console.log(updatedUserObject);
    await patchUser(updatedUserId, updatedUserObject);
  };

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
    users,
    getAllUsers,
    updateUser,
    updateSignUp,
    removeUser,
    register,
    login,
    logout,
    currentUser,
    setCurrentUser,
    addressInfo,
    getAddresses,
    editAddress,
    deleteAddress,
    address,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
