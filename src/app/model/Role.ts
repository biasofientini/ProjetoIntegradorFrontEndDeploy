import { User } from "./User"

export class Role{
    public id: number
    public role: string
    public users: User[]
}