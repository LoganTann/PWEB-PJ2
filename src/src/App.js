import './App.css';
import React from 'react';
import { AppMap } from './components/AppMap';
import { ResearchBar } from './components/ResearchBar';
import { Geolocalisation } from './components/Geolocalisation';

/**
 * Composant principal de notre application
 */
export class App extends React.Component {
  componentDidMount() {
    document.title = 'Des Cartes (projet Pweb)';
  }

  onSearch(val) {
    console.log("Le composant ResearchBar m'a envoyé ça : ", val);
  }

  render() {
    return (
      <div className="App">
        <ResearchBar onSearch={this.onSearch} />
        <AppMap></AppMap>
      </div>
    );
  }
}