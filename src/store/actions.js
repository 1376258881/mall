import {
    ADD_COUNTER,
    ADD_TO_CART
} from "./mutations-types"
export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            let oldProduct = context.state.cartList.find(item => item.goods_id === payload.goods_id);
            if (oldProduct) {
                context.commit(ADD_COUNTER, oldProduct);
                resolve("商品+1")
            } else {
                payload.count = 1; //浅克隆
                context.commit(ADD_TO_CART, payload);
                resolve("新加入商品")
            }
        })
    }
}