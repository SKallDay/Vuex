<template>
  <div>
    <input v-model="number" type="number" />
    <button @click="addNumber">Add new number</button>
    <button @click="fetchUserArray">fetch Users</button>
  </div>
</template>

<script>
export default {
  name: "NumberSubmit",
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    addNumber() {
      this.$store.dispatch("addNumber", {
        value: this.$data.number,
        id: this.$data.number,
      });
    },
    async fetchUserArray() {
      const fetchUser = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const userData = await fetchUser.json();
      this.$store.dispatch("addUsers", userData);
    },
  },
};
</script>
