<template>
<li id="image-container">
    <img v-bind:src='this.image' alt="gallery image" class="gallery-image">
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
.gallery-image {
  width: 100%;
}
li {
  list-style-type: none;
  text-decoration: none;
}
</style>
