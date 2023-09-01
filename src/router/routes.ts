const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },

  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '',
    children: [
      {
        path: '',
        component: () => import('@/views/UserExplore/index.vue'),
        meta: {
          title: '探索',
          name: 'explore',
          info: false
        }
      },
      {
        path: 'screen',
        component: () => import('@/views/screen/index.vue'),
        meta: {
          title: '筛选',
          name: 'screen',
          info: false
        }
      },
      {
        path: 'production',
        component: () => import('@/views/production/index.vue'),
        meta: {
          title: '我的作品',
          name: 'production',
          info: true
        }
      },
      {
        path: 'like',
        component: () => import('@/views/like/index.vue'),
        meta: {
          title: '喜欢的',
          name: 'like',
          info: true
        }
      },
      {
        path: 'Collect',
        component: () => import('@/views/Collect/index.vue'),
        meta: {
          title: '收藏品',
          name: 'Collect',
          info: true
        }
      },
      {
        path: 'setting',
        component: () => import('@/views/setting/index.vue'),
        meta: {
          title: '系统设置',
          name: 'setting',
          info: true
        }
      }
    ]
  }
]

export default routes
