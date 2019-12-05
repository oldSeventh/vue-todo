// import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app/:id',
    // path: '/app',
    /* components: {
      default: Todo,
      a: Login
    }*/
    component: () => import('../views/todo/todo.vue'),
    name: 'app',
    meta: {
      title: 'this is app',
      description: 'asdasd'
    },
    beforeEnter(to, from, next) {
      console.log('app route before enter')
      next()
    },
    children: [
      {
        path: 'test',
        component: Login
      }
    ]
  },
  {
    path: '/login',
    /* components: {
      default: Login,
      a: Todo
    }*/
    component: Login
  }
]
