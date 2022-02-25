import "./App.css";
import React from "react";
import { AppMap } from "./components/AppMap";
import { ResearchBar } from "./components/ResearchBar";
import { Geolocalisation } from "./components/Geolocalisation";

/**
 * Composant principal de notre application
 */
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 48.8420233,
            lon: 2.267862,
        };
    }

    componentDidMount() {
        document.title = "Des Cartes (projet Pweb)";
    }

    onSearch(coord) {
        this.setState({
            lat: coord.lat,
            lon: coord.lon,
        });
    }

    onReceiveUserPosition(position) {
        console.log("Position reçue : ", position);
        this.setState({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
        });
    }

    render() {
        return (
            <div className="App">
                <ResearchBar onSearch={this.onSearch.bind(this)} />
                <AppMap lat={this.state.lat} lon={this.state.lon}></AppMap>
                <Geolocalisation
                    onReceiveUserPosition={this.onReceiveUserPosition.bind(
                        this
                    )}
                />
            </div>
        );
    }
}
