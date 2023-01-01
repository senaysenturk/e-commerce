type State = {
    cart: Product[]
    auth: []
}

type Product = {
    name: string;
    price: number;
    size: string;
    color: string;
    category: string;
    imgPath: string;
    id:number;
    amount: number;

}