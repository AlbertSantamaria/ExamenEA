var Objeto = require('./modelo/message');

// Obtiene todos los messages Objeto de la base de datos
exports.getObjeto = function (req, res){
	Objeto.find(
		function(err, message) {
			if (err)
				res.send(err)
				res.json(message); // devuelve todos las Objetos en JSON		
				}
			);
}

// Obtiene todos los messages  de la base de datos
exports.getObjetoU = function (req, res){
	Objeto.find({_id:req.params.message_id},
		function(err, message) {
			if (err)
				res.send(err)
				res.json(message); // devuelve todos los Objetos en JSON		
				}
			);
}

// Guarda un message en base de datos
exports.setObjeto = function(req, res) {
console.log(req);
		// Creo el message Objeto
		Objeto.create({username:req.body.username,date:req.body.date,racename:req.body.racename,content:req.body.content}, 
			function(err, message) {
				if (err)
					res.send(err);
				// Obtine y devuelve todas las messages tras crear uno
				Objeto.find(function(err, message) {
				 	if (err)
				 	res.send(err)
				 	res.json(message);
				});
			});

	}

// Modificamos un message de la base de datos
exports.updateObjeto = function(req, res){
	Objeto.update( {_id : req.params.message_id},
					{$set:{username:req.body.username,date:req.body.date,racename:req.body.racename,content:req.body.content}}, 
					function(err, message) {
						if (err)
							res.send(err);
				// Obtine y devuelve todos las messages tras crear uno 
				Objeto.find(function(err, message) {
				 	if (err)
				 	res.send(err)
				 	res.json(message);
				});
			});
	}

// Elimino un Objeto de la base de Datos
exports.removeObjeto = function(req, res) {
	Objeto.remove({_id : req.params.message_id}, function(err, message) {
		if (err)
			res.send(err);
			// Obtine y devuelve todas las messages tras borrar uno
			Objeto.find(function(err, message) {
				if (err)
				res.send(err)
				res.json(message);
			});
		});
}
