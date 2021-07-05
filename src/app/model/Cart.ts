import { CartItem } from "./CartItem"
import { User } from "./User"

export class Cart{
    public id: number
    public userCart: User[]
    public items: CartItem[]
}