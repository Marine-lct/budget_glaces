const express = require('express');
const app = express();

const price = 2.50;
const campers = 15;

app.get('/', (req, res) => {
  res.send(`
    <h1>Valeurs des variables</h1>
    <p>Price: ${price}</p>
    <p>Campers: ${campers}</p>
  `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
