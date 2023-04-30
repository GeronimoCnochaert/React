import React from 'react'
import './NavBar.css'
import CartIcon from '../CartIcon/CartIcon'


const NavBar = () => {
    const imageLogo = "../src/assets/logo.png"
    return (
        <header className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img className='imageLogo' src={imageLogo} alt="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <nav className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            Home
                        </li>
                        <li className="nav-item">
                            Productos
                        </li>
                        <li className="nav-item">
                            Marcas
                        </li>
                        <li className="nav-item">
                            Ofertas
                        </li>
                    </ul>
                </nav>
                <CartIcon />
            </div>
        </header>
    )
}

export default NavBar
