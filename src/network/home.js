//网络封装api层

import {
    request
} from './request';

export function getHomeSwiperdata() {
    return request({
        url: '/home/swiperdata'
    })
}

export function getHomeCatitems() {
    return request({
        url: '/home/catitems',
    })
}

export function getHomeFloordata() {
    return request({
        url: '/home/floordata',
    })
}

export function getHomeGoods(cid, pagenum, pagesize, query) {
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