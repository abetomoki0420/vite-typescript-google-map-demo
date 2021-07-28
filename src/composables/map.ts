import { onMounted } from "vue";

const useGoogleMap = (apiKey: string) => {
  onMounted( () => {
    const script = document.createElement('script')
  
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    document.head.appendChild(script);
  
    (window as any).initMap = initMap;
  });
  
  const initMap = () => {
    const mapOptions = {
      center: { lat: 51.532005, lng: -0.177331 },
      zoom: 20
    };
  
    const mapDiv = document.getElementById("map")
    if(mapDiv){
      new google.maps.Map(mapDiv, mapOptions);
    }
  }
  
}

export default useGoogleMap;
