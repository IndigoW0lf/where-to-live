import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons missing
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function MapComponent() {
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/data')
      .then((response) => response.json())
      .then((data) => setCityData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <MapContainer
      center={[37.8, -116.9]}
      zoom={3}
      style={{ height: '400px', width: '80%' }}
      scrollWheelZoom={false} // Disables zooming with the mouse wheel
      doubleClickZoom={false} // Disables zooming on double click
      zoomControl={false} // Removes the zoom control buttons
      touchZoom={false} // Disables zooming with touch gestures
      dragging={false} // Disables dragging to pan the map
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {cityData.map((city, index) => (
        <Marker key={index} position={[city.Lat, city.Lon]}>
          <Popup>
            {city.City}
            <br />
            Population 2022: {city['Population Estimates as of 2022']}
            <br />
            Median Household Income 2022:{' '}
            {city['Median household income (2022)']}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapComponent;
