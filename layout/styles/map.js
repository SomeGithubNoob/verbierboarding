function initMap() {
    const verbier = { lat: 46.0961, lng: 7.2286 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: verbier,
    });
    const marker = new google.maps.Marker({
      position: verbier,
      map: map,
    });
  }