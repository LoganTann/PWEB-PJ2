import React, { useState } from 'react'
import {
    Marker,
    Popup,
    useMapEvents,
} from 'react-leaflet'
import { EventEmitter, EVENTS } from '../../utils/EventEmitter'

/**
 * LocationMarker component : Marqueur automatique affichant la position actuelle de l'utilisateur.
 * Pour le mettre à jour, utiliser l'event LocateBtnClicked via EventEmitter.
 */
export default function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
        locationerror(e) {
            console.error("Erreur de localisation", e);
        }
    })
    // Subscribes the event LocateBtnClicked to the event emitter only when mounted
    React.useEffect(() => {
        EventEmitter.subscribe(EVENTS.LocateBtnClicked, () => {
            map.locate({ setView: true })
        });
    }, [map]);
    return position === null ? null : (
        <Marker position={position}>
            <Popup>Votre position actuelle</Popup>
        </Marker>
    )
}
