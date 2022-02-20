import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, Polyline } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

/**
 * Composant d'affichage des cartes de notre application
 */
export class AppMap extends React.Component {
  /** position Lat-Long-Zoom par défaut (iut de paris) */
  defaultPos = [48.8420233, 2.267862, 13];

  // TODO : supprimer ça un jour
  _defaultPos = [48.8420233, 2.267862, 13];
  get defaultPos() {
    return this._defaultPos;
  }
  set defaultPos(value) {
    this._defaultPos = value;
  }

  ligne = { "coordinates": [[2.35282858072549, 48.85524969780077], [2.352920697661126, 48.85527964436605]], "type": "LineString" };
  lineStyle = { color: 'purple' };

  render() {
    return (
      <MapContainer center={this.defaultPos} zoom={this.defaultPos[2]}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={this.defaultPos}>
          <Popup>L'IUT de Paris des cartes</Popup>
        </Marker>

        <Polyline pathOptions={this.lineStyle} positions={this.ligne.coordinates} />
      </MapContainer>
    );
  }
}
