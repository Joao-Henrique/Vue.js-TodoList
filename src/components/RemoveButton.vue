<template>
  <div>
    <button v-if="deleteList" @click="buttonClick" class="remove-list-button">X</button>
    <button v-else @click="buttonClick" class="removeButton-container">X</button>
  </div>
</template>

<script>
export default {
  methods: {
    buttonClick() {
      this.$emit("clicked");
    }
  },
  props: {
    deleteList: Boolean
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.removeButton-container {
  background-color: lightblue;
  border-color: transparent;
  border-radius: 10px;
  font-size: 10px;
  height: 22px;
  outline: none;
  transition: 1s ease-in-out;
}
.remove-list-button {
  background-color: transparent;
  border-color: transparent;
  border-radius: 10px;
  font-size: 10px;
  height: 22px;
  outline: none;
  transition: 1s ease-in-out;
}
button:hover {
  background-color: white;
  color: red;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  transition: 0.2s ease-in-out;
}
</style>