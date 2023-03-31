import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/userManage',
    component: Layout,
    redirect: '/userManage/index',
    meta: { title: '用户管理', icon: 'sfont system-xitongzhuangtai' },
    children: [
      {
        path: 'index',
        component: createNameComponent(() => import('@/views/main/userManage/index.vue')),
        meta: { title: '用户管理' }
      },
      // {
      //   path: 'business',
      //   component: createNameComponent(() => import('@/views/main/businessManage/order.vue')),
      //   meta: { title: '公司管理' }
      // }
    ]
  }
]

export default route