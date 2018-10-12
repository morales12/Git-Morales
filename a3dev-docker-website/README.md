# Prérequis

Avoir installé :

* NodeJS
* NPM
* Typescript

# Installation

Récupération du projet

````bash
git clone
cd docker-website
````

Installation des dépendances
````bash
npm install
````

Compilation
````bash
tsc --outdir build index.ts

node build/index.js
````

Démarrage du serveur
````bash
node build/index.js
````