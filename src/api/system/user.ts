import request from '@/utils/system/request'

// 获取数据api
export function getData(data: object) {
  return request({
    url: '/manage/select/employee',
    method: 'post',
    baseURL: '/apis',
    data
  })
}


export function getDataByBusiness() {
  return request({
    url: '/business/select',
    method: 'get',
    baseURL: '/apis',
  })
}

export function getDataByUser(data: object) {
  return request({
    url: '/user/all',
    method: 'post',
    baseURL: '/apis',
    data
  })
}

// 新增
export function add(data: object) {
  return request({
    url: '/manage/register',
    method: 'post',
    baseURL: '/apis',
    data
  })
}

export function addBusiness(data: object) {
  return request({
    url: '/business/insert',
    method: 'post',
    baseURL: '/apis',
    data
  })
}
export function addUser(data: object) {
  return request({
    url: '/user/alter',
    method: 'post',
    baseURL: '/apis',
    data
  })
}

// 编辑
export function update(data: object) {
  return request({
    url: '/employee/update',
    method: 'put',
    baseURL: '/apis',
    data,
  })
}

export function updateUser(data: object) {
  return request({
    url: '/user/alter',
    method: 'post',
    baseURL: '/apis',
    data,
  })
}

export function updateBusiness(data: object) {
  return request({
    url: '/business/alter',
    method: 'post',
    baseURL: '/apis',
    data
  })
}

// 状态变更
export function updateStatus(data: object) {
  return request({
    url: '/system/user/updateStatus',
    method: 'post',
    baseURL: '/mock',
    data
  })
}

// 删除
export function del(data: object) {
  return request({
    url: '/manage/del',
    method: 'post',
    baseURL: '/apis',
    data
  })
}
  export function delBusiness(data: object) {
    return request({
      url: '/business/del',
      method: 'post',
      baseURL: '/apis',
      data
    })
  }