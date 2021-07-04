import { Cart } from "./Cart"
import { Product } from "./Product"

export class CartItem{
    public idItemCarrinho: number
    public qtdProduto: number
    public produto: Product
    public carrinho: Cart
}