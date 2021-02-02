"use strict";
// Concatenate & recent changes

const nom = "Gromat";
const prenom = "Axel";
const nomComplet = nom + prenom;
const age = 26;
const heureDeTravail = 7;
const heureDeTravailParSemaine = 35;
const heureDeTravailCumule = heureDeTravail + heureDeTravailParSemaine;

// 2 exemples de concaténation
console.log("Je m'appelle " + nom + prenom + " et j'ai " + age + " ans");
console.log("Je m'appelle " + nomComplet + " et j'ai " + age + " ans");
console.log(heureDeTravailCumule);

// Recent Changes
console.log(`Je m'appelle ${nomComplet} et j'ai travaillé ${heureDeTravail} heures aujourd'hui`)

