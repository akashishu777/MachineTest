import React from 'react'
import Route from './Route';
import axios from 'axios';

class App extends React.Component {

    constructor() {
        super() 
        this.state = {
            username: '',
            password: '',
            loginState: false
        }
    }

    handleUsername = (e) => {
        this.setState({username: e.target.value});
    }

    handlepassword = (e) => {
        this.setState({password: e.target.value});
    }

    handleLogin = () => {
        if(this.state.username === '' && this.state.password ==='') {
            return false;
        }
        const data = {
            user: this.state.username,
            pass: this.state.password
        }
          
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
        
        axios.post('http://localhost:3000/api/login', data, axiosConfig)
            .then((res) => {
                console.log("RESPONSE RECEIVED: ", res.data);
                if(res.data !== false) {
                    console.log('inn local storage');
                    localStorage.setItem("token", JSON.stringify(res.data));
                    this.setState({loginState: !this.state.loginState});
                } else {
                    alert('Login failed for user: ' + this.state.username);
                }
            })
            .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })
    }  
    
    render() {
        const Router = this.state.loginState && <Route user={this.state.username}
                                                       pass={this.state.password}/>;
        return (
        <div>
            <h1>Login Page</h1>
            User Name: <input onChange={this.handleUsername} type="text"></input>
            Passord: <input type="password" onChange={this.handlepassword}></input>
            <input type="submit" onClick={this.handleLogin} disabled={this.state.loginState}></input>

            <div>{Router}</div>
        </div>

        
      
        )
    }
}

export default App