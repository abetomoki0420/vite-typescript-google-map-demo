<template>
  <div id="map"/>
</template>

<script setup lang="ts">

import useGoogleMap from "../composables/map";

const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY as string;

const mapOptions = {
  center: { lat: 51.532005, lng: -0.177331 },
  zoom: 20
};

useGoogleMap("map", apiKey, mapOptions)

</script>

<style>
#map {
  height: 100%;
  width: 100%;
}

</style>

