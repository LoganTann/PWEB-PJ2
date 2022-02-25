import React from 'react';

export class ResearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resultatsRecherche: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        //empêche l'action par défaut au moment du submit
        event.preventDefault();
        const neverTrustUserInput = event.target.search.value;
        console.log("UserInput :", neverTrustUserInput);
        const response = await fetch(`https://nominatim.openstreetmap.org/search.php?q=${neverTrustUserInput}&limit=4&format=jsonv2`);
        const data = await response.json();
        let propositions = data;

        this.setState({
            resultatsRecherche: propositions
        });

    }

    donnerPosition(lattitude, longitude) {
        this.props.onSearch({ lat: lattitude, lon: longitude });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" placeholder="143 avenue de Versailles 75016 Paris" name="search" />
                </label>
                <input type="submit" value="Rechercher" />
                <ul>
                    {
                        this.state.resultatsRecherche?.map((resultat) => (
                            <li key={resultat.osm_id} onClick={() => this.donnerPosition(resultat.lat, resultat.lon)}><a href='#!'>{resultat.display_name}</a></li>
                        ))
                    }
                </ul>
            </form>
        );
    }

}