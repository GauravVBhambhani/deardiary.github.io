var mongoose = require('mongoose');

module.exports = mongoose.model('UserInfo', {
    firstName: {type : String, default: ''},
    lastName: {type : String, default: ''},
    email: {type: String, unique: true, default: ''},
    password: {type: String, default: ''},
    diary: {type: Object},
});