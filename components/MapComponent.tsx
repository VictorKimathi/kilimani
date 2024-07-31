import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

interface MapComponentProps {
  location?: {
    lat: number;
    lng: number;
  };
}

const MapComponent: React.FC<MapComponentProps> = ({ location }) => {
  const [currentPosition, setCurrentPosition] = useState<[number, number]>([51.505, -0.09]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentPosition([position.coords.latitude, position.coords.longitude]);
      });
    }
  }, []);

  return (
    <MapContainer center={currentPosition} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={currentPosition}>
        <Popup>You are here.</Popup>
      </Marker>
      {location && (
        <Marker position={location}>
          <Popup>Location of the event.</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapComponent;
