import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/router/Layout'
import Admin from '@/router/components/admin'
import Log from '@/router/components/log'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/login',
      name: 'login',
      component: () => import('@/router/login'),
      meta: {
        title: '登陆'
      }
    },
    {
      path: '/',
      component: Layout,
      name: '后台管理',
      meta: {
        title: '后台管理'
      },
      children: [{
          path: '/components/admin',
          name: '/components/admin',
          component: Admin,
          name: '管理中心',
          meta: {
            title: '管理中心'
          },
        },
        {
          path: '/components/addClassify',
          // name: '/components/addClassify',
          component: () => import('@/router/components/addClassify'),
          name: '添加分类',
          meta: {
            title: '添加分类'
          }
        },
        {
          path: '/components/log',
          name: '/components/log',
          component: Log,
          name: '日志管理',
          meta: {
            title: '日志管理'
          }
        }
      ]
    }
  ]
})
