import request from '@/utils/system/request'

export function getOrderPage(data: any) {
    return request({
        url: '/order/all?page='+data.page+'&pageSize='+data.pageSize,
        method: 'get',
        baseURL: '/apis',

    })
}

export function deleteOrder(data: any) {
    return request({
        url: '/order/delete',
        method: 'post',
        baseURL: '/apis',
        data
    })
}


