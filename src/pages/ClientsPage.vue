<template>
<h1>Liste des clients</h1>
  <client></client>
</template>

<script>
// importation composant client
import Client from 'components/Client.vue'
export default {
  name: 'ClientsPage.vue',
  components: { Client }

}
</script>

<style scoped>

</style>
