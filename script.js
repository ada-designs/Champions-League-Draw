"use strict";

const originalUrna1 = [
  {
    team: "Real Madrid",
    logo: "images/real-madrid.svg",
  },
  {
    team: "Manchester City",
    logo: "images/manchester-city.svg",
  },
  {
    team: "Arsenal",
    logo: "images/arsenal.svg",
  },
  {
    team: "Bayern Munich",
    logo: "images/bayern-munchen.svg",
  },
  {
    team: "AC Milan",
    logo: "images/ac-milan.svg",
  },
  {
    team: "Paris Saint Germain",
    logo: "images/psg.svg",
  },
  {
    team: "Barcelona",
    logo: "images/barcelona.svg",
  },
  {
    team: "Liverpool",
    logo: "images/liverpool.svg",
  },
];

const originalUrna2 = [
  {
    team: "Benfica",
    logo: "images/benfica.svg",
  },
  {
    team: "Atletico Madrid",
    logo: "images/atletico-madrid.svg",
  },
  {
    team: "Borussia Dortmund",
    logo: "images/dortmund.svg",
  },
  {
    team: "Inter",
    logo: "images/internazionale-milano.svg",
  },
  {
    team: "FC Porto",
    logo: "images/fc-porto.svg",
  },
  {
    team: "LOSC Lille",
    logo: "images/losc-lille.svg",
  },
  {
    team: "Chelsea",
    logo: "images/chelsea.svg",
  },
  {
    team: "Juventus",
    logo: "images/juventus.svg",
  },
];

const originalUrna3 = [
  {
    team: "Sevilla",
    logo: "images/sevilla.svg",
  },
  {
    team: "Ajax Amsterdam",
    logo: "images/ajax.svg",
  },
  {
    team: "RB Salzburg",
    logo: "images/redbull-salzburg.svg",
  },
  {
    team: "Atalanta Bergamo",
    logo: "images/atalanta.svg",
  },
  {
    team: "Sporting CP",
    logo: "images/sporting-cp.svg",
  },
  {
    team: "Besiktas",
    logo: "images/besiktas.svg",
  },
  {
    team: "RB Leipzig",
    logo: "images/rb-leipzig.svg",
  },
  {
    team: "Manchester United",
    logo: "images/manchester-united.svg",
  },
];

const originalUrna4 = [
  {
    team: "Club Brugge",
    logo: "images/club-brugge.svg",
  },
  {
    team: "Villareal",
    logo: "images/villareal.svg",
  },
  {
    team: "Shakhtar Donetsk",
    logo: "images/shakhtar-donetsk.svg",
  },
  {
    team: "Young Boys",
    logo: "images/youngboys.svg",
  },
  {
    team: "Dynamo Kiyv",
    logo: "images/dynamo-kiyv.svg",
  },
  {
    team: "Sheriff Tiraspol",
    logo: "images/sheriff-tiraspol.svg",
  },
  {
    team: "Zenit St. Peterburg",
    logo: "images/zenit.svg",
  },
  {
    team: "Malmo FF",
    logo: "images/malmo-ff.svg",
  },
];

const startPage = document.querySelector(".start");
const gridGroup = document.querySelector(".grid");
const generateBtn = document.querySelector(".btn");
const generateAgainBtn = document.getElementById("gen2");

let randomIndex, randomTeam;
let Urna1, Urna2, Urna3, Urna4;

function genRandomTeam(arr) {
  randomIndex = Math.trunc(Math.random() * arr.length);
  console.log(randomIndex);
  randomTeam = arr[randomIndex];
  console.log(randomTeam.team);
  arr.splice(randomIndex, 1);

  return randomTeam;
  //   console.log(randomTeam.logo);
}

function replaceTeam(group, team, randomTeam) {
  document.querySelector(`.gr${group}-t${team}`).textContent = randomTeam.team;
  document.querySelector(`.gr${group}-logo${team}`).src = randomTeam.logo;
}

function resetUrns() {
  Urna1 = [...originalUrna1];
  Urna2 = [...originalUrna2];
  Urna3 = [...originalUrna3];
  Urna4 = [...originalUrna4];
}

generateBtn.addEventListener("click", function () {
  startPage.classList.add("hidden");
  gridGroup.classList.remove("hidden");
  generateAgainBtn.classList.remove("hidden");
  resetUrns();
  runProgram();
});

generateAgainBtn.addEventListener("click", function () {
  resetUrns();
  runProgram();
});

