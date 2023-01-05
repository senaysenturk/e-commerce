import { baseService } from "../../services/baseService";

export const getCart = async () => {
  return await baseService.get("http://localhost:5500/", "cart");
};
export const getCartById = async (id) => {
  return await baseService.getById("http://localhost:5500/", "cart/", id);
};

export const updatedCart = async (id, data) => {
  return await baseService.patch("http://localhost:5500/", "cart/", id, data);
};

export const postCart = async (cartObj) => {
  const getCart = await baseService.get("http://localhost:5500/", "cart");
  //console.log(getCart.data.length);
  if (getCart.data.length) {
    console.log();
    if (getCart.status === 200) {
      await updatedCart(cartObj.id, cartObj);
    } else {
      await baseService.post("http://localhost:5500/", "cart", cartObj);
    }
  } else {
    await baseService.post("http://localhost:5500/", "cart", cartObj);
  }
};
