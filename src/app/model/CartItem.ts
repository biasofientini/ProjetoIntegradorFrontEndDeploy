import { Cart } from "./Cart"
import { Product } from "./Product"

export class CartItem{
    public id: number
    public productQty: number
    public product: Product
    public cart: Cart
}