
module.exports = function(app) {

    const UserController = require('../controllers/diary');

    //Get All Diaries.
    app.get('/diary/getAll', UserController.get_all_diary);

    app.get('/diary/get', UserController.get_diary);

    //Create Diary.
    app.post('/diary/create', UserController.post_diary);

    //Delete Diary.
    // app.delete('/diary/delete', UserController.delete_diary);
    
};