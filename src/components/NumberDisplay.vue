<template>
  <div>
    <!-- <p
      v-for="number in getNumbersArray"
      :key="number.id"
      @click="removeNumber(number.id)"
    >
      {{ number.value }}
    </p> -->
    <p>{{ getUserArray.length }}</p>
  </div>
</template>

<script>
export default {
  name: "NumberDisplay",
  computed: {
    getNumbersArray() {
      return this.$store.getters.getNumbersArray;
    },
    getUserArray() {
      // console.log(this.$store.getters.getUserArray);
      return this.$store.getters.getUserArray;
    },
  },
  methods: {
    removeNumber(id) {
      this.$store.dispatch("removeNumber", id);
    },
  },
};
</script>
