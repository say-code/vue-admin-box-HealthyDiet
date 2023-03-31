import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/businessManage',
    component: Layout,
    redirect: '/businessManage/index',
    meta: { title: '商家管理', icon: 'sfont system-xitongzhuangtai' },
    alwayShow: true,
    children: [
      {
        path: 'index',
        component: createNameComponent(() => import('@/views/main/businessManage/index.vue')),
        meta: { title: '商家管理员登记' }
      },
      {
        path: 'business',
        component: createNameComponent(() => import('@/views/main/businessManage/business.vue')),
        meta: { title: '商家管理' }
      }
    ]
  }
]

export default route