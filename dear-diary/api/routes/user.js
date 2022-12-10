
module.exports = function(app) {

    const UserController = require('../controllers/user');

    //Get All Users.
    app.get('/user/getAll', UserController.get_all_user);

    //Get All Users.
    app.get('/user/get', UserController.get_user);

    //Create User.
    app.post('/user/create', UserController.post_user);

    //Edit User.
    // app.put('/user/edit', UserController.user_edit_user);

    //Delete User.
    app.delete('/user/delete', UserController.delete_diary);
    
};