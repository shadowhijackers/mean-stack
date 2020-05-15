var mongoose = require('mongoose');

function connect(){
	mongoose.connect('mongodb://localhost/pec?authSource=admin', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		user:'pec-admin',
		pass: 'admin@pec'
	}).then(() => console.log('database connection successful'))
		.catch((err) => console.error(err));
}

module.exports = {
	connect: connect
};
