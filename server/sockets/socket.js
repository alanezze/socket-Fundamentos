//asi lo extraigo de server.js
const { io } = require('../server')




//saber caundo alguien se conecta al server
//socket io permite especiificar un parametro que ene ste cao es el cliente
//este ovjeto client tiene informacion de la pc en la que estalecio conexion
io.on('connection', (client) => {

    //console.log(client);

    //funciones quie el server emita un mensaje al cliente
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        message: 'bienvenido'
    })


    console.log('usuario conect');
    //codigo que se ejecuta cuando perdes la conexion
    client.on('disconnect', () => {
        console.log('usuario disconnet');
    })

    //escuchar el cliente
    //el objeto que encio desde el cliente lo recibe como parametro en la funcion 
    //en este caso data, ye l callback de la funcion del front
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);


        client.broadcast.emit('enviarMensaje', data)



        //para ver esto en el front hayq ue recibir una respuesta en el callbalck
        /*   if (message.usuario) {
              callback({
                  resp: 'todo salio bien'
              });
          } else {
              callback({
                  resp: 'todo salio mal '
              });
          } */

    })

})