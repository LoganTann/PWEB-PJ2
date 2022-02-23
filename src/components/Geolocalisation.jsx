import React from 'react';

export class Geolocalisation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <a href="#!" className="litleButton" type="button" onClick={this.geolocaliser}>
                    <img alt="geolocaliser" scr="/images/icon_geolocalisation.png" />
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
        navigator.geolocation.getCurrentPosition(
            function (position) {
                console.log(position);
            },
            function (error) {
                console.error("Error Code = " + error.code + " - " + error.message);
            }
        );
    }
}