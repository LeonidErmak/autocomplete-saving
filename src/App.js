import './App.css';
import React, { useEffect, useState } from "react";

function App() {
    const [form, setForm] = useState({
        username: '',
        password: '',
    });
    const [userNameReal, setUserNameReal] = useState('');
    const [passwordReal, setPasswordReal] = useState('');


    useEffect(() => {
        const patternUserName = 'HS9xKdGnLbdPCZFRJ2ekrDxGeu8K8kLPXSyysvexjMzi';
        const patternPassWord = 'UEdbt9pVVbgT1EqqQGzhbUPa86pwDxBsHL1oPZ6d4E8R6PS5u3TTxE5dgsYqLFmNsEDodk1f9TKX1aAjKiypcxy';

        form.username && setUserNameReal(`${ form.username }:${ patternUserName }`);
        form.password && setPasswordReal(`${ form.password }:${ patternPassWord }`);

    },[form.username, form.password])

    const handleChange = (e) => {
        const { value, name } = e.target;

        setForm(prev => {
            prev[name] = value
            return { ...prev };
        })
    }

    const modifyCode = (e) => {
        e.preventDefault()
    }

    return (
        <div className="App">
            <div className='padding-20-20-0'>
                {'Tested in Google Chrome browser'}
            </div>
            <form id='loginVisible' autoComplete='off'>
                <div className='padding-20-20-0'>
                    <label className='displayBlock padding-5' htmlFor="username">Username:</label>
                    <input
                        className='width-300'
                        id='usernameVisible'
                        type='username'
                        onChange={ handleChange }
                        name='username'
                        value={ form.username }
                        autoComplete='off'
                    />
                </div>
                <div className='padding-20-20-0'>
                    <label className='displayBlock padding-5' htmlFor="username">Password:</label>
                    <input
                        className='width-300'
                        id='passwordVisible'
                        type='password'
                        onChange={ handleChange }
                        name='password'
                        value={ form.password }
                        autoComplete='off'
                    />
                </div>
            </form>
            <form
                id='login'
                className='padding-20-20-0'
                onSubmit={ modifyCode }
                autoComplete="on"
            >
                <div className='displayNone'>
                    <label className='displayBlock' htmlFor="username">(Hidden) Username:</label>
                    <input
                        id='username'
                        type='username'
                        onChange={ handleChange }
                        name='username'
                        value={ userNameReal }
                        autoComplete='on'
                    />
                </div>
                <div className='displayNone'>
                    <label className='displayBlock' htmlFor="username">(Hidden) Password:</label>
                    <input
                        id='password'
                        type='password'
                        onChange={ handleChange }
                        name='password'
                        value={ passwordReal }
                        autoComplete='on'
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;
