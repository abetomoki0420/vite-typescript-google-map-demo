import { Loader } from '@googlemaps/js-api-loader';
import { onMounted } from "vue";

const useGoogleMap = (elementId: string,  apiKey: string) => {
  const loader = new Loader({
    apiKey,
    version: "weekly",
    libraries: ["places"]
  })
  
  onMounted( async () => {
    const google = await loader.load()
    
    const elm = document.getElementById(elementId);
  
    if(!elm){
      return;
    }
    
    const mapOptions = {
      center: { lat: 51.532005, lng: -0.177331 },
      zoom: 20
    };
    new google.maps.Map(elm, mapOptions )
  });
}

export default useGoogleMap;
