import React from 'react';
import './login.css';

export function  Login () {
    return (
        <main>
            <h1>Login</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Login</button>
                <button type="submit">Register</button>
            </form>
        </main>
    );
};