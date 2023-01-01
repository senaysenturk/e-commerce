type State = {
    cart: CartProduct[]
    auth: []
    products: Product[]
    addProductToCart: (products: CartProduct[]) => void
    removeProductFromCart: (productId: CartProduct["id"]) => void
    decreaseProduct: (productId: CartProduct["id"]) => void
    totalPrice: ()=> string
    totalQuantity: () => number
    setAuth: (payload: any)=> void
}

type Product = {
    name: string;
    price: number;
    size: string[];
    color: string[];
    category: string;
    imgPath: string;
    id: number;
}

type CartProduct = {
    name: string;
    price: number;
    size?: string;
    color?: string;
    category: string;
    imgPath: string;
    id: number;
    amount: number;
}