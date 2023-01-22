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
  getUser,
} from "../../network/requests/auth/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  /** @type {[[User]]} */
  const [user, setUser] = useState([{}]);
  const [users, setUsers] = useState(null);
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("userData") !== null
  );
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const [showAdminOptions, setShowAdminOptions] = useState(false);
  const [address, setAddress] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [lastViewed, setLastViewed] = useState([]);
  const [orders, setOrders] = useState([]);
  const [orderAddress, setOrrderAddress] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        getAllUsers();
        setLoggedIn(localStorage.getItem("userData") !== null);
        const userData = JSON.parse(localStorage.getItem("userData"));
        console.log(userData.role === "admin");
        if (userData.role === "admin") {
          setShowAdminOptions(true);
        }
        if (userData.user) {
          const user = await getUser(userData.id);
          setUser([user.data]);
        }
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
  };

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

  const getUserFavorites = async () => {
    const me = await fetchMe();
    // setUser(me.data);
    const response = await getUsers();
    response.data.filter((userObject) => console.log("Me: ", me.data));
    console.log(
      response.data.filter(
        (userObject) =>
          userObject.mail === user[0].user || userObject.user === user[0].user
      )[0]
    );
    setFavorites(
      response.data.filter(
        (userObject) =>
          userObject.mail === user[0].user || userObject.user === user[0].user
      )[0]?.favorites || []
    );
    localStorage.setItem(
      "userData",
      JSON.stringify(
        response.data.filter(
          (userObject) =>
            userObject.mail === user[0].user || userObject.user === user[0].user
        )[0]
      )
    );
    //console.log("favorites", favorites);
  };

  const addFavorite = async (product) => {
    const response = await getUsers();
    updatedUser = response.data.filter((userObject) => {
      return (
        userObject.mail === user[0].user || userObject.user === user[0].user
      );
    });

    let userId = updatedUser[0].id;

    if (updatedUser[0].hasOwnProperty("favorites")) {
      updatedUser[0].favorites.forEach((favorite) => {
        console.log(favorite);
      });
      updateUser(userId, {
        ...updatedUser[0],
        favorites: [...updatedUser[0].favorites, product],
      });
    } else {
      updateUser(userId, {
        ...updatedUser[0],
        favorites: [product],
      });
    }
    getUserFavorites();
  };

  const getUserLastViewes = async () => {
    const response = await getUsers();
    setLastViewed(
      response.data.filter(
        (userObject) =>
          userObject.mail === user[0].user || userObject.user === user[0].user
      )[0]?.lastViewed || []
    );
    localStorage.setItem(
      "userData",
      JSON.stringify(
        response.data.filter(
          (userObject) =>
            userObject.mail === user[0].user || userObject.user === user[0].user
        )[0]
      )
    );
  };

  const addLastViewed = async (product) => {
    // console.log("add last view çalıştı");
    const response = await getUsers();
    const findUser = response.data.filter((userObject) => {
      return (
        userObject.mail === user[0].user || userObject.user === user[0].user
      );
    });

    if (!findUser.length) {
      findUser = [{}];
    }

    if (findUser[0].hasOwnProperty("lastViewed")) {
      // check if product is already in lastViewed array
      let productAlreadyExist = false;
      findUser[0].lastViewed.forEach((viewedProduct) => {
        if (viewedProduct.id === product.id) {
          productAlreadyExist = true;
        }
      });
      if (!productAlreadyExist) {
        updateUser(findUser[0].id, {
          ...findUser[0],
          lastViewed: [...findUser[0].lastViewed, product],
        });
      }
    } else {
      updateUser(findUser[0].id, {
        ...findUser[0],
        lastViewed: [product],
      });
    }
    getUserLastViewes();
  };

  const deleteFavorite = async (product) => {
    const response = await getUsers();
    updatedUser = response.data.filter((userObject) => {
      return (
        userObject.mail === user[0].user || userObject.user === user[0].user
      );
    });

    let userId = updatedUser[0].id;

    const index = updatedUser[0].favorites.findIndex(
      (favorite) => favorite.id === product.id
    );

    console.log("deleteFavorite", index);

    const newArr = [
      ...updatedUser[0].favorites.slice(0, index),
      ...updatedUser[0].favorites.slice(index + 1),
    ];
    console.log(newArr);

    updateUser(updatedUser[0].id, {
      ...updatedUser[0],
      // addresses: [{ address: newAddress }],
      favorites: newArr,
    });
    getUserFavorites();
  };

  let updatedUser;

  const editAddress = async (newProps, addressName) => {
    const { addresses } = user[0];

    const updatedAddress = addresses.map((address) => {
      if (address.addressName === addressName) {
        return {
          ...address,
          ...newProps,
        };
      }

      return address;
    });

    setUser((state) => {
      const copyState = [...state];

      copyState[0].addresses = updatedAddress;

      return copyState;
    });

    await updateAddress(updatedAddress);
  };

  const deleteAddress = async (addressName) => {
    const { addresses } = user[0];
    const index = addresses.findIndex(
      (address) => address.addressName === addressName
    );
    const newAddress = [...addresses];

    newAddress.splice(index, 1);

    setUser((state) => {
      const copyState = [...state];

      copyState[0].addresses = newAddress;

      return copyState;
    });

    await updateAddress(newAddress);
  };

  /**
   * @param {Address} newAddress
   */
  const addressInfo = async (newAddress) => {
    const { addresses } = user[0];
    const hasAddress = addresses.some(
      (adress) => adress.addressName === newAddress.addressName
    );

    if (hasAddress) {
      alert("address name already used");

      return;
    }

    setUser((state) => {
      const copyState = [...state];

      copyState[0].addresses.push(newAddress);

      return copyState;
    });

    await updateAddress(user[0].addresses);
  };

  /**
   * @param {Address} addresses
   */
  const updateAddress = async (addresses) => {
    await patchUser(user[0].id, { addresses });
  };

  const updateUser = async (updatedUserId, updatedUserObject) => {
    // console.log(updatedUserId);
    // console.log(updatedUserObject);
    var response = await patchUser(updatedUserId, updatedUserObject);

    localStorage.setItem("userData", JSON.stringify(response.data));
  };

  const login = async (userData) => {
    console.log(userData.data);
    localStorage.setItem("userData", JSON.stringify(userData.data));
    localStorage.setItem("access-token", userData.accessToken);
    localStorage.setItem("refresh-token", userData.refreshToken);
    setLoggedIn(true);

    const localUserData = JSON.parse(
      localStorage.getItem("userData") || "[{}]"
    );
    if (localUserData) {
      setUser(localUserData);
    } else {
      setUser(userData.data[0]);
    }

    if (userData.data[0].role === "admin") {
      setShowAdminOptions(true);
    }
    // setCurrentUser(userData.data);
    console.log(userData.data);

    // await postMe(userData.data);
  };

  const logout = async (callback) => {
    localStorage.removeItem("userData");
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
    setLoggedIn(false);
    setUser([{}]);
    const id = currentUser[0].id;
    setCurrentUser(null);
    await fetchLogout(id);

    callback();
  };

  const getUserOrders = async () => {
    const me = await fetchMe();
    //setUser(me.data);
    const response = await getUsers();
    console.log(
      "ME:",
      response.data.filter((userObject) => console.log(me.data))
    );
    setOrders(
      response.data.filter(
        (userObject) =>
          userObject.mail === me.data[0].user ||
          userObject.user === me.data[0].user
      )[0].orders
    );
    console.log("orders", orders);
  };

  const addOrder = async (userName, orderObj) => {
    const response = await getUsers();
    console.log(userName);
    updatedUser = response.data.filter((userObject) => {
      return userObject.mail === userName || userObject.user === userName;
    });

    console.log(updatedUser);

    let userId = updatedUser[0].id;

    console.log(userId);

    if (updatedUser[0].hasOwnProperty("orders")) {
      updatedUser[0].orders.forEach((order) => {
        console.log(order);
      });
      updateUser(userId, {
        ...updatedUser[0],
        orders: [...updatedUser[0].orders, orderObj],
      });
    } else {
      updateUser(userId, {
        ...updatedUser[0],
        orders: [orderObj],
      });
    }
    getUserOrders();
  };

  const getUserByOrderId = async (orderId) => {
    const response = await getUsers();
    console.log(response.data);
    console.log(orderId);
    let tempUser;
    response.data.forEach((userObject) => {
      userObject.orders.length >= 1 &&
        userObject.orders.forEach((orderObject) => {
          if (orderObject.orderId === orderId) {
            tempUser = userObject;
          }
        });
    });
    /* const tempUser = response.data.filter((userObject) => {
      console.log(userObject)
      console.log(userObject.orders)
      userObject.orders.length >= 1 && userObject.orders.filter((orderObj) => {
        console.log(orderObj.orderId);
        return (
          orderObj.orderId === orderId
        );
      }) */
    /*  return (
        userObject.orders[0].orderId === orderId
      ); 
    });*/

    console.log(tempUser);
    return tempUser;
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
    editAddress,
    deleteAddress,
    address,
    orderAddress,
    setOrrderAddress,
    favorites,
    setFavorites,
    getUserFavorites,
    addFavorite,
    deleteFavorite,
    addOrder,
    getUserOrders,
    addLastViewed,
    lastViewed,
    getUserLastViewes,
    getUserByOrderId,
    showAdminOptions,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
