<template>
<h1>Liste des clients</h1>
  <q-list
    v-if="clients.length"
    class="rounded-borders"
    bordered
    separator
  >
    <client
      v-for="client in clients"
      :key="client.id"
      :client="client"
    />
  </q-list>
</template>

<script>
// importation composant client
import Client from 'components/Client.vue'
import { mapActions, mapGetters } from 'vuex/dist/vuex.mjs'

export default {
  name: 'ClientsPage.vue',
  components: { Client },
  computed: {
    ...mapGetters('clients', ['clients'])
  },
  methods: {
    ...mapActions('clients', ['getClientsApi'])
  },
  // appel de la fonction getClientsAPI
  mounted () {
    this.getClientsApi()
  }
}
</script>

<style scoped>

</style>
