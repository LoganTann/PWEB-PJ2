import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

// Un problème avec react leaflet empêche d'afficher correctement les icones
// Quickfix copié collé à cette adresse : https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-761806673 
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
// Fin du quickfix

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
