<template>
  <div class="container">
    <Map />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Map from './components/Map.vue'

export default defineComponent({
  components: {
    Map
  }
})
</script>

<style>
.container {
  height: 95vh;
  width: 95vw;
}
</style>
