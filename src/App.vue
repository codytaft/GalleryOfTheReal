
<template>
  <div id="app">
    <Header msg="Welcome to the Gallery of the Real"/>
    <hr>
    <div>
      <ImageContainer v-bind:objects="this.images"/>
    </div>
    <button v-on:click="getAllObjects()"></button>
  </div>
</template>

<script src="http://localhost:8098"></script>

<script>
import Header from './components/Header.vue'
import ImageContainer from './components/ImageContainer.vue'
import GetGallery from './services/GetGallery'
import apiKey from './assets/apiKey';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    Header,
    ImageContainer
  },
  data() {
    return {
      home: true,
      loading: true,
      objects: [],
      images: [],
      nextLink: ''
    }
  },
  methods: {

    getAllObjects(url=`https://api.harvardartmuseums.org/object?hasimage=1&apikey=${apiKey}`) {
      console.log(url)
      return axios.get(url)
        .then(response => {
          this.getImages(response.data)
        })
        .catch(error => console.log(error))
        .finally(() => {
          this.loading = false
        })
    },

    getImages: function(objects) {
      console.log(objects)
      return objects.records.forEach(object => {
        console.log(object)
        if (object.primaryimageurl !== null && this.images.length < 10 ) {
          this.images.push(object.primaryimageurl)
        } else if(this.images.length < 10) {
          this.getAllObjects(objects.info.next)
        } else if(this.images.length === 10) {
          this.nextLink = objects.info.next
        } 
        return this.images.push(object.primaryimageurl)
      })
    }
  },

  // created() {
  //   const url = `https://api.harvardartmuseums.org/object?hasimage=1&apikey=${apiKey}`
  //   GetGallery.getAllObjects(url)
  //   .then(objects => {
  //     this.getImages(objects)
  //   })
  //   .catch(error => console.log(error))
  //   .finally(() => {
  //     this.loading = false
  //   })
  // }
}
</script>

<style>
body {
  background-color: #010407;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #010407;
  margin: 0;
}

.pill-btn {
  width: 10rem;
  display: inline-block;
  margin: 1rem;
  height: 2rem;
  border-radius: 1rem;
}
</style>
