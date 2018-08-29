<template>
  <div id="weatherForm">
    <form v-on:submit="formSubmit">
				City
				<select v-model="selectedCity">
					<option disabled value="">Please select a city</option>
					<option value="Istanbul, Turkey">Istanbul, Turkey</option>v-container> 
					</v-container><option value="San Francisco, CA">San Francisco, CA</option>
					<option value="Amsterdam, Netherlands">Amsterdam, Netherlands</option>
					<option value="Oakland, CA">Oakland, CA</option>
					<option value="Rome, Italy">Rome, Italy</option>
					<option value="Cleveland, OH">Cleveland, OH</option>
					<option value="Tel Aviv, Israel">Tel Aviv, Israel</option>
					<option value="New York City, NY">New York City, NY</option>
					<option value="Murmansk, Russia">Murmansk, Russia</option>
					<option value="Istanbul, Turkey">Istanbul, Turkey</option>
				</select>
				<br><span>Selected: {{ selectedCity }}</span>
				<br>
				<input type="radio" v-model="chooseFC" name="fc" id="fc_1" value="Fahrenheit" checked><label for="fc_1">Fahrenheit</label>				
				<input type="radio" v-model="chooseFC" name="fc" id="fc_2" value="Celsius"><label for="fc_2">Celsius</label>
				<br><span>Choice: {{ chooseFC }}</span>
					
				<br><input type="submit" value="Check Weather">
		</form>
  </div>
</template>

<script>
export default {
  name: 'weatherForm',
  data(){
  	return{
  		selectedCity:'',
  		chooseFC:'Fahrenheit'
  	}
  },
  methods: {
  	formSubmit(e){
  		// alert(this.selected)
  		this.$emit('formSubmit', this.selectedCity)
  		e.preventDefault()
  	}
  }

}
</script>