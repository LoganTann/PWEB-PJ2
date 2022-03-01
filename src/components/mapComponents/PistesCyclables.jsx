import React, { useState } from "react";
import { useMapEvents, LayerGroup, GeoJSON } from "react-leaflet";
import { getPistesCyclables } from "../../utils/parisOpenData";

/**
 * LocationMarker component : Marqueur automatique affichant la position actuelle de l'utilisateur.
 * Pour le mettre à jour, utiliser l'event LocateBtnClicked via EventEmitter.
 */
export default function PistesCyclables() {
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
  return (
    <LayerGroup>
      <GeoJSON data={getPistesCyclables()} />
    </LayerGroup>
  );
}
