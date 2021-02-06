<template>
  <main class="mx-auto lg:max-w-screen-md">
    <div class="card-top-image overflow-hidden cursor-pointer relative">
      <div
        class="card-image bg-cover rounded-lg bg-no-repeat w-full object-cover bg-center h-72 p-4 hover:scale-50"
        :style="{ backgroundImage: 'url(' + event.image + ')' }"
      ></div>
    </div>
    <div class="event-content bg-gray-100 h-full p-5">
      <h3 class="text-black leading-9 text-center font-bold text-3xl">
        {{ event.title }}
      </h3>
      <div class="location-date flex justify-between items-center mt-5">
        <div class="date flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="#454547"
              d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z"
            />
          </svg>
          <p class="text-base ml-2 leading-5 font-semibold">
            {{
              getDate(event.start.utc).month +
              ' ' +
              getDate(event.start.utc).numberedDay +
              ', ' +
              getDate(event.start.utc).year
            }}
          </p>
          <p class="ml-1">-</p>
          <p class="text-base ml-2 leading-5 font-semibold">
            {{
              getDate(event.end.utc).month +
              ' ' +
              getDate(event.end.utc).numberedDay +
              ', ' +
              getDate(event.end.utc).year
            }}
          </p>
        </div>

        <div class="location flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="#454547"
              d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
            />
          </svg>
          <p class="text-base ml-2 leading-5 font-semibold">
            {{
              event.location.address === null
                ? 'Location not set'
                : event.location.address
            }}
          </p>
        </div>
      </div>
      <div class="desc pt-5">
        <p v-if="event.desc">{{ event.desc }}</p>
        <p v-else>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          architecto autem, deserunt iure, magni modi possimus quam recusandae
          repudiandae sequi similique voluptatibus. Alias, aut consectetur fuga
          harum ipsum nobis officiis.
        </p>
      </div>
      <div class="attending flex items-center pt-5">
        <Attending class="ml-2" :event="event"></Attending>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import Attending from '~/components/Attending'
export default {
  components: { Attending },
  async asyncData({ store, params }) {
    await store.dispatch('events/getSingleUserPlans', { key: params.key })
  },
  computed: {
    ...mapState({
      event: (state) => state.events.singleEvent[0],
    }),
  },
  methods: {
    getDate(value) {
      const formattedDate = new Date(value).toUTCString().split(' ')
      return {
        day: formattedDate[0],
        month: formattedDate[1],
        numberedDay: formattedDate[2],
        year: formattedDate[3],
        time: formattedDate[4],
      }
    },
  },
}
</script>

<style scoped lang="scss">
main {
}
</style>
