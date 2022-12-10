exports.validateEmail = function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

exports.validatePassword = function validatePassword(pass) {
    if (pass.length < 8){
        return "Length must be greater than 8"
    }  
    if(!pass.match(/.*?[A-Z]/)) {
        return "Must contain at least one upper case letter"
    }
    if(!pass.match(/.*?[a-z]/)) {
        return "Must contain at least one lower case letter"
    }
    if(!pass.match(/.*?[0-9]/)) {
        return "Must contain at least one number"
    }
    if(!pass.match(/.*?[#?!@$%^&*-]/)) {
        return "Must contain at least one special character"
    }
    return "True"
}

exports.validateName = function validateName(name) {
    var re = /[a-zA-Z]/;
    return re.test(name);
}