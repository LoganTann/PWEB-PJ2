import React, { useState, useEffect } from "react";
import { useMapEvents, LayerGroup, Polyline } from "react-leaflet";
import { getPistesCyclables } from "../../utils/parisOpenData";

/**
 * LocationMarker component : Marqueur automatique affichant la position actuelle de l'utilisateur.
 * Pour le mettre à jour, utiliser l'event LocateBtnClicked via EventEmitter.
 */
export default function PistesCyclables() {
  const [positions, setPositions] = useState(null);

  const map = useMapEvents({
    zoomend(e) {
      console.log("Vous avez changé le niveau de zoom", e);
    },
    resize(e) {
      console.log("Vous avez redimensionné la carte", e);
    },
    moveend(e) {
      console.log("Vous avez déplacé la carte", e);
    },
  });

  useEffect(() => {
    getPistesCyclables().then((data) => {
      setPositions(data);
    });
    // mettre un tableau vide pour executer une seule fois
  }, []);
  
  const limeOptions = { color: 'blue', weight: 2, opacity: 0.5 };

  return positions === null ? null : (
    <LayerGroup>
      {
        positions.map((piste) => (
          <Polyline pathOptions={limeOptions} positions={piste.coordinates} key={piste.id}/>
        ))
      }
    </LayerGroup>
  );
}
