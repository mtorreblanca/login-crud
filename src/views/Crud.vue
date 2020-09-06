<template>
  <div id="a">
    <form @submit.prevent="agregarFruta">
      <label>Fruta</label>
      <br />
      <input v-model="formData.nombre" type="text" placeholder="nombre de fruta" />
      <br />
      <br />

      <label>Cantidad</label>
      <br />
      <input v-model="formData.cantidad" type="number" placeholder="cantidad de fruta" />
      <br />
      <br />
      <button type="submit">AGREGAR</button>
    </form>

    <br />

    <table border="1">
      <tr>Nombre | Cantidad</tr>
      <tr v-for="item in frutas" v-bind:key="item.id">
        <th>
          Fruta: {{item.nombre}} | Cantidad: {{item.cantidad }}
          <button
            @click="editarFruta(item.id)"
          >Editar</button>
          <button @click="eliminarFruta(item.id)">Eliminar</button>
        </th>
      </tr>
    </table>
  </div>
</template>

<style>
#a {
  max-width: 500px;
  margin: 40px auto;
}
</style>

<script>
import { db } from '@/firebase/init.js'
const collection = 'fruits'

export default {
  data () {
    return {
      formData: {
        nombre: null,
        cantidad: null
      },
      frutas: [],
      error: ''
    }
  },
  firestore () {
    return {
      frutas: db.collection(collection)
    }
  },
  // mounted () {
  //   this.frutas = []
  //   collection
  //     .get()
  //     .then((r) =>
  //       r.docs.map((item) => {
  //         this.frutas.push({ id: item.id, data: item.data() })
  //       })
  //     )
  // },

  methods: {
    async agregarFruta () {
      const { nombre, cantidad } = this.formData
      db.collection(collection)
        .add({ nombre, cantidad })
      this.formData.nombre = ''
      this.formData.cantidad = ''
    },
    async editarFruta (id) {
      try {
        await db.collection(collection)
          .doc(id)
          .set({ nombre: this.formData.nombre, cantidad: this.formData.cantidad })
      } catch (error) {
        alert(error)
      }
    },
    eliminarFruta (id) {
      try {
        db.collection(collection)
          .doc(id)
          .delete()
      } catch (error) {
        alert(error)
      }
    }
  }
}
</script>
