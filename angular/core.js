angular.module('MainApp', [])

function mainController($scope, $http) {
	$scope.newMessage = {};
	$scope.messages = {};
	$scope.selected = false;

	// Obtenemos todos los datos de la base de datos
	$http.get('/api/message').success(function(data) {
		$scope.messages = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});

	// Función para registrar a una message
	$scope.registrarMessage = function() {
		$http.post('/api/message', $scope.newMessage)
		.success(function(data) {
				$scope.newMessage = {}; // Borramos los datos del formulario
				$scope.messages = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para editar los datos de una message
	$scope.modificarMessage = function(newMessage) {
		$http.put('/api/message/' + $scope.newMessage._id, $scope.newMessage)
		.success(function(data) {
				$scope.newMessage = {}; // Borramos los datos del formulario
				$scope.messages = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función que borra un message message conocido su id
	$scope.borrarMessage = function(newMessage) {
		$http.delete('/api/message/' + $scope.newMessage._id)
		.success(function(data) {
			$scope.newMessage = {};
			$scope.messages = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para coger el message seleccionado en la tabla
	$scope.selectObject = function(message) {
		$scope.newMessage = message;
		$scope.selected = true;
		console.log($scope.newMessage, $scope.selected);
	};
}
