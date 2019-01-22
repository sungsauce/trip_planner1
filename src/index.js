// const mapboxgl = require('mapbox-gl')

// mapboxgl.accessToken = "pk.eyJ1Ijoid3N1bmciLCJhIjoiY2pyODk5cGRtMDBobzN5bnZpMW1laW5lbyJ9.IdwwimO8TMEvW04eZlkpCA";

// const map = new mapboxgl.Map({
//   container: "map",
//   center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
//   zoom: 12, // starting zoom
//   style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
// });

// // const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// // markerDomEl.style.width = "32px";
// // markerDomEl.style.height = "39px";
// // markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// // new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);


const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1Ijoid3N1bmciLCJhIjoiY2pyOGEzdzU0MDBxdzQzbnYxNzB3d3BrdCJ9.oAlj1wLRu-dwEhCG0IoMow";
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
});

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);