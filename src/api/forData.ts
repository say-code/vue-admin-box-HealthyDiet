import request from '@/utils/system/request'

export function getAmount() {
    return request({
        url: '/order/amount',
        method: 'get',
        baseURL: '/apis',
    })
}