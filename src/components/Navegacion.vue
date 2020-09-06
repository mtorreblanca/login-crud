<template>
  <div>
    <template>
      <router-link to="/crud">IR A CRUD</router-link>|
      <a id="poin" @click="cerrarSesion">Cerrar Sesión</a>
    </template>
    <br />
    <br />

    <template>
      <router-link to="/registro">REGISTRARME</router-link>
|
      <router-link to="/login">INICIAR SESIÓN</router-link>
    </template>
  </div>
</template>

<style>
#poin {
  cursor: pointer;
}
</style>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      usuario: null
    }
  },

  created () {
    firebase.auth().onAuthStateChanged((usuario) => {
      if (usuario) {
        this.usuario = usuario
      } else {
        this.usuario = null
      }
    })
  },

  methods: {
    cerrarSesion () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: 'login' })
        })
    }
  }
}
</script>
