import './App.css';
import React from 'react';
import { AppMap } from './components/AppMap';

/**
 * Composant principal de notre application
 */
export class App extends React.Component {
  componentDidMount() {
    document.title = 'Des Cartes (projet Pweb)';
  }

  render() {
    return (
      <div className="App">
        <AppMap></AppMap>
      </div>
    );
  }
}