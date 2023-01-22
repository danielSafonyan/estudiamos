import React from 'react'
import './styles/Header.css'

export default function Haeder() {
    return (
        <header className='header'>
            <div className="header-logo-text">Estudiamos</div>
            <nav className='header-nav'>
                <a href="#" className='header-nav-el'>Translation</a>
                <a href="#" className='header-nav-el'>Vocabulary</a>
                <a href="#" className='header-nav-el'>Mantra</a>
            </nav>
            <div className="header-account">Daniil Safonov</div>
        </header>
    )
}