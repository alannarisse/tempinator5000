<template>
  <div id="app">
    <h1>Weather Viewer</h1>
    <WeatherForm v-on:formSubmit="getWeather"></WeatherForm>
    <WeatherOutput v-text="selectedCity"></WeatherOutput>
  </div>
</template>

<script>
import WeatherForm from './components/WeatherForm'
import WeatherOutput from './components/WeatherOutput'

export default {
  name: 'App',
  components:{
    WeatherForm,
    WeatherOutput
  },
  data: function(){
    return {
      selectedCity:'Portland, OR',
    }
  },
  created() {
    this.chooseFC = 'Fahrenheit'
  },
  methods: {
    getWeather:function(text){
      this.$http.get('http://api.apixu.com/v1/current.json?key=b69e3ef3812d4d1d90b33348182908&q='+text)
      .then((response) => {
        console.log(response);
        // console.log(response.body.current.temp_f);
        this.selectedCity = response.body.location.name + ', ' + response.body.location.region + ' temp: ' + response.body.current.temp_f;
        //response.body.location.country
        //response.body.current.temp_f

        // if not us, show country not region
        // if celcius show, return temp_c
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