import fetchUser from '~/apollo-api/queries/fetchUserAndUserPlan.gql'
import fetchSingleUser from '~/apollo-api/queries/fetchUserPlan.gql'

export const state = () => ({
  events: [],
  singleEvent: null
})

export const mutations = {
  set_events(state, payload) {
    state.events = payload
  },
  set_single_events(state, payload) {
    state.singleEvent = payload
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
  async getSingleUserPlans({ commit, getters }, { key }) {
    const singleEvent = getters.userPlans.filter(event  =>  event.key ===    key   )
    commit('set_single_events', singleEvent)

  },
}

export const getters = {
  user: state =>  {
    return state.events.user
  },
  userPlans: state =>  {
    return state.events.userPlans.plans
  }
}
