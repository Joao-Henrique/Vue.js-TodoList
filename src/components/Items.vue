<template>
  <div>
    <ol class="items-list-container">
      <li class="item-container" :key="index" v-for="(item, index) in items">
        {{ item}}
        <RemoveButton @clicked="removeItemFromList(index)"/>
      </li>
    </ol>
  </div>
</template>

<script>
import RemoveButton from "./RemoveButton.vue";

export default {
  components: {
    RemoveButton
  },
  methods: {
    removeItemFromList: function(index) {
      this.$emit("removeThisItem", index);
    }
  },
  props: {
    items: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-container {
  background-color: lightblue;
  border-radius: 7px;
  display: flex;
  flex: row;
  justify-content: space-between;
  margin-bottom: 5px;
  outline: none;
  padding-left: 5px;
}
.items-list-container {
  padding: 0px;
}
</style>