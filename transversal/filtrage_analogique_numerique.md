---
layout: default
title: Fonction filtrage, structures de filtres analogiques et numériques
parent: Connaissances transversales
nav_order: 3
---



# Fonction filtrage, structures de filtres analogiques et numériques


## Nature des filtres d’ordres 1 ou 2

> - Savoir identifier la nature d’un filtre et son ordre à partir de sa fonction de transfert (passe haut, passe-bas, passe bande).
> - Savoir choisir la nature d’un filtre à partir du rôle qui lui est donné par un cahier des charges (passe haut, passe-bas, passe bande).
> - Savoir identifier la nature d’un filtre à partir de son diagramme de Bode (passe haut, passe-bas, passe bande).
> - Savoir identifier la nature d’un filtre à partir de sa courbe d’amplification en fonction de la fréquence (ou la fréquence réduite : f/fe) pour un filtre numérique.
> - Savoir élaborer le gabarit d’un filtre à partir d’un cahier des charges : représentation et annotation en vue de l’utilisation d’un logiciel de conception.


## Transmittance isochrone

> - Savoir déterminer, à partir d’un schéma électrique, l’expression de la transmittance isochrone dans le cas d’un filtre du premier ordre et l’écrire sous sa forme canonique pour déterminer ses caractéristiques.


## Diagramme de Bode

> - Savoir déterminer le gain (en dB) à une fréquence donnée à partir du diagramme de
  Bode d’un filtre.
> - Savoir calculer l’amplification à partir du gain (en dB) et réciproquement.
> - Savoir déterminer les caractéristiques du signal de sortie d’un filtre à partir de celles du signal d’entrée et du diagramme de Bode du filtre (amplitude et phase).
> - Connaître et savoir différencier gain statique, gain à la fréquence propre et gain en hautes fréquences.
> - Savoir déterminer la (ou les) fréquence(s) de coupure à partir de la courbe de gain ou de la courbe d’amplification.
> - Savoir tracer le diagramme asymptotique (à partir du diagramme de Bode : gain et
  phase) et l’exploiter pour déterminer la fréquence propre, la pente des asymptotes
  (en dB/décade et dB/octave), et l’ordre du filtre.
> - Connaître l’effet du coefficient d’amortissement sur le diagramme de Bode pour un
  filtre du second ordre.
> - Déterminer le spectre du signal de sortie d’un filtre à partir de son diagramme de
  Bode et du spectre du signal périodique d’entrée.
> - *Vérifier qu’un filtre répond (ou pas) à un cahier des charges en comparant son
  diagramme de Bode au gabarit imposé.*
> - *Proposer et mettre en œuvre un protocole expérimental pour déterminer la nature
  d’un filtre.*
> - *Proposer et mettre en œuvre un protocole expérimental pour déterminer la ou les
  fréquence(s) de coupure d’un filtre.*
> - *Proposer et mettre en œuvre un protocole expérimental pour relever le diagramme de
  Bode d’un filtre.*


## Réponse temporelle à un échelon

> - Savoir représenter un signal de type échelon en fonction du temps.
> - Savoir identifier le régime transitoire et le régime établi (dit aussi permanent).
> - Savoir déterminer l’amplification statique T0 d’un filtre passe-bas à partir de sa réponse à un échelon.
> - Savoir déterminer la nature d’un filtre à partir de sa réponse indicielle.
> - Savoir déterminer la constante de temps 𝜏 d’un système du premier ordre à partir de sa réponse à un échelon et connaître sa relation avec sa pulsation propre ω0.
> - Savoir mesurer le temps de réponse à 5% à partir de sa réponse à un échelon.
> - Savoir discriminer un filtre du premier ordre d’un filtre du second ordre (tangente à l’origine, dépassement).
> - Savoir déterminer les caractéristiques de la fonction de transfert d’un filtre du premier ordre (T0, 𝜏, ω0) et du second ordre (T0, m, ω0) à partir de sa réponse à un échelon et d’abaques.
> - *Proposer et mettre en œuvre un protocole expérimental pour relever la réponse d’un
  système à un échelon.*


## Filtrage numérique

> - Savoir identifier une équation de récurrence récursive ou non récursive.
> - Savoir représenter le schéma structurel associé à une équation de récurrence et réciproquement.
> - Savoir qu’une équation de récurrence non récursive traduit le fonctionnement d’un filtre à réponse impulsionnelle finie (RIF).
> - Savoir qu’un filtre à réponse impulsionnelle finie (RIF) est toujours stable.
> - Savoir qu’un filtre à réponse impulsionnelle infinie (RII) peut-être instable.
> - Savoir identifier un filtre numérique stable ou instable à partir de sa réponse impulsionnelle ou indicielle.
> - Savoir déterminer la ou les fréquences de coupure à -3 dB à partir de la courbe de l’amplification en fonction de la fréquence ou fréquence réduite.
> - Savoir justifier la limite de tracé en abscisse à f=fe/2 ou f/fe = 1/2 de la courbe d’amplification (fe étant la fréquence d’échantillonnage).
> - *Mettre en œuvre un filtre numérique défini à partir d’un cahier des charges et vérifier que la courbe d’amplification (ou courbe de gain) s’inscrit bien dans le gabarit défini dans le cahier des charges.*
