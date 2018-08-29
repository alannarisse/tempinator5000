<template>
  <div id="app">
    <h1>Weather Viewer</h1>
    <WeatherForm v-on:formSubmit="getWeather"></WeatherForm>
  </div>
</template>

<script>
import WeatherForm from './components/WeatherForm'

export default {
  name: 'App',
  components:{
    WeatherForm
  },
  methods: {
    getWeather:function(text){
      this.$http.get('http://api.apixu.com/v1/current.json?key=b69e3ef3812d4d1d90b33348182908&q='+text)
      .then((response) => {
        console.log(response);
      })
      // alert(text);
    }
  }

}
</script>

<style>
#app {

}
</style>