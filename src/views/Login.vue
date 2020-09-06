<template>
  <div>
    <h1>Login</h1>
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
      <button type="submit">INICIAR SESION</button>
    </form>
  </div>
</template>

<script>
import { auth } from '../firebase/init'
const { log } = console
export default {
  data () {
    return {
      correo: '',
      pass: '',
      error: ''
    }
  },

  methods: {
    async iniciarSesion () {
      this.error = ''
      if (this.correo && this.pass) {
        try {
          await auth
            .signInWithEmailAndPassword(this.correo, this.pass)
          this.$router.push({ name: 'crud' })
        } catch (error) {
          log(error)
          this.error = error.message
        }
      } else {
        this.error = 'todos los campos son requeridos'
      }
    }
  }
}
</script>
