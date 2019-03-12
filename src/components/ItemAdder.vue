<template>
  <div class="new-item-container">
    <NewItemField :newItemValue="newItem"/>
    <div class="input-field">
      <InputField @input="updateNewItem"/>
      <AddButton @submited="submit"/>
    </div>
  </div>
</template>

<script>
import AddButton from "./AddButton.vue";
import NewItemField from "./NewItemField.vue";
import InputField from "./InputField.vue";

export default {
  components: {
    AddButton,
    NewItemField,
    InputField
  },
  data: function() {
    return {
      newItem: ""
    };
  },
  methods: {
    submit: function() {
      if (this.newItem.length > 2) {
        this.$emit("submit", this.newItem);
        this.newItem = "";
        this.$redrawVueMasonry();
      }
    },
    updateNewItem: function(value) {
      this.newItem = value;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-field {
  display: flex;
  margin: auto;
  outline: none;
}
.new-item-container {
  margin: auto;
  outline: none;
}
</style>
