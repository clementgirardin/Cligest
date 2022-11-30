<template>
      <!-- Un élément de liste, un client -->
      <q-item clickable v-ripple>
        <!-- Photo du client -->
        <q-item-section avatar>
          <q-avatar>
            <img :src="clients.image">
          </q-avatar>
        </q-item-section>

        <!-- Nom, prénom et email du client -->
        <q-item-section>
          <q-item-label lines="1">
            {{ clients.name.first }} {{ clients.name.last }}
          </q-item-label>
          <q-item-label caption lines="2">
            {{ clients.email}}
          </q-item-label>
        </q-item-section>

        <!-- Icône email -->
        <q-item-section side>
          <q-icon name="email" color="primary"/>
        </q-item-section>
      </q-item>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Client.vue',
  props: {
    clients: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
