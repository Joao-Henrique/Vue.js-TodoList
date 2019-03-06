<template>
  <div>
    <button @click="submit">
      <span v-if="!edit">Edit</span>
      <span v-if="edit">Save</span>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    submit() {
      this.$emit("clicked");
    }
  },
  props: {
    edit: Boolean
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  background-color: lightgreen;
  border-color: transparent;
  border-radius: 0 30px 30px 0;
  height: 28px;
  outline: none;
  padding-left: 4px;
  text-align: center;
  transition: 1s ease-in-out;
  width: 35px;
}
button:hover {
  background-color: white;
  border-radius: 30px;
  color: green;
  cursor: pointer;
  outline: none;
  transition: 0.2s ease-in-out;
}
</style>
