import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/orderManage',
    component: Layout,
    redirect: '/orderManage',
    meta: { title: '订单管理', icon: 'sfont system-xitongzhuangtai' },
    children: [
      {
        path: 'index',
        component: createNameComponent(() => import('@/views/main/orderManage/index.vue')),
        meta: { title: '订单管理', icon: 'sfont system-xitongzhuangtai', hideClose: true }
      }
    ]
  }
]

export default route