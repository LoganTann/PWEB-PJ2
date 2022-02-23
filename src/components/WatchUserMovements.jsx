import React, { Component } from "react";
import { render } from "react-dom";

export class WatchUserMovements extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>Je sais pas comment l'afficher !?</h1>
            </div>
        );
    }

    followUsersPosition(e) {
        e.preventDefault();
        if (!navigator.geolocation) {
            throw "Geolocation is not supported by your browser";
        }
        navigator.geolocation.watchPosition(
            function (position) {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
            },
            function (error) {
                console.error("Error Code = " + error.code + " - " + error.message);
            }
        );
    }
}