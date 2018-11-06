<template>
<div id="image-container">
  <ul class="imageContainer">
    {{ objects }}
  </ul>

</div>
</template>

<script>

export default {
  name: 'image-container',
  props:  {
    objects: Array
  }
}
</script>

<style scoped>
</style>
