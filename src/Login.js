import React from 'react';
import {Button} from '@material-ui/core';
import "./Login.css";
import { auth, provider} from "./firebase"
import { actionTypes } from './reducer';
import { useStateValue } from "./StateProvider"

function Login() {
    //pull data from database
    const [{}, dispatch] = useStateValue();
    //for sign in window
    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://images.ctfassets.net/h52as2aiqybp/6nJZp7YrRFISxdkbB1cn8E/ece0c97972239875ccbef4cc7b5abf74/hipchat.svg" alt="" />
                <div className="login__text">
                    <h1>Sign in to GoChat</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
