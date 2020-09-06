<template>
  <div>
    <div id="nav">
      <router-link to="/crud">IR A CRUD</router-link>|
      <a id="poin" @click="cerrarSesion">Cerrar Sesión</a>
      <br>
      <router-link to="/registro">REGISTRARME</router-link>|
      <router-link to="/login">INICIAR SESIÓN</router-link>
    </div>
  </div>
</template>

<style lang="scss">
#poin {
  cursor: pointer;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
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
