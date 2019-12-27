import React, { Component } from  'react';
import './style.css'
import API from "../../utils/API";

class Welcome extends Component {
    constructor (props){
        super(props)
        this.state = {
            email: "",
            password: "",
            message: "",
            loggedIn: null
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    };

    handleEmailChange(e){
        this.setState({
            email: e.target.value
        })
    };

    handlePasswordChange(e){
        this.setState({
            password: e.target.value
        })
    };

    submitForm(e){
        e.preventDefault();
        API.signIn(this.state, cb => {
            console.log(cb.data);

            if (cb.data.success){
            this.setState({ loggedIn: true});
            console.log(this.state.loggedIn);
        }
        console.log("logged In")
        })
    }


    render(){
        return(
            <div className="hello">
             <div class="welcome">
                 <h1>Hello, Welcome to LightW8</h1>
                 <h5>The simple weight lifting app tracker.</h5>
            </div>
            <div className="box">
                    <div class="signUp">
                        <h2> Sign Up </h2>
                        <button>Click Here</button>
                    </div>

                    <div className="signIn"> 
                        <form onSubmit={this.submitForm}>
                        <h2> Sign In </h2>
                        <input 
                        placeholder="Email"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleEmailChange} 
                        />  
                        <br />
                        <input 
                        placeholder="Password"
                        type="text"
                        value={this.state.password}
                        onChange={this.handlePasswordChange} 
                        />
                        <br />
                        <button type="submit">Log In </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome