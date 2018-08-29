<template>
  <div id="weatherOutput">
    
    <div id="chart">{{ selectedCity }}
    
	</div>

  </div>

</template>

<script>
export default {
  name: 'weatherOutput',
  props: ['selectedCity']
}
</script>

<style>

</style>