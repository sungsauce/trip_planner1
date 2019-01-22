const mapboxgl = require("mapbox-gl");

const buildMarker = require('./marker')

// TEST TYPES AND COORDS
const type = 'restaurant'
const coords = [-74.009, 40.705]

mapboxgl.accessToken = "pk.eyJ1Ijoid3N1bmciLCJhIjoiY2pyOGEzdzU0MDBxdzQzbnYxNzB3d3BrdCJ9.oAlj1wLRu-dwEhCG0IoMow";
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
});

const marker = buildMarker(type, coords)
marker.addTo(map)
