// Importation d'Axios sous le nom api
import { api } from 'boot/axios'

// données du magasin
const state = {
  // Tableau des clients
  clients: [
    {
      sexe: 'homme',
      email: 'alexis.michel@example.com',
      name: {
        prenom: 'Alexis',
        nom: 'Michel'
      },

    }
  ]
}


const mutations = {

}

const actions = {

}


const getters = {

}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
