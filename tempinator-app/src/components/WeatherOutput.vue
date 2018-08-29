<template>
  <div id="weatherOutput">
    {{ selectedCity }}
  </div>
</template>

<script>
export default {
  name: 'weatherOutput',
  props: ['selectedCity']
}
</script>