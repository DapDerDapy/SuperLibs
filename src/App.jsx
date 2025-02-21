import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Login } from './login/login';
import { MadLib } from './madlib/madlib';
import { Contact } from './contact/contact';

function App() {

  return (
    <BrowserRouter>
      <div className='body bg-light text-dark'>
        <header className='d-flex justify-content-between p-3 bg-primary text-light'>
          <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-primary'>
            <div className='navbar-brand'>
              SuperLibs!<sup>&reg;</sup>
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <NavLink to='' className='nav-link'>Login</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/madlib' className='nav-link'>MadLib</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/contact' className='nav-link'>Contact</NavLink>
              </li>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/madlib' element={<MadLib />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

        <footer className='d-flex justify-content-center p-3 bg-primary text-light'>
          <a href='https://github.com' target='_blank' rel='noopener noreferrer' className='text-light'>
            Visit our GitHub
          </a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
