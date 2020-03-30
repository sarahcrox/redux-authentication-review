import React, {Component} from 'react';
import axios from 'axios';

class Auth extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            registerView: true
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleRegister = () => {
        axios.post('/api/register', {email: this.state.email, password: this.state.password})
        .then(res=> {
            //Place user information somewhere(state, reduxState)
            //React-router-dom moves the user to dash
            this.props.history.push('/dash')
        })
        .catch(err => console.log(err));
    }

    handleToggle = () => {
        this.setState({
            registerView: this.state.registerView
        })
    }

    handleLogin = () => {
        axios.post('/api/login', {email: this.state.email, password: this.state.password})
        .then(res=> {
            //Place user object on state or reduxState

            //Route user to main page
            this.props.history.push('/dash');
        })
        .catch(err => console.log(err));
    }

    render(){
        console.log(this.props)
        return (
            <div>
                <input 
                    value={this.state.value} 
                    name='email' 
                    onChange={(event)=> this.handleInput(event)}/>
                <input 
                    value={this.state.password} 
                    name='password' 
                    onChange={(event)=> this.handleInput(event)}/>
                {this.state.registerView
                ? (<>
                    <button onClick={this.handleRegister}>Register</button>
                    <p>Already have an account? <span onClick={this.handleToggle}>Login here</span></p>
                    </>)
                : (<>
                    <button onClick={this.handleLogin}>Login</button>
                    <p>Don't have an account? <span onClick={this.handleToggle}>Register Here</span></p>
                    </>)}
            </div>
        )
    }
}

export default Auth;