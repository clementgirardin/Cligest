<template><!-- TODO mettre un <div> autours du <h4> et <q-list> -->
  <h4 class="titre">Liste clients</h4>
  <q-list
    v-if="clients.length"
    class="rounded-borders"
    bordered
    separator
  > <!-- Loader liste client -->
    <client class="marge"
      v-for="client in clients"
      :key="client.id"
      :client="client"
    />
  </q-list>
  <!-- Si liste vide afficher message -->
</template>

<script>
// importation composant client
import Client from 'components/Client.vue'
import { mapActions, mapGetters } from 'vuex/dist/vuex.mjs'

export default {
  name: 'ClientsPage.vue', // TODO enlever .vue
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
  .marge{
    margin: 10px;
  }
  .titre{
    margin: 30px;
    color: #0b5d1f;
  }
</style>
