<template>
  <div id="app">
    <Header></Header>
    <main>
      <WeatherForm v-on:formSubmit="getWeather"></WeatherForm>
      <WeatherOutput v-text="selectedCity"></WeatherOutput>
      <vue-frappe
      id="my-chart-id"
      title="Temperatures"
      :labels="['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven']"
      chartType="bar"
      :height="600"
      :colors="['#63F0FF', '#CCBA3B', '#FF7CC4']"
      :lineOptions="{regionFill: 1}"
      :data-sets="this.data"
    ></vue-frappe>
  </main>
  </div>
</template>

<script>
import Header from './components/Header'
import WeatherForm from './components/WeatherForm'
import WeatherOutput from './components/WeatherOutput'

export default {
  name: 'app',
  components:{
    Header,
    WeatherForm,
    WeatherOutput
  },
  data: function(){
    return {
      selectedCity:'Portland, OR',
      data: [
      {
        name: '2017', chartType: 'bar', 
        values: [67, 43, 76, 87, 30, 60, 90]
      },
      {
        name: '2018', chartType: 'bar', 
        values: [87, 53, 56, 97, 70, 80, 92]
      },
      {
        name: '2018', chartType: 'bar', 
        values: [74, 43, 86, 77, 79, 85, 92]
      }
      ]
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

        // if not us, show country not region
        //response.body.location.country

        // if celcius show, return temp_c
        //response.body.current.temp_c
      })
      // alert(text);
    }
  }

}
</script>

<style>
#app {
  * {
    font-family: 'Nunito', sans-serif;
    box-sizing: border-box;
  }

  body {margin: 0 auto;}
  
}
</style>