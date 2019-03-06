<template>
  <div :class="updateColor()">
    <div class="top-container">
      <ColorButton @clicked="colorClick" deleteList class="colorButton"/>
      <div class="title-container">
        <Title class="titleText" v-if="editableTitle === false" v-text="listsArray.title"/>
        <TitleInput v-else @input="updateTitleValue" :title="listsArray.title"/>
        <EditButton :edit="editableTitle" @clicked="handleEditClick"/>
      </div>
      <RemoveButton @clicked="deleteListClick" deleteList class="deleteListButton"/>
    </div>
    <Items
      @removeThisItem="removeItemFromList"
      :items="listsArray.itemsArray"
      class="items-container"
    />
    <ItemAdder @submit="addItemToList" class="itemsAdder-container"/>
  </div>
</template>

<script>
import Items from "./components/Items.vue";
import ItemAdder from "./components/ItemAdder.vue";
import Title from "./components/Title.vue";
import TitleInput from "./components/TitleInput.vue";
import EditButton from "./components/EditButton.vue";
import RemoveButton from "./components/RemoveButton.vue";
import ColorButton from "./components/ColorButton.vue";

export default {
  components: {
    ColorButton,
    EditButton,
    ItemAdder,
    Items,
    RemoveButton,
    Title,
    TitleInput
  },
  data: function() {
    return {
      editableTitle: false
    };
  },
  props: {
    listsArray: Object
  },
  methods: {
    updateColor: function() {
      switch (this.listsArray.color) {
        case 1:
          return "list-container-green";
        case 2:
          return "list-container-red";
        case 3:
          return "list-container-blue";
        default:
          return "list-container-yellow";
      }
    },
    colorClick: function() {
      this.$emit("colorClick");
    },
    removeItemFromList: function(index) {
      this.$emit("removeItemFromList", index);
    },
    addItemToList: function(value) {
      this.$emit("addItemToList", value);
    },
    handleEditClick: function() {
      this.editableTitle = !this.editableTitle;
    },
    updateTitleValue: function(value) {
      this.$emit("updateTitleValue", value);
    },
    deleteListClick: function() {
      this.$emit("removeClicked");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.deleteListButton {
  position: absolute;
  right: 5px;
  top: 5px;
}
.colorButton {
  left: -12px;
  position: absolute;
  top: -12px;
}
.list-container-green {
  background-color: #42b983;
  border-radius: 8px;
  margin-top: 20px;
  margin: 10px;
  width: 350px;
}
.list-container-red {
  background-color: #ff8c94;
  border-radius: 8px;
  margin-top: 20px;
  margin: 10px;
  width: 350px;
}
.list-container-blue {
  background-color: #96a6ff;
  border-radius: 8px;
  margin-top: 20px;
  margin: 10px;
  width: 350px;
}
.list-container-yellow {
  background-color: #ffd3b5;
  border-radius: 8px;
  margin-top: 20px;
  margin: 10px;
  width: 350px;
}
.top-container {
  position: relative;
}
.title-container {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 200px;
}
.titleText {
  font-size: 30px;
  font-weight: bold;
  margin: 22px 0 23px 0;
}
.items-container {
  margin: auto;
  width: 200px;
}
.itemsAdder-container {
  margin: auto;
  padding-bottom: 10px;
  width: 200px;
}
</style>
