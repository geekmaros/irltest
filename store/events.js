// import fetchCharacter from '~/apollo-api/queries/fetchCharacter.gql'
import fetchUser from '~/apollo-api/queries/fetchUserAndUserPlan.gql'

export const state = () => ({
  events: [],
})

export const mutations = {
  set_events(state, payload) {
    state.events = payload
  },
}

export const actions = {
  async getUserAndPlans({ commit }, { username }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    await clientApollo
      .query({
        query: fetchUser,
        variables: {
          username: username || 'irlideas',
        },
      })
      .then((res) => {
        commit('set_events', res.data)
      })
      .catch((e) => console.log(e))
  },
}