function runProgram() {
  resetUrns();
  // GROUP A

  const gr1RandomTeam1 = genRandomTeam(Urna1);
  const gr1RandomTeam2 = genRandomTeam(Urna2);
  const gr1RandomTeam3 = genRandomTeam(Urna3);
  const gr1RandomTeam4 = genRandomTeam(Urna4);

  // GROUP B

  const gr2RandomTeam1 = genRandomTeam(Urna1);
  const gr2RandomTeam2 = genRandomTeam(Urna2);
  const gr2RandomTeam3 = genRandomTeam(Urna3);
  const gr2RandomTeam4 = genRandomTeam(Urna4);

  // GROUP C

  const gr3RandomTeam1 = genRandomTeam(Urna1);
  const gr3RandomTeam2 = genRandomTeam(Urna2);
  const gr3RandomTeam3 = genRandomTeam(Urna3);
  const gr3RandomTeam4 = genRandomTeam(Urna4);

  // GROUP D

  const gr4RandomTeam1 = genRandomTeam(Urna1);
  const gr4RandomTeam2 = genRandomTeam(Urna2);
  const gr4RandomTeam3 = genRandomTeam(Urna3);
  const gr4RandomTeam4 = genRandomTeam(Urna4);

  // GROUP E

  const gr5RandomTeam1 = genRandomTeam(Urna1);
  const gr5RandomTeam2 = genRandomTeam(Urna2);
  const gr5RandomTeam3 = genRandomTeam(Urna3);
  const gr5RandomTeam4 = genRandomTeam(Urna4);

  // GROUP F

  const gr6RandomTeam1 = genRandomTeam(Urna1);
  const gr6RandomTeam2 = genRandomTeam(Urna2);
  const gr6RandomTeam3 = genRandomTeam(Urna3);
  const gr6RandomTeam4 = genRandomTeam(Urna4);

  // GROUP G

  const gr7RandomTeam1 = genRandomTeam(Urna1);
  const gr7RandomTeam2 = genRandomTeam(Urna2);
  const gr7RandomTeam3 = genRandomTeam(Urna3);
  const gr7RandomTeam4 = genRandomTeam(Urna4);

  // GROUP H

  const gr8RandomTeam1 = genRandomTeam(Urna1);
  const gr8RandomTeam2 = genRandomTeam(Urna2);
  const gr8RandomTeam3 = genRandomTeam(Urna3);
  const gr8RandomTeam4 = genRandomTeam(Urna4);

  replaceTeam(1, 1, gr1RandomTeam1);
  replaceTeam(1, 2, gr1RandomTeam2);
  replaceTeam(1, 3, gr1RandomTeam3);
  replaceTeam(1, 4, gr1RandomTeam4);

  replaceTeam(2, 1, gr2RandomTeam1);
  replaceTeam(2, 2, gr2RandomTeam2);
  replaceTeam(2, 3, gr2RandomTeam3);
  replaceTeam(2, 4, gr2RandomTeam4);

  replaceTeam(3, 1, gr3RandomTeam1);
  replaceTeam(3, 2, gr3RandomTeam2);
  replaceTeam(3, 3, gr3RandomTeam3);
  replaceTeam(3, 4, gr3RandomTeam4);

  replaceTeam(4, 1, gr4RandomTeam1);
  replaceTeam(4, 2, gr4RandomTeam2);
  replaceTeam(4, 3, gr4RandomTeam3);
  replaceTeam(4, 4, gr4RandomTeam4);

  replaceTeam(5, 1, gr5RandomTeam1);
  replaceTeam(5, 2, gr5RandomTeam2);
  replaceTeam(5, 3, gr5RandomTeam3);
  replaceTeam(5, 4, gr5RandomTeam4);

  replaceTeam(6, 1, gr6RandomTeam1);
  replaceTeam(6, 2, gr6RandomTeam2);
  replaceTeam(6, 3, gr6RandomTeam3);
  replaceTeam(6, 4, gr6RandomTeam4);

  replaceTeam(7, 1, gr7RandomTeam1);
  replaceTeam(7, 2, gr7RandomTeam2);
  replaceTeam(7, 3, gr7RandomTeam3);
  replaceTeam(7, 4, gr7RandomTeam4);

  replaceTeam(8, 1, gr8RandomTeam1);
  replaceTeam(8, 2, gr8RandomTeam2);
  replaceTeam(8, 3, gr8RandomTeam3);
  replaceTeam(8, 4, gr8RandomTeam4);
}

runProgram();
// document.querySelector(".gr1-t1").textContent = randomTeam.team;
// document.querySelector(".gr1-logo1").src = randomTeam.logo;
