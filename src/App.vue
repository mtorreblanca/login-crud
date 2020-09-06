<template>
  <div>
    <div>
      <router-link to="/">Home</router-link>
      <hr />
      <Navegacion />
      <br />
    </div>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import Navegacion from '@/components/Navegacion'

export default {
  components: {
    Navegacion
  }
}
</script>

<style>
</style>
