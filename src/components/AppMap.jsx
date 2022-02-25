import React, { useState } from 'react';
import {
  useMapEvents, MapContainer, Marker, Popup, TileLayer, Polyline, LayerGroup, SVGOverlay
} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import LocationMarker from "./markers/LocationMarker";
import { getPistesCyclables } from "../utils/parisOpenData";

/**
 * Composant d'affichage des cartes de notre application
 */
export class AppMap extends React.Component {
  ligne = { "coordinates": [[48.841907, 2.2654483], [48.85527964436605, 2.352920697661126]], "type": "LineString" };
  lineStyle = { color: 'purple' };

  render() {
    const pistes = getPistesCyclables();
    return (
      <MapContainer center={[this.props.lat, this.props.lon]} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={[this.props.lat, this.props.lon]}>
          <Popup>Votre recherche</Popup>
        </Marker>
        <LocationMarker />
        <LayerGroup>
          {pistes.map(piste => (
            <Polyline pathOptions={this.lineStyle} positions={piste} key={piste} />
          ))}
        </LayerGroup>

      </MapContainer>
    );
  }
}
