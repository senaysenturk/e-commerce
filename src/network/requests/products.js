import { baseService } from "../services/baseService";

export const postProduct = (newProduct) => {
  //console.log("Env: " + process.env.REACT_APP_API_URL);
  return baseService.post("http://localhost:5500/", "products", newProduct);
};
export const getProduct = (newProduct) => {
  return baseService.get("http://localhost:5500/", "products");
};

export const postImage = (data) => {
  return baseService.post(
    "https://api.cloudinary.com/v1_1/dr4cvohdq/image/upload",
    data,
    {
      headers: { "Access-Control-Allow-Origin": "*" },
    }
  );
};
