import {
    ADD_COUNTER,
    ADD_TO_CART
} from "./mutations-types"
export default {
    addCart(context, payload) {
        let oldProduct = context.state.cartList.find(item => item.goods_id === payload.goods_id);
        if (oldProduct) {
            context.commit(ADD_COUNTER, oldProduct)
        } else {
            payload.count = 1; //浅克隆
            context.commit(ADD_TO_CART, payload)

        }

    }
}