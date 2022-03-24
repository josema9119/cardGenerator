/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const paloArriba = document.querySelector(#paloArriba);
const numero = document.querySelector(#numero);
const paloAbajo = document.querySelector(#paloAbajo);

const barajar = [];
const salida = [];
const palos = ["♦", "♥", "♠", "♣"];
const numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const generarCarta = () => {
  for (let numero of numero){
    for (let paloArriba of palo){
      barajar.push({n, p})
    }
  }
  console.log(barajar);
};
generarCarta();



window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
