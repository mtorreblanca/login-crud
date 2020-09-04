<template>

  <div id="a">

  <form @submit.prevent="agregarFruta">
  <label>Fruta</label><br>
  <input v-model="nombre" type="text" placeholder="nombre de fruta"><br><br>

  <label>Cantidad</label><br>
  <input v-model="cantidad" type="number" placeholder="cantidad de fruta"><br><br>
  <button>
  AGREGAR
  </button>

  </form>



  <br>

  <table border="1">

    <tr>
    Nombre | Cantidad
    </tr>
    <tr v-for="item in frutas" v-bind:key="item.id">
        <th>
        Fruta: {{item.data.nombre}} | Cantidad: {{item.data.cantidad }}
        <button @click="editarFruta(item.id)">Editar</button>
        <button @click="eliminarFruta(item.id)">Eliminar
        </button>
        </th>


    </tr>




  </table>


  </div>
</template>

<style>
#a{
max-width: 500px;
margin: 40px auto;
}

</style>


<script>
import {coleccion} from '@/firebase/init.js'
import firebase from 'firebase'


export default{
  data(){
    return{
      nombre: null,
      cantidad: null,
      frutas: [],
      error: ''


    }
  },


  mounted(){
  this.frutas=[]
  coleccion.get()
  .then( (r) => r.docs.map( (item) => {
      this.frutas.push({id:item.id,data:item.data()})
  })).catch(err => {
    this.error="error"
  })

  },

  methods:{

  agregarFruta(){
  coleccion.add({nombre: this.nombre, cantidad: this.cantidad})
  .then( () => this.$mount())
  },

  editarFruta(id){
  coleccion.doc(id).set({nombre:this.nombre,cantidad:this.cantidad})
  .then( () => this.$mount())
  },

  eliminarFruta(id){
  coleccion.doc(id).delete()
  .then( () => this.$mount())
  }
  }

}

</script>
