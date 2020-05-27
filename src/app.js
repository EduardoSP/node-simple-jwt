const express = require('express');
const app     = express();

app.use(express.json()); // con esta linea es capaz de recibir un json y convertir en un objeto de javascript
app.use(express.urlencoded({extended:false}));// el servidor es capaz de entender los datos que se envian de un formulario y convertirlo en un objeto de javascript

app.use(require('./controllers/authController'));


module.exports = app;