<template>
  <div id='image-card'>
    <li><img v-bind:image="this.image" src='{{image}}' alt="gallery-image"></li>
  </div>
</template>


<script>
export default {
  name: 'image-card',
  props: {
    image: String
  }
}
</script>
