<template>
  <main class="mx-auto lg:max-w-screen-lg pt-10 pb-10" v-if="events">
   <div  class="card-container  grid grid-cols--1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
     <nuxt-link :to="`/${event.slug}/${event.key}`"  v-for="(event, index) in events.userPlans.plans" :key="event.key">
       <EventCard :event="event"></EventCard>
     </nuxt-link>
   </div>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import Attending from "~/components/Attending";
import EventCard from "~/components/EventCard";
export default {
  name: "EventsCardComponent",
  components: { EventCard, Attending },
  // apollo:{
  //   user: {
  //     prefetch: true,
  //     query: fetchUser,
  //     variables: {
  //       username: "irlideas"
  //     }
  //   }
  // },
  computed: {
    ...mapState({
      events: (state) =>  state.events.events,
    }),
  },
  mounted() {
    if(this.events){
      console.log(this.events)
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
