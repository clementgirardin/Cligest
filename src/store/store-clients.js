// Importation d'Axios sous le nom api
import { api } from 'boot/axios'

// données du magasin
const state = {
  // Tableau des clients
  clients: [
    {
      sexe: 'homme',
      email: 'theo.ballerini@xxx.com',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Fred_personne.jpg/1200px-Fred_personne.jpg',
      name: {
        prenom: 'Theo',
        nom: 'Ballerini'
      },
    },
    {
      sexe: 'femme',
      email: 'chloe.charmillot@xxx.com',
      image:'https://laviedesreines.com/wp-content/uploads/2022/02/Comment-devenir-une-personne-solaire-pour-obtenir-tout-ce-que-vous-voulez-720x540.jpg',
      name: {
        prenom: 'Charmillot',
        nom: 'Chloé'
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
