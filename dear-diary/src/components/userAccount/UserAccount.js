import React from "react";

class UserAccount extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userAccount: "",
        };
    }

    componentDidMount() {
        fetch("http://localhost:3002/userAccount", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token")
            }),
        }).then((res) => res.json())
            .then((data) => {
                console.log(data, "userAccount");
                this.setState({userAccount: data.data})
            });
    }

    render() {
        return (
            <div>
            <center>
            <div>
                <h1 className="font-bold text-2xl">Welcome To Dear Diary</h1>
                <p>It's a beautiful day!</p>
                
            </div>
            </center>
            <p><b>{this.state.userAccount.email}</b></p>
            </div>
        );
    }

}

export default UserAccount