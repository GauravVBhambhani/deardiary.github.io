import React from "react";
import './Signup.css';
import $ from 'jquery';
import { Link } from "react-router-dom";

// var valid = 0;

function validate_uname() {
    var uname_val = $("#uname").val();
    if (uname_val === "") {
        $("#uname").css({ "border": "1px solid red" });
        $("#uname_error").text("Name cannot be empty!");
        $("#uname_error").css({ "margin-top": "5px" });
        // valid = 0;
    }
    else if (/^[a-zA-Z0-9- ]*$/.test(uname_val) === false) {
        $("#uname").css({ "border": "1px solid red" });
        $("#uname_error").text("Username cannot contain special characters!");
        $("#uname_error").css({ "margin-top": "5px" });
        // valid = 0;
    }
    else if (uname_val.length < 5) {
        $("#uname").css({ "border": "1px solid red" });
        $("#uname_error").text("Username should have more than 5 characters!");
        $("#uname_error").css({ "margin-top": "5px" });
        // valid = 0;
    }
    else {
        $("#uname").css({ "border": "1px solid grey" });
        $("#uname_error").text("");
        $("#uname_error").css({ "margin-top": "0px" });
        // valid++;
    }
}

function validate_email() {
    var email_val = $("#email").val();
    if (email_val === "") {
        $("#email").css({ "border": "1px solid red" });
        $("#email_error").text("Email cannot be empty!");
        $("#email_error").css({ "margin-top": "5px" });
        // valid = 0;
    }
    else if (/^(\W|^)[\w.+-]*@gmail\.com(\W|$)$/.test(email_val) === false) {
        $("#email").css({ "border": "1px solid red" });
        $("#email_error").text("Email must be a valid Gmail address!");
        $("#email_error").css({ "margin-top": "5px" });
        // valid = 0;
    }
    else {
        $("#email").css({ "border": "1px solid grey" });
        $("#email_error").text("");
        $("#email_error").css({ "margin-top": "0px" });
        // valid++;
    }
}

function validate_pass() {
    var pass_val = $("#pass").val();
    if (pass_val === "") {
        $("#pass").css({ "border": "1px solid red" });
        $("#pass_error").text("Password cannot be empty!");
        $("#pass_error").css({ "margin-top": "5px" });
        $("#pass").val("");
        // valid = 0;
    }
    else if (/^[a-zA-Z0-9- ]*$/.test(pass_val) === true) {
        $("#pass").css({ "border": "1px solid red" });
        $("#pass_error").text("Password must contain at least 1 special character(s)!");
        $("#pass_error").css({ "margin-top": "5px" });
        $("#pass").val("");
        // valid = 0;
    }
    else if (pass_val.length < 5) {
        $("#pass").css({ "border": "1px solid red" });
        $("#pass_error").text("Password should have more than 5 characters!");
        $("#pass_error").css({ "margin-top": "5px" });
        $("#pass").val("");
        // valid = 0;
    }
    else {
        $("#pass").css({ "border": "1px solid grey" });
        $("#pass_error").text("");
        $("#pass_error").css({ "margin-top": "0px" });
        // valid++;
    }
}

// function validate() {
//     if (valid === 3) {
//         return true;
//     }
//     else {
//         valid = 0;
//         alert("Invalid Entry!");
//         return false;
//     }
// }

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { firstName, lastName, email, password } = this.state;
        console.log(firstName, lastName, email, password);

        fetch("http://localhost:3002/user/signup", {
            method: "POST",
            crossDomain: true,

            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },

            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password,
            }),

        }).then((res) => res.json()).then((data) => {
            console.log(data, "userRegister");

            if (data.status === "success") {
                alert("Signup successful");
                window.localStorage.setItem("token", data.data);
                window.location.href = './dashboard';
            }
        });
    }

    render() {

        return (
            <div>

                <div className="absolute top-0 right-0 flex px-5 pt-5"><p className="px-2 pt-3 text-sm">Already a user?</p><Link to="/signin"><button className="text-black bg-gray-300 rounded font-semibold w-20 h-10 text-sm hover:bg-gray-400" type="submit">Sign In</button></Link></div>

                <div className="sign-up-section font-medium text-lg">

                    <form onSubmit={this.handleSubmit}>

                        <h1 className="font-semibold text-3xl">Create your<br />new account</h1>

                        <div className="name-inputs">
                            <div className="relative">
                                <p>First Name</p>
                                <input
                                    type="firstName"
                                    className="form-control-1 bg-gray-200"
                                    onChange={(e) => this.setState({ fname: e.target.value })}
                                    onBlur={validate_uname}
                                    id="uname"
                                />
                                <br />
                                <span className="text-red-500 error_msg" id="uname_error"></span>
                            </div>


                            <div className="last-name-div">
                                <p>Last Name</p>
                                <input
                                    type="lastName"
                                    className="form-control-1 bg-gray-200"
                                    onChange={(e) => this.setState({ lname: e.target.value })}
                                    onBlur={validate_uname}
                                />
                                <br />
                                <span className="text-red-500 error_msg" id="uname_error"></span>
                            </div>
                        </div>

                        <p>Email</p>
                        <input
                            type="email"
                            className="form-control-2 bg-gray-200"
                            onChange={(e) => this.setState({ email: e.target.value })}
                            onBlur={validate_email}
                            id="email"
                        />

                        <span className="text-red-500 error_msg" id="email_error"></span>

                        <p>Password</p>
                        <input
                            type="password"
                            className="form-control-2 bg-gray-200"
                            id="pass"
                            onChange={(e) => this.setState({ password: e.target.value })}
                            onBlur={validate_pass}
                        />

                        <span className="text-red-500 error_msg" id="pass_error"></span>

                        <div className="pt-5">
                            <button className="text-white bg-pink-500 w-60 h-10 rounded text-sm" type="submit"> Create Account </button>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default Signup