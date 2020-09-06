<template>
  <div>
    <form @submit.prevent="agregarUsuario">
      <label>Inserta nombre</label>
      <br />
      <input v-model="nombre" type="text" placeholder="inserta nombre" />
      <br />
      <br />
      <label>Inserta correo</label>
      <br />
      <input v-model="correo" type="email" placeholder="inserta correo" />
      <br />
      <br />
      <label>Inserta contraseña</label>
      <br />
      <input v-model="pass" type="password" placeholder="inserta contraseña" />
      <br />
      <br />
      <button>REGISTARME</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      nombre: '',
      correo: '',
      pass: '',
      error: ''
    }
  },

  methods: {
    agregarUsuario () {
      if (this.nombre && this.correo && this.pass) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.correo, this.pass)
          .then((u) => {
            this.nombre = ''
            this.correo = ''
            this.pass = ''
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
