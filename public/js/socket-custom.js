 /* io aparece desde la librerioa io.js */
 /* io es el mismo objeto para el front y back y funcionan casi iguaes y es el encargado de la comunicacion */
 var socket = io()
     //codigo que se ejecuta cuando encuentra una conexion
     /* Funcion: msj de apretura de Canal de comunicacion  */
 socket.on('connect', function() {
     console.log('conmectado');
 })

 //codigo qeu se ejecuta cuando perders la conecion
 /* Funcion: mensaje de desconection */
 socket.on('disconnect', function() {
     console.log('desconectado');
 })


 //para comunicar el cliente al servidor siempre se utiliza el objketo socket
 //los emit emvian informacion y los on escuchan sucesos
 socket.emit('enviarMensaje', {
         usuario: 'alan',
         message: 'hola Mundo'
     }
     //la funcion es para verificar si el envio fue correcto}
     //hay qeu configurarla desde el servidor
     ,
     function(resp) {
         console.log('respuesta server', resp);
     }
 )


 //escuchar indromacion del lado del server
 socket.on('enviarMensaje', function(message) {
     console.log(message);
 })