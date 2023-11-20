const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');

const app = express();
const port = 3000;

// Documento Swagger como JSON
const swaggerDocument = JSON.parse(fs.readFileSync('./config/swagger.json', 'utf8'));

// Visualizar documentacion de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});

