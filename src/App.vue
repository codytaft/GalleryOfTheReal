
<template>
  <div id="app">
    <AppTitle msg="Welcome to the Gallery of the Real"/>
    <hr>
    <button v-on:click="getArtistObjects(28495)" class="sargent-btn artist-btn">John Singer Sargent</button>
    <button v-on:click="getArtistObjects(29118)" class="turner-btn artist-btn">J.M.W. Turner</button>
    <button v-on:click="getArtistObjects(18390)" class="dore-btn artist-btn">Gustave Dore</button>
    <button v-on:click="getArtistObjects(29318)" class="warhol-btn artist-btn">Andy Warhol</button>
    <ul v-if="this.images.length">
      <ImageContainer  v-for="item in images" v-bind:image="item" v-bind:key="item.id"/>
    </ul>
  </div>
</template>

<script src="http://localhost:8098"></script>

<script>
import AppTitle from './components/AppTitle.vue'
import ImageContainer from './components/ImageContainer.vue'
import GetGallery from './services/GetGallery'
import apiKey from './assets/apiKey';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    AppTitle,
    ImageContainer
  },
  data() {
    return {
      home: true,
      loading: true,
      objects: [],
      images: [],
      nextLink: '',
    }
  },
  methods: {

    getArtistObjects(id) {
      return axios.get(`https://api.harvardartmuseums.org/object?person=${id}&size=20&apikey=${apiKey}`)
        .then(response => {
          this.getImages(response.data.records)
        })
        .catch(error => console.log(error))
        .finally(() => {
          this.loading = false
        })
    },

    getImages: function(objects) {
      return objects.forEach(object => {
        if(object.images) {
          object.images.forEach(image => {
            this.images.push(image.baseimageurl)
          })
        }
      })
    }
  }
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

ul {
  margin: 0;
  padding: 0;
}

button {
  width: 10rem;
  height: 3rem;
  margin: 1rem;
  border: 0.2rem solid whitesmoke;
  color: whitesmoke;
  background-color: #010407;
  font-size: 0.9rem;
  cursor: pointer;
}
button:focus {
  outline: none;
}

button:active {
  background-color: #2c3e50;
}
</style>
