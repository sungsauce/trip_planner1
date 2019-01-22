const mapboxgl = require("mapbox-gl");

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";


module.exports = (type, coords) => {
    let url;
    
    switch (type) {
        case 'activity':
            url = 'http://i.imgur.com/WbMOfMl.png'
            break;
        case 'hotel':
            url = 'http://i.imgur.com/D9574Cu.png'
            break;
        case 'restaurant':
            url = 'http://i.imgur.com/cqR6pUI.png'
            break;
        default:
            url = 'http://i.imgur.com/WbMOfMl.png'
            break;
    }

    markerDomEl.style.backgroundImage = `url(${url})`;

    return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
}
