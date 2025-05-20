---
title: Cluedo
type: project
description: Reproduction du jeu de société Cluedo en ligne pour apprendre les bases de données en graphes
date: 2024-10-07T21:26:33.000Z
preview: /img-preview/cluedo_game.png
draft: false
tags:
    - Web
categories:
    - Jeu
---

:::note Note
Le projet sera un jour disponible à jouer en ligne
:::

Pour apprendre les bases de données en graphe dans mon cours à l'IUT, j'ai développé un Cluedo en ligne. Les défis étaient de pouvoir créer un backend permettant de gérer plusieurs parties en même temps et de réaliser une bonne modélisation des données.

Pour cela, j'ai choisi Neo4j pour la base de données et j'ai développé une API avec NestJS, outils avec lesquels je suis à l'aise. Même si le frontend n'était pas aussi important dans l'évaluation, je me suis permis quelques libertés avec SvelteKit (Svelte 4).

# Rappel des règles du Cluedo

Au départ, chaque joueur doit choisir un personnage parmi les 6 proposés. Il jouera le pion associé à ce personnage pendant toute la partie.
Une carte arme, une carte salle et une carte personnage sont mises dans une enveloppe qui constitue la combinaison à trouver (la solution de l'énigme). Le reste des cartes est mélangé et distribué aux joueurs.

À tour de rôle, chaque joueur lance les dés et se déplace dans le manoir. L'objectif est d'entrer dans une des pièces pour y formuler une hypothèse. Une hypothèse consiste à proposer une combinaison suspect-arme-salle ; la salle doit être celle où se trouve le personnage. Les autres joueurs doivent alors vérifier s'ils possèdent une des cartes mentionnées dans l'hypothèse. Si c'est le cas, ils doivent le signaler au joueur qui a fait l'hypothèse de façon discrète.

Quand un joueur pense avoir trouvé la combinaison contenue dans l'enveloppe, il peut faire une accusation dès que c'est son tour. Mais attention, si l'accusation est fausse, il est éliminé de la partie. Il reste toutefois dans le jeu pour pouvoir montrer ses cartes si quelqu'un formule une hypothèse.

# Technologies utilisées

### Websocket

Pour synchroniser les parties, j'ai utilisé un Websocket avec un système de communication par événements. Le client et le serveur ont une liste d'événements qui leur permettent de savoir ce qui se passe dans la partie.

### Neo4j

Dans la base de données en graphe, tous les états de la partie sont stockés et représentés. Cela permet que si l'API crashe, aucun état ne soit perdu.

<img src="$lib/assets/projects/cluedo_graph.png" alt="Cluedo graph" style="background-color: white;" />
<figcaption>Graph avec les nœuds de joueur en rouge, les armes en bleu et la salle de jeu en beige. Les relations permettent de savoir (à partir du graph visible sur l'image) qui possède quelle carte, quel est l'ordre des joueurs, à qui 
est le tour, etc.</figcaption>

### NestJS

Pour la partie serveur, j'ai développé une API avec NestJS. Cela me permet de gérer les requêtes entrantes, les événements du Websocket et la base de données. Elle comporte peu d'endpoints, car quasiment toutes les communications sont gérées par le Websocket.

Pour éviter l'usurpation d'identité d'un joueur sans avoir à créer un compte, j'ai mis en place un système de tokens associés à un pseudo dans une salle. En effet, quand un joueur se connecte avec un pseudo jamais utilisé dans la salle, un token est généré et associé à ce pseudo puis stocké dans son navigateur. S'il doit se reconnecter à un moment donné, il peut reprendre la partie sans problème grâce au token. Mais si quelqu'un d'autre tente de se connecter avec le même pseudo, le token est refusé.