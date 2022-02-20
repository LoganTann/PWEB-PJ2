import React from 'react';
import { render } from "react-dom";

export class Geolocalisation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // Demander l'acces à la géolocaliation
    componentDidMount() {
        if (!("geolocation" in navigator)) {
            console.error("Géolocalisation non disponible");
        }
    }

    geolocaliser() {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                console.log(position);
            },
            function (error) {
                console.error("Error Code = " + error.code + " - " + error.message);
            }
        );
    }

    render() {
        return (
            <div>
                <button class="litleButton" type="button" onclick={this.geolocaliser}>
                    <img scr="images/icon_geolocalisation.png" />
                </button>
            </div>
        );
    }
}