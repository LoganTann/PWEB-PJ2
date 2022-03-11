# Des Cartes - Projet PWEBC

*Google Maps pour les vélos / Projet de Prog Web Client (Semestre 4, période C)*

Projet semi libre consistant à réaliser une carte interactive affichant les pistes cyclables parisiennes selon leur type (pistes, bandes cyclables à sens inverse, etc.)

Objectif : effectuer des pages dynamiques via des requêtes AJAX (authentification, affichage OpenData) et l'usage d'une librairie.

Créé avec le framework React et la librairie react-leaflet.

## Screenshots

Cliquer sur les images pour les voir en taille réelle


<table align="center">
<thead>
<tr><th>Formulaire de connection</th><th>Cartes simple</th><th>Carte agrandie, recherche et légende</th></tr>
</thead>
<tbody>
<tr>
<td><a href="https://media.discordapp.net/attachments/763681336165924887/951814322907148318/unknown.png">
<img src="https://media.discordapp.net/attachments/763681336165924887/951814322907148318/unknown.png?width=300&height=201" alt="Projet Des Cartes PwebC - Formulaire de connection"/>
</a></td>
<td><a href="https://media.discordapp.net/attachments/763681336165924887/951814432399425556/unknown.png">
<img src="https://media.discordapp.net/attachments/763681336165924887/951814432399425556/unknown.png?width=300&height=174" alt="Projet Des Cartes PwebC - Carte simple"/>
</a></td>
<td><a href="https://media.discordapp.net/attachments/763681336165924887/951814949171236864/unknown.png">
<img src="https://media.discordapp.net/attachments/763681336165924887/951814949171236864/unknown.png?width=300&height=174" alt="Projet Des Cartes PwebC - Carte agrandie, recherche et légende"/>
</a></td>
</tr>
</tbody>
</table>

## Démarrer

Pour commencer, il faut installer les dépendances en faisant : 

```powershell
$ npm install
```

Pour démarrer le serveur de développement :

```powershell
$ npm start
```

Pour compiler l'application en production :

```powershell
$ npm run build
```