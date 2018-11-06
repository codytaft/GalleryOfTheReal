
<template>
  <div id="app">
    <Header msg="Welcome to the Gallery of the Real"/>
    <hr>
    <button class="pill-btn blue-pill"></button>
    <button class="pill-btn red-pill"></button>
  </div>
</template>

<script src="http://localhost:8098"></script>

<script>
import Header from './components/Header.vue'
import GetGallery from './services/GetGallery'


export default {
  name: 'app',
  components: {
    Header
  },
  data() {
    return {
      loading: true,
      periods: []
    }
  },

  created() {
    GetGallery.getPeriod()
    .then(periods => {
      this.periods = periods.records
    })
    .catch(error => console.log(error))
    .finally(() => {
      this.loading = false
    })
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
</style>
