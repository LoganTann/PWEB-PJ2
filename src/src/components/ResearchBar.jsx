import React from 'react';

export class ResearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            position: {
                latitude: 0,
                longitude: 0,
                zoom: 13
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        //empêche l'action par défaut au moment du submit
        event.preventDefault();

        console.log(event.target.value);

        const neverTrustUserInput = event.target.value;
        const response = await fetch(`https://nominatim.openstreetmap.org/search.php?q=${neverTrustUserInput}&format=jsonv2`);
        const data = await response.json();
        console.log(data);
        this.setState({
            position: {
                latitude: data.lat,
                longitude: data.lon
            }
        });

        this.props.onSearch(this.state.position);
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" placeholder="143 avenue de Versailles 75016 Paris" name="search" />
                </label>
                <input type="submit" value="Rechercher" />
            </form>
        );
    }

}