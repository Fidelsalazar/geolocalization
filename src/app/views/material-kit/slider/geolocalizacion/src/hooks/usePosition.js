import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, Marker, TileLayer, useMapEvent } from 'react-leaflet';
import AppButton from 'app/views/material-kit/buttons/ButtonGeo/AppButton';

function AppPosition() {
  const [position, setPosition] = useState(null);
  const markerRef = useRef(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setPosition([latitude, longitude]);
    });
  }, []);

  function handleMarkerDragend() {
    const marker = markerRef.current;
    if (marker != null) {
      const newPosition = marker.getLatLng();
      setPosition(newPosition);
      console.log(`New position: ${newPosition}`);
    }
  }

  function handleMapClick(event) {
    const newPosition = event.latlng;
    setPosition(newPosition);
    console.log(`New position: ${newPosition}`);
  }

  function handleSaveClick() {
    alert(`Coordenadas guardadas: ${position}`);
  }

  return (
    <MapContainer center={[20.02083 , -75.82667]} zoom={11} style={{ height: '100vh' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {position && (
        <Marker position={position} draggable={true} eventHandlers={{ dragend: handleMarkerDragend }} ref={markerRef} />
      )}
      <MapClickHandler onClick={handleMapClick} />
      <SaveButton onClick={handleSaveClick} />
    </MapContainer>
  );
}

function MapClickHandler({ onClick }) {
  useMapEvent('click', onClick);
  return null;
}

function SaveButton({ onClick }) {
  return (
    <AppButton onClick={onClick} />
  );
}

export default AppPosition;
