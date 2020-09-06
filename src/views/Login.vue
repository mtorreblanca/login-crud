<template>
  <div>
    <form @submit.prevent="iniciarSesion">
      <label>Correo</label>
      <br />
      <input v-model="correo" type="text" placeholder="inserta correo" />
      <br />
      <br />
      <label>Contraseña</label>
      <br />
      <input v-model="pass" type="password" placeholder="inserta contraseña" />
      <br />
      <br />
      <button>INICIAR SESION</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      correo: '',
      pass: '',
      error: ''
    }
  },

  methods: {
    iniciarSesion () {
      this.error = ''
      if (this.correo && this.pass) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.correo, this.pass)
          .then((u) => {
            this.$router.push({ name: 'crud' })
          })
          .catch((err) => {
            this.error = err.message
          })
      } else {
        this.error = 'todos los campos son requeridos'
      }
    }
  }
}
</script>
