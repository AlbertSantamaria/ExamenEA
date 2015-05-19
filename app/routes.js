var Objeto = require('./modelo/message');
var Controller = require ('./controller');

module.exports = function(app) {

	// devolver todos los Objetos
	app.get('/api/message', Controller.getObjeto);
	// Crear una nueva Objeto
	app.post('/api/message', Controller.setObjeto);
	// Get de una Objeto
	app.get('/api/message/:message_id', Controller.getObjetoU);
	// Modificar los datos de una Objeto
	app.put('/api/message/:message_id', Controller.updateObjeto);
	// Borrar una Objeto
	app.delete('/api/message/:message_id', Controller.removeObjeto);
	// application 
	app.get('*', function(req, res) {
		res.sendfile('./angular/index.html'); // Carga única de la vista
	});
};
