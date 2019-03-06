<template>
  <div>
    <p v-if="newItemValue.length>3">
      Add
      <strong>{{newItemValue}}</strong> to the list?
    </p>
    <p v-else>Type the item to add</p>
  </div>
</template>

<script>
export default {
  props: {
    newItemValue: String
  }
};
</script>