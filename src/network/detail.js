import {
    request
} from './request';
export function getDetail(iid) {
    return request({
        url: '/goods/detail',
        params: iid
    })
}

export class Goods {
    constructor(goodInfo) {
        this.goods_name = goodInfo.goods_name; //商品名
        this.goods_price = goodInfo.goods_price; //商品价格
        this.is_del = goodInfo.is_del; //被删除的价格
        this.goods_number = goodInfo.goods_number //商品数量
        this.goods_id = goodInfo.goods_id; //商品id
        this.hot_mumber = goodInfo.hot_mumber; //收藏数
        this.is_promote = goodInfo.is_promote; //促销
        this.goods_introduce = goodInfo.goods_introduce; //商品介绍

    }
}

export function getDetailGoods(cid, pagenum, pagesize, query) {
    return request({
        url: '/goods/search',
        params: {
            cid,
            query,
            pagenum,
            pagesize
        }
    })
}