import React from 'react';
import logoGeoloc from '../images/icon_geolocalisation.png';
import { EventEmitter, EVENTS } from '../utils/EventEmitter';
/**
 * <Geolocalisation> - Affiche un bouton notifiant le LocationMarker de se mettre à jour.
 */
export class Geolocalisation extends React.Component {
    render() {
        return (
            <div>
                <a href="#!" className="litleButton" type="button" onClick={() => EventEmitter.dispatch(EVENTS.LocateBtnClicked)}>
                    <img alt="geolocaliser" src={logoGeoloc} width="30px" height="auto" />
                </a>
            </div>
        );
    }
}