<template>
  <div>
    <button @click="buttonClick">
      <span class="text">Color</span>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    buttonClick: function() {
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
button {
  background-color: white;
  border-color: transparent;
  border-radius: 100%;
  color: black;
  font-size: 11px;
  height: 50px;
  outline: none;
  transform: rotate(-45deg);
  transition: 1s ease-in-out;
  width: 50px;
}
button:hover {
  background-color: black;
  color: white;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  transition: 0.2s ease-in-out;
}
</style>