<template>
  <div id="map"/>
</template>

<script setup lang="ts">

import useGoogleMap from "../composables/map";

const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY as string;

useGoogleMap("map", apiKey)

</script>

<style>
#map {
  height: 100%;
  width: 100%;
}

</style>

