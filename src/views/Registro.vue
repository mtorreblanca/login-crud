<template>
  <div>
    <h1>Register</h1>
    {{ formData }}
    <form @submit.prevent="agregarUsuario">
      <label>Inserta nombre</label>
      <br />
      <input v-model="formData.nombre" type="text" placeholder="inserta nombre" />
      <br />
      <br />
      <label>Inserta correo</label>
      <br />
      <input v-model="formData.correo" type="email" placeholder="inserta correo" />
      <br />
      <br />
      <label>Inserta contraseña</label>
      <br />
      <input v-model="formData.pass" type="password" placeholder="inserta contraseña" />
      <br />
      <br />
      <button type="submit">REGISTARME</button>
    </form>
  </div>
</template>

<script>
import { auth } from '../firebase/init'
const { log } = console
export default {
  data () {
    return {
      formData: {
        nombre: '',
        correo: '',
        pass: ''
      },
      error: ''
    }
  },

  methods: {
    async agregarUsuario () {
      log(this.formData)
      if (this.formData.nombre && this.formData.correo && this.formData.pass) {
        try {
          await auth
            .createUserWithEmailAndPassword(this.formData.correo, this.formData.pass)
          this.nombre = ''
          this.correo = ''
          this.pass = ''
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
