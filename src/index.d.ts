type State = {
  cart: CartProduct[];
  auth: AuthUser;
  products: Product[];
  addProductToCart: (products: CartProduct[]) => void;
  removeProductFromCart: (productId: CartProduct["id"]) => void;
  decreaseProduct: (productId: CartProduct["id"]) => void;
  totalPrice: () => string;
  totalQuantity: () => number;
  setAuth: (payload: any) => void;
  getDate: () => Date;
  cartId: () => number;
};
//db den gelen hali

type Product = {
  name: string;
  price: number;
  size: string[];
  color: string[];
  category: string;
  imgPath: string;
  id: number;
};

type CartProduct = {
  name: string;
  price: number;
  size?: string;
  color?: string;
  category: string;
  imgPath: string;
  id: number;
  amount: number;
  address: string;
};

type OrderProduct = {
  userId: AuthUser["id"];
  orderList: CartProduct[];
  orderId: number;
  date: number;
  totalOrderAmount: number;
};

type AuthUser = {
  accessToken?: string;
  password: string;
  role: "admin" | "user";
  roles?: "admin" | "user";
  user: string;
  id: number;
};
