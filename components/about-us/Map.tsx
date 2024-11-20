// components/Map.tsx

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";

// Map component
const Map = () => {
  const position: LatLngExpression = [51.505, -0.09]; // Example coordinates

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={position}>
        <Popup>
          Our Office Location <br /> 123 Main St, London, UK.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
