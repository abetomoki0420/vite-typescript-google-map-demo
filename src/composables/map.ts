import MapOptions = google.maps.MapOptions
import { Loader } from '@googlemaps/js-api-loader';
import { ref, onMounted } from "vue";

const useGoogleMap = (elementId: string,  apiKey: string, initMapOptions: MapOptions) => {
  const loader = new Loader({
    apiKey,
    version: "weekly",
    libraries: ["places"]
  })
  
  const mapOptions = ref<MapOptions>({})
  mapOptions.value = initMapOptions;
  
  onMounted( async () => {
    const google = await loader.load()
    
    const elm = document.getElementById(elementId);
  
    if(!elm){
      return;
    }
    
    new google.maps.Map(elm, mapOptions.value )
  });
}

export default useGoogleMap;
