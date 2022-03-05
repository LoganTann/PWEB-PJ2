import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import PistesCyclables from "./mapComponents/PistesCyclables";
import Localisation from "./mapComponents/Localisation";

/**
 * Composant d'affichage des cartes de notre application
 */
export class AppMap extends React.Component {
    ligne = {
        coordinates: [
            [48.841907, 2.2654483],
            [48.85527964436605, 2.352920697661126],
        ],
        type: "LineString",
    };
    lineStyle = { color: "purple" };

    constructor(props) {
        super(props);
        this.state = {
            pistes: null,
        };
    }

    render() {
        return (
            <MapContainer center={[this.props.lat, this.props.lon]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <Marker position={[this.props.lat, this.props.lon]}>
                    <Popup>Votre recherche (Par défaut : l'IUT de Paris)</Popup>
                </Marker>

                <Localisation />
                <PistesCyclables />
            </MapContainer>
        );
    }
}
