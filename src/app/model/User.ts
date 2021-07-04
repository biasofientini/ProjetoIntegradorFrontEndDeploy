
import { Cart } from "./Cart"

export class User{
    public id: number
    public nome: string
    public email: string
    public senha: string
    public endereco: string
    public telefone: string
    public cpf: string
    public cep: string
    public pontuacao: number
    public token: string
    public admin: boolean 
    public carrinho: Cart[]
    //public roles: Role[]
}