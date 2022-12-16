const express = require("express");
const dotenv= require("dotenv").config();
const PORT = process.env.PORT || 3001
const cors= require("cors")
require ("./database/conexion")
const app = express();
const indexRouter= require("./routes/indexRouter")
const listaRoutes = require("./routes/listaRoutes");
const formularioRoutes= require("./routes/formularioRoutes");
const reservasRoutes = require("./routes/reservasRoutes");


app.use(express.urlencoded ({ extended:true}))
app.use(express.json())
app.use(cors(
/*   {origin: 'http://localhost:3000'} */
  ));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', true);
    res.header('Access-Control-Allow-Credentials', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.use('/',indexRouter)
app.use('/gastronomia',listaRoutes)
app.use('/Contact',formularioRoutes)
app.use('/Reservas',reservasRoutes)







app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});