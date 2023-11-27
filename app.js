const express = require('express');
const app = express();

const price = 2.50;
const campers = 15;
let taxRate = 0.08;
const budget = 40;
let total = price * campers * (1 + taxRate); //inclus la taxe

let totalExceedsBudget = total > budget; // Si le total depasse le budget

app.get('/', (req, res) => {
  res.send(`
    <h1>Valeurs des variables</h1>
    <p>Price: ${price}</p>
    <p>Campers: ${campers}</p>
    <p>La taxe de vente est de 8 %: ${taxRate}</p>
    <p>Budget: ${budget}</p>
    <p>Le total dépasse t'il le budget ? : ${totalExceedsBudget}</p>
    <p>Total avec la taxe: ${total}</p>
  `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
