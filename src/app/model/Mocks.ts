import { CartItem } from './CartItem';
import { Cart } from './Cart';


function createCart(id: number, userCart: number){
    const cart = new Cart()
    cart.id = id
    cart.userCart = userCart
    return cart
}

function createCartItem(id: number, productQty: number, productId: number, cartId: number){
    const item = new CartItem()
    item.id = id
    item.productQty = productQty
    item.productId = productId
    item.cartId = cartId
    return item
}


const cartItem1 = createCartItem(1,1,1,1)
const cartItem2 = createCartItem(1,2,2,1)
const cartItem3 = createCartItem(1,2,3,1)

const cart1 = createCart(1, 1)
const cart2 = createCart(2, 1)

export { cartItem1, cartItem2, cartItem3, cart1, cart2 }