const { config } = require('dotenv');
const express= require('express');
const app=express();
const path =require('path')
//dotenv es una dependencia que nos permite acceder a las variables de entorno dentro del codigo
require('dotenv'),config();
const PORT=process.env.PORT
//middlewares
app.set('view engine','ejs');
//Permite usar html con lec tura del ejs para procesar los scripts internos
app.engine('html',require('ejs').renderFile)
// routes
app.use(require('./routes/index'));
//static files

app.use(express.static(path.join(__dirname, 'public')))

//listening the server
app.listen(PORT,()=>{
console.log('Server Run on '+PORT)
})
