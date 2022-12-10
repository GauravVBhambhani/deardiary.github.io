var mongoose = require('mongoose');
// var DiaryDocuments = require('./diaryDocument');

module.exports = mongoose.model('Diary', {
    // document: {type: String},
    // diaryResult: {type: String},
    // date: {type: Date},
    // email: {type: String},
    _id: {String},
    data: {type: Object},
});