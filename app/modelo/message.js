var mongoose = require('mongoose');

module.exports = mongoose.model('Message', {
	username:String,
	date:String,
	racename:String,
	content:String
});
