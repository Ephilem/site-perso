---
title: Cluedo
type: project
description: Reproduction du jeu de société Cluedo en ligne pour apprendre les bases de données en graphes
date: 2024-10-07T21:26:33.000Z
draft: true
tags:
    - Web
categories:
    - Jeu
---

Pour apprendre les bases de données en graph en cours à l'IUT, j'ai du créer un Cluedo en ligne. Les défis étant de pouvoir faire un backend permettant de gérée plusieurs partie en même temps et de réaliser une bonne modélisation des données.

Pour cela j'ai choisie Neo4j pour la base de données et j'ai fait une API avec NestJS, outils où je suis à l'aise. Même si le frontend n'était pas aussi important dans l'évaluation, je me suis permis quelque libertés avec Sveltekit (Svelte 4).

## Rappel des règles du Cluedo

Au départ, chaque joueur doit choisir un personnage parmi les 6 proposés. Il jouera le pion associé à ce personnage pendant toute la partie.
Une carte arme, salle et personnage mis dans une enveloppe qui est la combinaison à trouver (la solution à l'enigme). Les reste des cartes sont mélangées et distribuées aux joueurs.

À tour de rôle, chaque joueur lance les dés et se déplace dans le manoir. L'objectif est d'entrer dans une des pièces pour y formuler une hypothèse. Une hypothèse consiste à proposer une combinaison suspect-arme-salle ; la salle doit être la pièce où se trouve le personnage. Les autres joueurs doivent alors vérifier s'ils possèdent une des cartes mentionnées dans l'hypothèse. Si c'est le cas, ils doivent le signaler au joueur qui a fait l'hypothèse de façon discrète.

Quand un joueur pense avoir trouvé la combinaison contenue dans l'enveloppe, il peut faire une accusation dès que c'est son tour. Mais attention, si l'accusation est fausse, il est éliminé de la partie. Mais il reste toujours dans la partie pour pouvoir montrer ces cartes si quelqu'un formule une hypothèse.

## Modélisation 
