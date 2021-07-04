import { CartItem } from "./CartItem"
import { User } from "./User"

export class Cart{
    public idCarrinho: number
    public carrinhoUsuario: User
    public itens: CartItem[]

}