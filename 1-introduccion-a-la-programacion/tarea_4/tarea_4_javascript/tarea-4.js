"use strict";
const numeroIf = 7;
let numeroWhile = 0;
let numeroDoWhile = 0;
let numeroFor = 0;
const estacion = "otoño";

if (numeroIf > 0) {
  console.log("Es positivo");
} else if (numeroIf < 0) {
  console.log("Es negativo");
} else {
  console.log("Es cero");
}

while (numeroWhile < 3) {
  numeroWhile = numeroWhile + 1;
  console.log("numeroWhile: " + numeroWhile);
}

do {
  numeroDoWhile = numeroDoWhile + 1;
  console.log("numeroDoWhile: " + numeroDoWhile);
} while (numeroDoWhile < 3);

for (let i = 0; i < 3; i++) {
  numeroFor = numeroFor + 1;
  console.log("numeroFor: " + numeroFor);
}

switch (estacion) {
  case "primavera":
    console.log("Es primavera");
    break;
  case "verano":
    console.log("Es verano");
    break;
  case "otoño":
    console.log("Es otoño");
    break;
  case "invierno":
    console.log("Es invierno");
    break;
  default:
    console.log("No hay seleccionada ninguna estación");
}
