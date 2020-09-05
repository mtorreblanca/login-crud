import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Registro from '../views/Registro.vue'
import LogIn from '../views/Login.vue'
import Crud from '../views/Crud.vue'

import firebase from 'firebase'


Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/registro',
    name: 'registro',
    component: Registro
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/crud',
    name: 'crud',
    component: Crud,
    meta:{
      requiresAuth: true,

    }
  }
]

})

router.beforeEach( (to,from,next) => {
  if(to.matched.some( ruta=> ruta.meta.requiresAuth)){
    const user = firebase.auth().currentUser
    if(user){
      next()
    }else{
      next({
        name: 'login'
      })
          }
  }else{
    next()
  }
})


export default router
