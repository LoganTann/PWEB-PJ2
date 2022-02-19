import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

export class AppMap extends React.Component {
  
  defaultPos = [48.8420233, 2.267862, 13];
  render() {
    return (
      <MapContainer center={this.defaultPos} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={this.defaultPos}>
          <Popup>L'IUT de Paris des cartes</Popup>
        </Marker>
      </MapContainer>
    );
  }
}
