<template>
  <div id="app">
    <div>
      <span class="authorName"> Made by João Henrique</span>
      <MainTitle :title="AppTitle"/>
    </div>
    <div v-masonry transition-duration="1s" item-selector=".item">
      <div v-masonry-tile class="item" :key="index" v-for="(item, index) in listsArray">
        <List
          :listsArray="listsArray[index] "
          @addItemToList="addItemToList(index, $event)"
          @colorClick="updateColor(index, $event)"
          @deleteListClick="deleteListClick"
          @removeClicked="removeList(index)"
          @removeItemFromList="removeItemFromList(index, $event)"
          @updateTitleValue="updateTitleValue(index, $event)"
        />
      </div>
    </div>
    <NewListButton @clicked="addNewList">New List</NewListButton>
  </div>
</template>

<script>
import Vue from "vue";
import { VueMasonryPlugin } from "vue-masonry";
// Components
import List from "./List.vue";
import MainTitle from "./components/MainTitle.vue";
import NewListButton from "./components/NewListButton.vue";
// Use Masonry
Vue.use(VueMasonryPlugin);

export default {
  name: "app",
  components: {
    List,
    MainTitle,
    NewListButton,
  },
  data: function() {
    return {
      AppTitle: "Vue Todo List",
      listsArray: [
        {
          title: "Intructions",
          color: 1,
          itemsArray: [
            "Add or delete items from the list",
            "Add new lists with the bottom-right add button",
            "Use the color button on top-right of each list to change colors",
            "Change title of lists using the edit button"
          ]
        }
      ],
      newList: {
        title: "New List",
        color: 4,
        itemsArray: ["Sample Item", "Sample Item", "Sample Item"]
      }
    };
  },
  methods: {
    updateColor: function(listIndex) {
      if (this.listsArray[listIndex].color > 3) {
        this.listsArray[listIndex].color = 1;
      } else {
        this.listsArray[listIndex].color++;
      }
    },
    copyOfNewListObject() {
      return JSON.parse(JSON.stringify(this.newList));
    },
    addNewList() {
      this.listsArray.push(this.copyOfNewListObject());
    },
    removeList(index) {
      this.listsArray.splice(index, 1);
    },
    removeItemFromList: function(listIndex, itemIndex) {
      this.listsArray[listIndex].itemsArray.splice(itemIndex, 1);
    },
    addItemToList: function(listIndex, value) {
      this.listsArray[listIndex].itemsArray.push(value);
    },
    updateTitleValue: function(listIndex, value) {
      this.listsArray[listIndex].title = value;
    },
    deleteListClick: function() {
      this.$emit("removeClicked");
    }
  }
};
</script>

<style>
  body {
    background-color: lightslategray;
  }
  #app {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    text-align: center;
  }
  .authorName {
    color: lightgreen;
    background-color: lightslategray;
    display: flex;

  }
</style>
