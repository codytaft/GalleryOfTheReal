<template>
<li id="image-container">
    <img v-bind:src='this.image' alt="gallery image">
</li>
</template>

<script>

export default {
  name: 'image-container',
  props:  {
    image: String
  }
}
</script>

<style scoped>
</style>
