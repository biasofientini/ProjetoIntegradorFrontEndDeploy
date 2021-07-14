import { Cart } from "./Cart"
import { Role } from "./Role"

export class User{
    public id: number
    public idRole: number
    public name: string
    public email: string
    public password: string
    public address: string
    public phone: string
    public zipCode: string
    public points: number
    public token: string
    public cart: Cart[]
    public roles: Role[]
}