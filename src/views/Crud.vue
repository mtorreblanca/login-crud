<template>

  <div id="a">

  <form @submit.prevent="guardarFruta" >
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
    <tr v-for="(item,index) in frutas" :key="index">
      {{item.nf}} - {{item.cf}}
        <th>
        <button @click="editar(index,item.id)">Editar</button>
        <button @click="eliminar(index,item.id)">Eliminar
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
import {db} from '@/firebase/init.js'
//import {coleccion} from '@/firebase/init.js'
//import firebase from 'firebase'

export default{
  data(){
    return{
      nombre: null,
      cantidad: null,
      id: null,
      index: null,
      frutas: [

      ],
      error: ''
    }
  },

  methods:{

  created(){
    this.listarFrutas();
  },


  async listarFrutas(){
    try{

      const reDB = await db.collection('frutas').get()

      reDB.forEach(res => {
        console.log(res.id);
        const fru = {
        id: res.id,
        nf: res.data().nombre,
        cf: res.data().cantidad
        }
        this.frutas.push(fru)

      })

    }catch(error){
      console.log(error)


    }
  },


  async guardarFruta(){
  try{

    const reDB = await db.collection('frutas').add({
    nf: this.nombre,
    cf: this.cantidad
    })

    this.frutas.push({
    nf: this.nombre,
    cf: this.cantidad,
    id: reDB.id
    })
    this.nombre = ''
    this.cantidad = ''

    } catch(error){
    console.log(error)
  }





  },
  async eliminar(index,id){
  try{

    await db.collection('frutas').doc(id).delete()
    this.frutas.splice(index,1)


  }catch(error){
    console.log(error)
  }

  },

  async editar(index,id){
  try{

    await db.collection('frutas').doc(id).update({
    nf: this.nombre,
    cf: this.cantidad
    })
    this.frutas[index].nf = this.nombre
    this.frutas[index].cf = this.cantidad

  }catch(error){
  console.log(error)
  }
  }



  }


  /*

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

,

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
*/
}

</script>
