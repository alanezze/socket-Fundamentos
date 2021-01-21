const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
//http para trabajar con soocket ya que no trabaja mediante express
const http = require('http')


const app = express();

//hay que definir el servidor para correr la app
//se manda app como argumento para las funciones de http
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//inicializar el socketIO
//IO esta es la comunicacion del backend
//let io = socketIO(server)
//para exportarlo
module.exports.io = socketIO(server)
    //ai utilizamos el archivo
require('./sockets/socket')



// se cambia el app por server para trabjar
/* app.listen(port, (err) => { */
server.listen(port, (err) => {
    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});