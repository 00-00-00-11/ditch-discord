import React from 'react'
import { createStore } from 'redux'
import './Login.css'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        alert('A token was submitted: ' + this.state.value);

        event.preventDefault();
    }

    render() {
        //find action use later
        return (
            <div className="section-login">
                <h1>authenticate</h1>

                <form onSubmit={ this.handleSubmit }>
                    <label for="token" id="tokenlabel">token:</label>
                    <br></br>
                    <input type="text" id="token" name="token" value={this.state.value} onChange={this.handleChange}></input>
                    <br></br>
                    <br></br>
                   <input type="submit" value="submit"></input>
                </form> 
            </div>
        )
    }
}

export default Login