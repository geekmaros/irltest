<template>
  <ul class="attending flex items-center mt-3">
    <li class="attend-wrapper relative " v-for="(attendance, index) in event.attendingOrInterested" :key="`attend-${index}`">
      <div v-if="attendance.image" :class="{'-ml-2': index !==  0}" >
        <img class="h-8  w-8 rounded-full border-2 border-white" :src="attendance.image" alt="attending user image">
      </div>
      <div v-else  :style="{backgroundColor: getRandomBg()}" :class="{'-ml-2': index !==  0}" class="h-8 cursor-pointer hover:z-50 w-8 border-2 border-white rounded-full text-white text-xs font-semibold flex justify-center items-center">{{getNameIndex(attendance.fullName)}}</div>
    </li>
    <div class="text-xs font-semibold ml-1 border-4 border-white bg-gray-200 rounded-full px-2 py-1">+{{event.attendingOrInterestedCount - event.attendingOrInterested.length}}</div>

  </ul>
</template>

<script>
export default {
  name: "Attending",
  methods: {
    getRandomBg() {
      const colors = ['red', 'violet', 'gray', 'orange', 'green', 'purple', 'pink', 'turquoise', 'brown']
      const num = Math.floor(Math.random() * colors.length);
      return colors[num]
    },
    getNameIndex(value){
      const fullName = value.split(' ');
      const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
      return initials.toUpperCase();
    },
  },
  props:{
    event: Object
  }
};
</script>

<style scoped>

</style>
