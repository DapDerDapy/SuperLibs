import React from 'react';
import './contact.css';

export function Contact() {
    return (
        <main>
            <h1>Contact</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <br />
                <label>
                    Message:
                    <textarea name="message"></textarea>
                </label>
                <br />
                <button type="submit">Send</button>
            </form>
        </main>
    );
};