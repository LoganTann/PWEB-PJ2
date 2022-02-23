import React from 'react';
import logoGeoloc from '../images/icon_geolocalisation.png';

export class Geolocalisation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <a href="#!" className="litleButton" type="button" onClick={this.geolocaliser.bind(this)}>
                    <img alt="geolocaliser" src={logoGeoloc} width="30px" height="auto" />
                </a>
            </div>
        );
    }

    // Demander l'acces à la géolocaliation
    componentDidMount() {
        if (!("geolocation" in navigator)) {
            console.error("Géolocalisation non disponible");
        }
    }

    geolocaliser(e) {
        e.preventDefault();
        function whenReceivePosition(position) {
            this.props.onReceiveUserPosition(position);
        }
        navigator.geolocation.getCurrentPosition(
            whenReceivePosition.bind(this),
            function (error) {
                console.error("Error Code = " + error.code + " - " + error.message);
            }
        );
    }
}