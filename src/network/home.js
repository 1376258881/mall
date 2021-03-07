//网络封装api层

import {
    request
} from './request';

export function getHomeMultidata() {
    return request({
        url: ''
    })
}

export function getHomeGoods() {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}