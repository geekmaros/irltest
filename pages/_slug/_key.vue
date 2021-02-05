<template>
  <main class="mx-auto lg:max-w-screen-lg pt-10 pb-10 bg-gray-400">
    <p>Testing page enter {{ event.title }}</p>
  </main>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async asyncData({ store,params }) {
    await  store.dispatch('events/getSingleUserPlans', {key: params.key })
  },
  computed:{
    ...mapState({
      event: (state) =>  state.events.singleEvent[0],
    }),
  }
}
</script>

<style scoped></style>
